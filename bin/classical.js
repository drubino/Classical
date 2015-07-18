
/*
 * object.watch polyfill
 *
 * 2012-04-03
 *
 * By Eli Grey, http://eligrey.com
 * Modified by Doug Rubino
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

// object.watch
if (!Object.prototype.watch) {
    Object.defineProperty(Object.prototype, "watch", {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (propertyName, handler) {
            var property = Object.getOwnPropertyDescriptor(this, propertyName),
                oldValue = null,
                getter = function () {
                    return property.value;
                },
                setter = function (value) {
                    oldValue = property.value;
                    property.value = value;
			        handler.call(this, propertyName, oldValue, value);
                };

            if (!property || !property.configurable)
                return;

            Object.defineProperty(this, propertyName, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
		}
    });
}

// object.unwatch
if (!Object.prototype.unwatch) {
    Object.defineProperty(Object.prototype, "unwatch", {
        enumerable: false,
		configurable: true,
		writable: false,
		value: function (propertyName) {
		    var val = this[propertyName];
		    delete this[propertyName]; // remove accessors
		    this[propertyName] = val;
		}
    });
}
if (!global) var global = window;

/*!
 * Shim for MutationObserver interface
 * Author: Graeme Yeates (github.com/megawac)
 * Repository: https://github.com/megawac/MutationObserver.js
 * License: WTFPL V2, 2004 (wtfpl.net).
 * Though credit and staring the repo will make me feel pretty, you can modify and redistribute as you please.
 * See https://github.com/WebKit/webkit/blob/master/Source/WebCore/dom/MutationObserver.cpp for current webkit source c++ implementation
 */
global.MutationObserver = (function (window, undefined) {
    "use strict";
    /*
    prefix bugs:
        -https://bugs.webkit.org/show_bug.cgi?id=85161
        -https://bugzilla.mozilla.org/show_bug.cgi?id=749920
    */
    var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
    if (!MutationObserver) {
        var indexOf = Array.prototype.indexOf;
        var map = Array.prototype.map;
        var reduce = Array.prototype.reduce;

        /**
         * @param {Object} obj
         * @param {(string|number)} prop
         * @return {boolean}
         */
        var has = function (obj, prop) {
            return obj[prop] !== undefined; //will be nicely inlined by gcc
        };

        /**
         * Simple MutationRecord pseudoclass. No longer exposing as its not fully compliant
         * @param {Object} data
         * @return {MutationRecord}
         */
        var MutationRecord = function (data) {
            /** @typedef {MutationRecord} */
            var settings = {//technically these should be on proto so hasOwnProperty will return false for non explicitly props
                type: null,
                target: null,
                addedNodes: [],
                removedNodes: [],
                attributeName: null,
                attributeNamespace: null,
                oldValue: null
            };
            for (var prop in data) {
                if (has(settings, prop)) settings[prop] = data[prop];
            }
            return settings;
        };


        /**
         * Utility
         * Cones a element into a custom data structure designed for comparision. https://gist.github.com/megawac/8201012
         * 
         * @param {Node} $target
         * @param {!Object} config : A custom mutation config
         * @return {!Object} : Cloned data structure
         */
        var clone = function ($target, config) {
            var copy = function ($target, top) {
                var isText = $target.nodeType === 3;
                var elestruct = {
                    /** @type {Node} */
                    node: $target
                };

                if (config.attr && !isText && (top || config.descendents)) {
                    /**
                     * clone live attribute list to an object structure {name: val}
                     * @type {Object.<string, string>}
                     */
                    elestruct.attr = reduce.call($target.attributes, function (memo, attr) {
                        if (!config.afilter || config.afilter[attr.name]) {
                            memo[attr.name] = attr.value;
                        }
                        return memo;
                    }, {});
                }

                if (config.charData && isText) {
                    elestruct.charData = $target.nodeValue;
                }

                if (((config.kids || config.charData) && (top || config.descendents)) || (config.attr && config.descendents)) {
                    /** @type {Array.<!Object>} : Array of custom clone */
                    elestruct.kids = map.call($target.childNodes, function (node) {
                        return copy(node, false);
                    });
                }
                return elestruct;
            };
            return copy($target, true);
        };

        /* attributes + attributeFilter helpers */

        /**
         * fast helper to check to see if attributes object of an element has changed
         * doesnt handle the textnode case
         *
         * @param {Array.<MutationRecord>} mutations
         * @param {Node} $target
         * @param {Object.<string, string>} $oldstate : Custom attribute clone data structure from clone
         * @param {Object} filter
         */
        var findAttributeMutations = function (mutations, $target, $oldstate, filter) {
            var checked = {};
            var attributes = $target.attributes;
            var attr;
            var name;
            var i = attributes.length;
            while (i--) {
                attr = attributes[i];
                name = attr.name;
                if (!filter || has(filter, name)) {
                    if (attr.value !== $oldstate[name]) {
                        //The pushing is redundant but gzips very nicely
                        mutations.push(MutationRecord({
                            type: "attributes",
                            target: $target,
                            attributeName: name,
                            oldValue: $oldstate[name],
                            attributeNamespace: attr.namespaceURI //in ie<8 it incorrectly will return undefined... is it worth handling it and making it null?
                        }));
                    }
                    checked[name] = true;
                }
            }
            for (name in $oldstate) {
                if (!(checked[name])) {
                    mutations.push(MutationRecord({
                        target: $target,
                        type: "attributes",
                        attributeName: name,
                        oldValue: $oldstate[name]
                    }));
                }
            }
        };

        /*subtree and childlist helpers*/

        //using a non id (eg outerHTML or nodeValue) is extremely naive and will run into issues with nodes that may appear the same like <li></li>
        var counter = 1; //don't use 0 as id (falsy)
        //id property
        var expando = "mo_id";
        /**
         * Attempt to uniquely id an element for hashing. We could optimize this for legacy browsers but it hopefully wont be called enough to be a concern
         *
         * @param {Node} $ele
         * @return {(string|number)}
         */
        var getId = function ($ele) {
            try {
                return $ele.id || ($ele[expando] = $ele[expando] || counter++);
            } catch (o_O) { //ie <8 will throw if you set an unknown property on a text node
                try {
                    return $ele.nodeValue; //naive
                } catch (shitie) { //when text node is removed: https://gist.github.com/megawac/8355978 :(
                    return counter++;
                }
            }
        };

        /**
         * indexOf an element in a collection of custom nodes
         *
         * @param {Node} set
         * @param {!Object} $node : A custom cloned node
         * @param {number} idx : index to start the loop
         * @return {number}
         */
        var indexOfCustomNode = function (set, $node, idx) {
            for (/*idx = ~~idx*/; idx < set.length; idx++) {//start idx is always given for this function
                if (set[idx].node === $node) return idx;
            }
            return -1;
        };

        /**
         * searchSubtree: array of mutations so far, element, element clone, bool
         * synchronous dfs comparision of two nodes
         * This function is applied to any observed element with childList or subtree specified
         * Sorry this is kind of confusing as shit, tried to comment it a bit...
         * codereview.stackexchange.com/questions/38351 discussion of an earlier version of this func
         *
         * @param {Array} mutations
         * @param {Node} $target
         * @param {!Object} $oldstate : A custom cloned node from clone()
         * @param {!Object} config : A custom mutation config
         */
        var searchSubtree = function (mutations, $target, $oldstate, config) {
            /*
             * Helper to identify node rearrangment and stuff... 
             * There is no gaurentee that the same node will be identified for both added and removed nodes
             * if the positions have been shuffled.
             */
            var resolveConflicts = function (conflicts, node, $kids, $oldkids) {
                var size = conflicts.length - 1;
                var counter = -~(size / 2); //prevents same conflict being resolved twice consider when two nodes switch places. only one should be given a mutation event (note -~ is math.ceil shorthand)
                var $cur;
                var oldstruct;
                var conflict;
                while ((conflict = conflicts.pop())) {
                    $cur = $kids[conflict.i];
                    oldstruct = $oldkids[conflict.j];

                    //attempt to determine if there was node rearrangement... won't gaurentee all matches
                    //also handles case where added/removed nodes cause nodes to be identified as conflicts
                    if (config.kids && counter && Math.abs(conflict.i - conflict.j) >= size) {
                        mutations.push(MutationRecord({
                            type: "childList",
                            target: node,
                            addedNodes: [$cur],
                            removedNodes: [$cur]
                        }));
                        counter--; //found conflict
                    }

                    //Alright we found the resorted nodes now check for other types of mutations
                    if (config.attr && oldstruct.attr) findAttributeMutations(mutations, $cur, oldstruct.attr, config.afilter);
                    if (config.charData && $cur.nodeType === 3 && $cur.nodeValue !== oldstruct.charData) {
                        mutations.push(MutationRecord({
                            type: "characterData",
                            target: $cur,
                            oldValue: oldstruct.charData
                        }));
                    }
                    //now look @ subtree
                    if (config.descendents) findMut($cur, oldstruct);
                }
            };

            /**
             * Main worker. Finds and adds mutations if there are any
             * @param {Node} node
             * @param {!Object} old : A cloned data structure using internal clone
             */
            var findMut = function (node, old) {
                var $kids = node.childNodes;
                var $oldkids = old.kids;
                var klen = $kids.length;
                var olen = $oldkids.length;
                // if (!olen && !klen) return; //both empty; clearly no changes

                //we delay the intialization of these for marginal performance in the expected case (actually quite signficant on large subtrees when these would be otherwise unused)
                //map of checked element of ids to prevent registering the same conflict twice
                var map;
                //array of potential conflicts (ie nodes that may have been re arranged)
                var conflicts;
                var id; //element id from getId helper
                var idx; //index of a moved or inserted element

                var oldstruct;
                //current and old nodes
                var $cur;
                var $old;

                //iterate over both old and current child nodes at the same time
                var i = 0, j = 0;
                //while there is still anything left in $kids or $oldkids (same as i < $kids.length || j < $oldkids.length;)
                while (i < klen || j < olen) {
                    //current and old nodes at the indexs
                    $cur = $kids[i];
                    oldstruct = $oldkids[j];
                    $old = oldstruct && oldstruct.node;

                    if ($cur === $old) { //expected case - optimized for this case
                        //check attributes as specified by config
                        if (config.attr && oldstruct.attr) /* oldstruct.attr instead of textnode check */findAttributeMutations(mutations, $cur, oldstruct.attr, config.afilter);
                        //check character data if set
                        if (config.charData && $cur.nodeType === 3 && $cur.nodeValue !== oldstruct.charData) {
                            mutations.push(MutationRecord({
                                type: "characterData",
                                target: $cur,
                                oldValue: oldstruct.charData
                            }));
                        }

                        //resolve conflicts
                        if (conflicts) resolveConflicts(conflicts, node, $kids, $oldkids);

                        //recurse on next level of children. Avoids the recursive call when $cur.firstChild is null and kids.length is 0
                        if (config.descendents && ($cur.firstChild || oldstruct.kids.length)) findMut($cur, oldstruct);

                        i++;
                        j++;
                    } else { //(uncommon case) lookahead until they are the same again or the end of children
                        if (!map) {//delayed initalization
                            map = {};
                            conflicts = [];
                        }
                        if ($cur) {
                            //check id is in the location map otherwise do a indexOf search
                            if (!has(map, (id = getId($cur)))) { //to prevent double checking
                                //custom indexOf using comparitor checking oldkids[i].node === $cur
                                if ((idx = indexOfCustomNode($oldkids, $cur, j)) === -1) {
                                    if (config.kids) {
                                        mutations.push(MutationRecord({
                                            type: "childList",
                                            target: node,
                                            addedNodes: [$cur]//$cur is a new node
                                        }));
                                    }
                                } else {
                                    map[id] = true; //mark id as found
                                    conflicts.push({ //add conflict
                                        i: i,
                                        j: idx
                                    });
                                }
                            }
                            i++;
                        }

                        if ($old) {
                            if (!has(map, (id = getId($old)))) {
                                if ((idx = indexOf.call($kids, $old, i)) === -1) { //dont need to use a special indexof
                                    if (config.kids) {
                                        mutations.push(MutationRecord({
                                            type: "childList",
                                            target: old.node,
                                            removedNodes: [$old]
                                        }));
                                    }
                                } else if (idx === 0) { //special case: if idx=0 i and j are congurent so we can continue without conflict
                                    continue;
                                } else {
                                    map[id] = true;
                                    conflicts.push({
                                        i: idx,
                                        j: j
                                    });
                                }
                            }
                            j++;
                        }
                    }//end uncommon case
                }//end loop

                //resolve any remaining conflicts
                if (conflicts) resolveConflicts(conflicts, node, $kids, $oldkids);
            };
            findMut($target, $oldstate);
        };

        /**
         * Creates a func to find all the mutations
         *
         * @param {Node} $target
         * @param {!Object} config : A custom mutation config
         */
        var createMutationSearcher = function ($target, config) {
            /** type {Elestuct} */
            var $oldstate = clone($target, config); //create the cloned datastructure

            /**
             * consumes array of mutations we can push to
             *
             * @param {Array.<MutationRecord>} mutations
             */
            return function (mutations) {
                var olen = mutations.length;

                //Alright we check base level changes in attributes... easy
                if (config.attr && $oldstate.attr) {
                    findAttributeMutations(mutations, $target, $oldstate.attr, config.afilter);
                }

                //check childlist or subtree for mutations
                if (config.kids || config.descendents) {
                    searchSubtree(mutations, $target, $oldstate, config);
                }


                //reclone data structure if theres changes
                if (mutations.length !== olen) {
                    /** type {Elestuct} */
                    $oldstate = clone($target, config);
                }
            };
        };

        /**
         * @param {function(Array.<MutationRecord>, MutationObserver)} listener
         * @constructor
         */
        MutationObserver = function (listener) {
            var self = this;
            /**
             * @type {Array.<function(Array.<MutationRecord>)>}
             * @private
             */
            self._watched = [];
            /** 
             * Recursive timeout function to check all observed items for mutations
             * @private
             */
            self._checker = function () {
                var mutations = self.takeRecords();

                if (mutations.length) { //fire away
                    listener.call(self, mutations, self); //call is not spec but consistent with other implementations
                }
                /** @private */
                self._timeout = setTimeout(self._checker, MutationObserver._period);
            };
        };

        /** 
         * Period to check for mutations (~32 times/sec)
         * @type {number}
         * @expose
         */
        MutationObserver._period = 30 /*ms+runtime*/;

        /**
         * see http://dom.spec.whatwg.org/#dom-mutationobserver-observe
         * not going to throw here but going to follow the current spec config sets
         * @param {Node} $target
         * @param {Object} config : MutationObserverInit configuration dictionary
         * @expose
         * @return undefined
         */
        MutationObserver.prototype.observe = function ($target, config) {
            var watched = this._watched;
            for (var i = 0; i < watched.length; i++) {
                if (watched[i].tar === $target) {
                    watched.splice(i, 1);
                    break;
                }
            }

            /** 
             * Using slightly different names so closure can go ham
             * @type {!Object} : A custom mutation config
             */
            var settings = {
                attr: !!(config.attributes || config.attributeFilter || config.attributeOldValue),

                //some browsers are strict in their implementation that config.subtree and childList must be set together. We don't care - spec doesn't specify
                kids: !!config.childList,
                descendents: !!config.subtree,
                charData: !!(config.characterData || config.characterDataOldValue)
            };
            if (config.attributeFilter) {
                /**
                 * converts to a {key: true} dict for faster lookup
                 * @type {Object.<String,Boolean>}
                 */
                settings.afilter = config.attributeFilter.reduce(function (a, b) {
                    a[b] = true;
                    return a;
                }, {});
            }

            watched.push({
                tar: $target,
                fn: createMutationSearcher($target, settings)
            });

            //reconnect if not connected
            if (!this._timeout) {
                this._checker();
            }
        };

        /**
         * Finds mutations since last check and empties the "record queue" i.e. mutations will only be found once
         * @expose
         * @return {Array.<MutationRecord>}
         */
        MutationObserver.prototype.takeRecords = function () {
            var mutations = [];
            var watched = this._watched;

            for (var i = 0; i < watched.length; i++) {
                watched[i].fn(mutations);
            }

            return mutations;
        };

        /**
         * @expose
         * @return undefined
         */
        MutationObserver.prototype.disconnect = function () {
            this._watched.length = 0; //clear the stuff being observed
            clearTimeout(this._timeout); //ready for garbage collection
            /** @private */
            this._timeout = null;
        };
    }
    return MutationObserver;
})(window);
var Classical;
(function (Classical) {
    var Hash;
    (function (Hash) {
        function forBoolean(key) {
            return +key;
        }
        Hash.forBoolean = forBoolean;
        function forNumber(key, seed) {
            return Hash.forString(key.toString(), seed);
        }
        Hash.forNumber = forNumber;
        function forString(key, seed) {
            if (seed === undefined)
                seed = 37;
            var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
            remainder = key.length & 3;
            bytes = key.length - remainder;
            h1 = seed;
            c1 = 0xcc9e2d51;
            c2 = 0x1b873593;
            i = 0;
            while (i < bytes) {
                k1 = ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(++i) & 0xff) << 8) | ((key.charCodeAt(++i) & 0xff) << 16) | ((key.charCodeAt(++i) & 0xff) << 24);
                ++i;
                k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
                k1 = (k1 << 15) | (k1 >>> 17);
                k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;
                h1 ^= k1;
                h1 = (h1 << 13) | (h1 >>> 19);
                h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
                h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
            }
            k1 = 0;
            switch (remainder) {
                case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
                case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
                case 1:
                    k1 ^= (key.charCodeAt(i) & 0xff);
                    k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
                    k1 = (k1 << 15) | (k1 >>> 17);
                    k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
                    h1 ^= k1;
            }
            h1 ^= key.length;
            h1 ^= h1 >>> 16;
            h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
            h1 ^= h1 >>> 13;
            h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
            h1 ^= h1 >>> 16;
            return h1 >>> 0;
        }
        Hash.forString = forString;
    })(Hash = Classical.Hash || (Classical.Hash = {}));
})(Classical || (Classical = {}));
if (!global)
    global = window;
var Classical;
(function (Classical) {
    var _Native;
    (function (_Native) {
        var StringPrototype = String.prototype;
        var NumberPrototype = Number.prototype;
        var BooleanPrototype = Boolean.prototype;
        var ObjectPrototype = Object.prototype;
        var ArrayPrototype = Array.prototype;
        Object.defineProperty(ObjectPrototype, 'equals', {
            value: function (other) {
                return this === other;
            },
            enumerable: false,
            configurable: true,
            writable: true
        });
        Object.defineProperty(ObjectPrototype, 'getType', {
            value: function () {
            },
            enumerable: false,
            configurable: true,
            writable: true
        });
        Object.defineProperty(ObjectPrototype, 'getHashCode', {
            value: function () {
                Classical.Assert.isFalse(Object.isFrozen(this) && !this._hashCode, 'The object has been frozen before its hash code was generated. Consider calling getHashCode prior to freezing.');
                if (this._hashCode === undefined)
                    Object.defineProperty(this, '_hashCode', {
                        value: Classical.Hash.forNumber(Math.random()),
                        enumerable: false
                    });
                return this._hashCode;
            },
            enumerable: false,
            configurable: true,
            writable: true
        });
        var freeze = Object.freeze;
        Object.freeze = function (o) {
            if (o && o.getHashCode && !Object.isFrozen(o))
                o.getHashCode();
            freeze(o);
        };
        var stringify = JSON.stringify;
        JSON.stringify = function (value) {
            var hashCode = null;
            if (value && value._hashCode) {
                hashCode = value._hashCode;
                delete value._hashCode;
            }
            var result = stringify(value);
            if (hashCode)
                value._hashCode = hashCode;
            return result;
        };
        Object.defineProperty(ObjectPrototype, 'is', {
            value: function (type) {
                var u = Classical.Utilities;
                if (u.isNullOrUndefined(type))
                    return false;
                return this.getType().isAssignableTo(typeOf(type));
            },
            enumerable: false,
            configurable: true,
            writable: true
        });
        Object.defineProperty(ObjectPrototype, 'as', {
            value: function () {
                return this;
            },
            enumerable: false,
            configurable: true,
            writable: true
        });
        Object.defineProperty(ObjectPrototype, 'getType', {
            value: function () {
                return typeOf(this.constructor);
            },
            enumerable: false,
            configurable: true,
            writable: true
        });
        Object.defineProperty(StringPrototype, 'equals', {
            value: function (other) {
                if (!Classical.Utilities.isString(other))
                    return false;
                return this.toString() === other.toString();
            },
            enumerable: false,
            configurable: true,
            writable: true
        });
        Object.defineProperty(StringPrototype, 'getHashCode', {
            value: function () {
                return Classical.Hash.forString(this);
            },
            enumerable: false,
            configurable: true,
            writable: true
        });
        Object.defineProperty(NumberPrototype, 'equals', {
            value: function (other) {
                return (this + 0) === other;
            },
            enumerable: false,
            configurable: true,
            writable: true
        });
        Object.defineProperty(NumberPrototype, 'getHashCode', {
            value: function () {
                return Classical.Hash.forNumber(this + 0);
            },
            enumerable: false,
            configurable: true,
            writable: true
        });
        Object.defineProperty(BooleanPrototype, 'equals', {
            value: function (other) {
                if (!Classical.Utilities.isBoolean(other))
                    return false;
                return this == other;
            },
            enumerable: false,
            configurable: true,
            writable: true
        });
        Object.defineProperty(BooleanPrototype, 'getHashCode', {
            value: function () {
                return Classical.Hash.forBoolean(this);
            },
            enumerable: false,
            configurable: true,
            writable: true
        });
        ArrayPrototype.add = function (item) {
            this.push(item);
            return this;
        };
        ArrayPrototype.addRange = function (items) {
            var _this = this;
            Classical.Assert.isDefined(items);
            items.forEach(function (item) { return _this.add(item); });
            return this;
        };
        ArrayPrototype.remove = function (item) {
            var u = Classical.Utilities, array = this;
            for (var i = 0, length = this.length; i < length; i++) {
                if (u.areEqual(item, array[i])) {
                    array.splice(i, 1);
                    i--;
                    length--;
                }
            }
            return this;
        };
        ArrayPrototype.removeAt = function (index) {
            Classical.Assert.isTrue(index >= 0 && index < this.length, 'The index is out of range.');
            this.splice(index, 1);
            return this;
        };
        ArrayPrototype.clear = function () {
            this.length = 0;
            return this;
        };
        ArrayPrototype.get = function (index) {
            Classical.Assert.isTrue(index >= 0 && index < this.length, 'The index is out of range.');
            return this[index];
        };
        ArrayPrototype.set = function (index, item) {
            Classical.Assert.isTrue(index >= 0, 'The index must be greater than or equal to zero.');
            this[index] = item;
            return this;
        };
    })(_Native = Classical._Native || (Classical._Native = {}));
})(Classical || (Classical = {}));
var Classical;
(function (Classical) {
    var Utilities;
    (function (Utilities) {
        var toString = Object.prototype.toString;
        var slice = Array.prototype.slice;
        function areEqual(first, second) {
            if (isDefined(first) && isDefined(first.equals))
                return first.equals(second);
            if (isDefined(second) && isDefined(second.equals))
                return second.equals(first);
            return first === second;
        }
        Utilities.areEqual = areEqual;
        function argumentsToArray(args) {
            return slice.call(args, 0);
        }
        Utilities.argumentsToArray = argumentsToArray;
        function coalesce(value, alternative) {
            return isNullOrUndefined(value) ? alternative : value;
        }
        Utilities.coalesce = coalesce;
        function extend(destination, source) {
            Classical.Assert.isDefined(destination);
            Classical.Assert.isDefined(source);
            for (var property in source) {
                destination[property] = source[property];
            }
            return destination;
        }
        Utilities.extend = extend;
        function format(template) {
            var inputs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                inputs[_i - 1] = arguments[_i];
            }
            Classical.Assert.isDefined(template, 'The template is not defined.');
            var result = '', current, lookAhead, startIndex = 0, endIndex, inTemplate = false, length = template.length, maxIndex = length - 1, inputIndex, inputValue;
            for (var i = 0, length = template.length; i < length; i++) {
                current = template[i];
                if (!inTemplate && current === '{') {
                    lookAhead = i <= maxIndex ? template[i + 1] : '';
                    if (lookAhead === '{') {
                        endIndex = i;
                        result += template.substr(startIndex, endIndex - startIndex + 1);
                        startIndex = i + 2;
                        i++;
                    }
                    else {
                        inTemplate = true;
                        endIndex = i - 1;
                        result += template.substr(startIndex, endIndex - startIndex + 1);
                        startIndex = i + 1;
                    }
                }
                else if (inTemplate && current === '}') {
                    inTemplate = false;
                    endIndex = i - 1;
                    inputIndex = +template.substr(startIndex, endIndex - startIndex + 1);
                    Classical.Assert.isFalse(isNaN(inputIndex), 'The template is not formatted correctly.');
                    Classical.Assert.isFalse(inputIndex > maxIndex, 'The template contains an index that is out of bounds.');
                    inputValue = inputs[inputIndex];
                    result += isDefined(inputValue) ? inputValue.toString() : '';
                    startIndex = i + 1;
                }
                else if (!inTemplate && current === '}') {
                    lookAhead = i <= maxIndex ? template[i + 1] : '';
                    Classical.Assert.isTrue(lookAhead === '}', 'The template contains a closing bracket without an opening bracket.');
                    endIndex = i;
                    result += template.substr(startIndex, endIndex - startIndex + 1);
                    startIndex = i + 2;
                    i++;
                }
            }
            Classical.Assert.isFalse(inTemplate, 'The template contains an opening bracket without a closing bracket.');
            if (!inTemplate && startIndex <= maxIndex) {
                endIndex = maxIndex;
                result += template.substr(startIndex, endIndex - startIndex + 1);
            }
            return result;
        }
        Utilities.format = format;
        function titleCase(title) {
            var exclude = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                exclude[_i - 1] = arguments[_i];
            }
            if (!title)
                return title;
            title = title.trim();
            var hasPeriod = title[title.length - 1] === '.';
            if (hasPeriod)
                title = title.substr(0, title.length - 1);
            var words = title.split(' ').query().where(function (w) { return w && w.length > 0; }), excludeQuery = exclude.query(), excludedWords = words.dictionary(function (w) { return w; }, function (w) { return excludeQuery.hasAny(function (ex) { return ex === w; }); });
            title = words.aggregate(function (a, b) { return a + (a === '' ? properCaseWord(b) : (' ' + (excludedWords.getValue(b) ? b : properCaseWord(b)))); }, '');
            if (hasPeriod)
                title += '.';
            return title;
        }
        Utilities.titleCase = titleCase;
        function properCaseWord(word) {
            return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
        }
        function sentenceCase(sentence) {
            var ignore = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                ignore[_i - 1] = arguments[_i];
            }
            if (!sentence)
                return sentence;
            sentence = sentence.trim();
            var hasPeriod = sentence[sentence.length - 1] === '.';
            if (hasPeriod)
                sentence = sentence.substr(0, sentence.length - 1);
            var words = sentence.split(' ').query().where(function (w) { return w && w.length > 0; }), excludeQuery = ignore.query(), excludedWords = words.dictionary(function (w) { return w; }, function (w) { return excludeQuery.hasAny(function (ex) { return ex === w; }); });
            sentence = words.aggregate(function (a, b) { return a + (a === '' ? properCaseWord(b) : (' ' + (excludedWords.getValue(b) ? b : b.toLowerCase()))); }, '');
            return sentence + '.';
        }
        Utilities.sentenceCase = sentenceCase;
        function getPropertyNames(value) {
            if (isNullOrUndefined(value))
                return [];
            if (!isObject(value))
                value = value.constructor.prototype;
            var properties = [];
            while (value) {
                properties.addRange(Object.getOwnPropertyNames(value));
                value = Object.getPrototypeOf(value);
            }
            return properties.query().distinct().array();
        }
        Utilities.getPropertyNames = getPropertyNames;
        function isNull(value) {
            return value === null;
        }
        Utilities.isNull = isNull;
        function isUndefined(value) {
            return value === undefined;
        }
        Utilities.isUndefined = isUndefined;
        function isNullOrUndefined(value) {
            return value == null;
        }
        Utilities.isNullOrUndefined = isNullOrUndefined;
        function isDefined(value) {
            return !isNullOrUndefined(value);
        }
        Utilities.isDefined = isDefined;
        function isNumber(value) {
            return toString.call(value) === '[object Number]';
        }
        Utilities.isNumber = isNumber;
        function isNaN(value) {
            return isNumber(value) && window['isNaN'](value);
        }
        Utilities.isNaN = isNaN;
        function isInfinity(value) {
            return isNumber(value) && !Utilities.isNaN(value) && !isFinite(value);
        }
        Utilities.isInfinity = isInfinity;
        function isInteger(value) {
            return isDefined(value) && isNumber(value) && value % 1 === 0;
        }
        Utilities.isInteger = isInteger;
        function isString(value) {
            return toString.call(value) === '[object String]';
        }
        Utilities.isString = isString;
        function isBoolean(value) {
            return toString.call(value) === '[object Boolean]';
        }
        Utilities.isBoolean = isBoolean;
        function isTrue(value) {
            if (!isBoolean(value))
                return false;
            return value == true;
        }
        Utilities.isTrue = isTrue;
        function isTruthy(value) {
            return value ? true : false;
        }
        Utilities.isTruthy = isTruthy;
        function isFalse(value) {
            if (!isBoolean(value))
                return false;
            return value == false;
        }
        Utilities.isFalse = isFalse;
        function isFalsy(value) {
            return value ? false : true;
        }
        Utilities.isFalsy = isFalsy;
        function isObject(value) {
            return !isNull(value) && typeof (value) === 'object';
        }
        Utilities.isObject = isObject;
        function isEmptyObject(value) {
            return isObject(value) && objectToString.call(value) === objectToStringValue && !hasAdditionalProperties(value);
        }
        Utilities.isEmptyObject = isEmptyObject;
        function hasAdditionalProperties(value) {
            if (!objectProperties)
                objectProperties = getPropertyNames({});
            while (value !== Object.prototype) {
                var currentProperties = Object.getOwnPropertyNames(value);
                for (var i = 0, length = currentProperties.length; i < length; i++) {
                    var property = currentProperties[i];
                    if (objectProperties.indexOf(property) < 0)
                        return true;
                }
                value = Object.getPrototypeOf(value);
            }
            return false;
        }
        var objectToString = {}.toString;
        var objectToStringValue = '[object Object]';
        var objectProperties = null;
        function isArray(value) {
            return toString.call(value) === '[object Array]';
        }
        Utilities.isArray = isArray;
        function isFunction(value) {
            return typeof (value) === 'function';
        }
        Utilities.isFunction = isFunction;
    })(Utilities = Classical.Utilities || (Classical.Utilities = {}));
})(Classical || (Classical = {}));
var Classical;
(function (Classical) {
    var Assert;
    (function (Assert) {
        var u = Classical.Utilities;
        function staticClass() {
            builder(false, 'Static classes cannot be instantiated.');
        }
        Assert.staticClass = staticClass;
        function isDefined(value, message) {
            builder(u.isDefined(value), message, 'The value is either null or undefined.');
        }
        Assert.isDefined = isDefined;
        function nullOrUndefined(value, message) {
            builder(u.isNullOrUndefined(value), message, 'The value is either null or undefined.');
        }
        Assert.nullOrUndefined = nullOrUndefined;
        function isTrue(expression, message) {
            builder(expression === true, message, 'The expression was not True.');
        }
        Assert.isTrue = isTrue;
        function isFalse(expression, message) {
            builder(expression === false, message, 'The expression was not False.');
        }
        Assert.isFalse = isFalse;
        function isInvalid(message) {
            builder(false, message, 'The system is in an invalid state.');
        }
        Assert.isInvalid = isInvalid;
        function notImplemented(message) {
            throw new Exception(u.coalesce(message, 'The method has not been been implemented.'));
        }
        Assert.notImplemented = notImplemented;
        function builder(expression, message, defaultMessage) {
            if (expression === false)
                throw new Exception(u.coalesce(message, defaultMessage));
        }
        var Exception = (function () {
            function Exception(message) {
                if (!message) {
                    message = 'An exception was encountered.';
                }
                else {
                    if (message[message.length - 1] !== '.')
                        message += '.';
                }
                this.message = message;
                this.setStackTrace();
            }
            Exception.prototype.toString = function () {
                return this.message + '\n' + this.stackTrace;
            };
            Exception.prototype.setStackTrace = function () {
                var error = new Error();
                if (error.stack) {
                    this.stackTrace = error.stack.toString();
                    return;
                }
                function getStackTrace(f) {
                    return !f ? [] : getStackTrace(f.caller).concat([f.toString().split('(')[0].substring(9) + '(' + f.arguments.join(',') + ')']);
                }
                var stackTrace = getStackTrace(arguments.callee.caller);
                this.stackTrace = '';
                for (var i = 0; i < stackTrace.length; i++)
                    this.stackTrace += (stackTrace[i] + '\n');
            };
            return Exception;
        })();
        Assert.Exception = Exception;
    })(Assert = Classical.Assert || (Classical.Assert = {}));
})(Classical || (Classical = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Classical;
(function (Classical) {
    var Collections;
    (function (Collections) {
        var u = Classical.Utilities;
        var numberOfBuckets = [7, 13, 23, 43, 83, 163, 317, 631, 1259, 2503, 5003, 9973, 19937, 39869, 79699, 159389, 318751, 637499, 1274989, 2549951, 5099893, 10199767, 20399531, 40799041, 81598067, 163196129, 326392249, 652784471];
        var Dictionary = (function () {
            function Dictionary(capacity) {
                this._initialCapacity = u.coalesce(capacity, 0);
                this.clear();
            }
            Object.defineProperty(Dictionary.prototype, "keys", {
                get: function () {
                    return new DictionaryKeyCollection(this);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Dictionary.prototype, "values", {
                get: function () {
                    return this.query().select(function (pair) { return pair.value; });
                },
                enumerable: true,
                configurable: true
            });
            Dictionary.prototype.getEnumerator = function () {
                return new DictionaryEnumerator(this);
            };
            Dictionary.prototype.query = function () {
                return new Collections.Queryable(this);
            };
            Dictionary.prototype.forEach = function (operation) {
                forEach(this, operation);
            };
            Dictionary.prototype.array = function () {
                var array = [];
                this.forEach(function (pair) {
                    array.add(pair);
                });
                return array;
            };
            Dictionary.prototype.add = function (key, value) {
                Classical.Assert.isDefined(key, 'The key is null or undefined.');
                var added = this.addWithoutRebalancing(this._hashTable, this._numberOfBuckets, {
                    key: key,
                    value: value
                });
                if (added)
                    this._numberOfElements++;
                this.rebalanceIfNecessary();
                return this;
            };
            Dictionary.prototype.remove = function (key) {
                var elements = this.getElements(key);
                var pair = this.getPair(elements, this._hashTable, this._numberOfBuckets, key);
                if (u.isDefined(pair)) {
                    elements.remove(pair);
                    this._numberOfElements--;
                }
                return this;
            };
            Dictionary.prototype.getValue = function (key) {
                var keyAny = key;
                if (u.isNullOrUndefined(key) || !keyAny.equals || !keyAny.getHashCode)
                    return undefined;
                var elements = this.getElements(key);
                if (elements === undefined)
                    return undefined;
                for (var i = 0, elementsLength = elements.length; i < elementsLength; i++) {
                    var pair = elements[i];
                    if (pair.key.equals(key))
                        return pair.value;
                }
                return undefined;
            };
            Dictionary.prototype.containsKey = function (key) {
                var keyAny = key;
                if (u.isNullOrUndefined(key) || !keyAny.equals || !keyAny.getHashCode)
                    return false;
                var elements = this.getElements(key);
                return u.isDefined(this.getPair(elements, this._hashTable, this._numberOfBuckets, key));
            };
            Dictionary.prototype.clear = function () {
                this._hashTable = {};
                this._numberOfElements = 0;
                var bucketIndex = DictionaryUtilities.capacityToBucketIndex(this._initialCapacity);
                this._bucketIndex = bucketIndex;
                this._numberOfBuckets = DictionaryUtilities.getNumberOfBuckets(bucketIndex);
            };
            Dictionary.prototype.count = function () {
                return this._numberOfElements;
            };
            Dictionary.prototype.getIndex = function (key) {
                return key.getHashCode() % this._numberOfBuckets;
            };
            Dictionary.prototype.getElements = function (key) {
                var index = this.getIndex(key);
                return this._hashTable[index];
            };
            Dictionary.prototype.getPair = function (elements, hashTable, numberOfBuckets, key) {
                if (elements === undefined)
                    return null;
                var current;
                for (var i = 0, elementsLength = elements.length; i < elementsLength; i++) {
                    current = elements[i];
                    if (current.key.equals(key))
                        return current;
                }
                return null;
            };
            Dictionary.prototype.addWithoutRebalancing = function (hashTable, numberOfBuckets, pair, checkForExistance) {
                if (checkForExistance === void 0) { checkForExistance = true; }
                var keyHashCode = pair.key.getHashCode() % numberOfBuckets;
                var elements = hashTable[keyHashCode];
                if (elements === undefined) {
                    elements = [];
                    hashTable[keyHashCode] = elements;
                }
                if (checkForExistance) {
                    var foundPair = this.getPair(elements, hashTable, numberOfBuckets, pair.key);
                    if (u.isDefined(foundPair)) {
                        foundPair.value = pair.value;
                        return false;
                    }
                }
                elements.push(pair);
                return true;
            };
            Dictionary.prototype.rebalanceIfNecessary = function () {
                if (this._numberOfElements > (DictionaryUtilities.loadFactor * this._numberOfBuckets))
                    this.rebalance();
            };
            Dictionary.prototype.rebalance = function () {
                var currentBucketIndex = this._bucketIndex, currentNumberOfBuckets = this._numberOfBuckets, currentHashTable = this._hashTable, nextBucketIndex = currentBucketIndex + 1, nextNumberOfBuckets = DictionaryUtilities.getNumberOfBuckets(nextBucketIndex), nextHashTable = {}, elements;
                for (var i = 0; i < currentNumberOfBuckets; i++) {
                    elements = currentHashTable[i];
                    if (u.isDefined(elements)) {
                        for (var j = 0, elementsLength = elements.length; j < elementsLength; j++) {
                            this.addWithoutRebalancing(nextHashTable, nextNumberOfBuckets, elements[j], false);
                        }
                    }
                }
                this._bucketIndex = nextBucketIndex;
                this._numberOfBuckets = nextNumberOfBuckets;
                this._hashTable = nextHashTable;
            };
            return Dictionary;
        })();
        Collections.Dictionary = Dictionary;
        var DictionaryUtilities = (function () {
            function DictionaryUtilities() {
                Classical.Assert.staticClass();
            }
            DictionaryUtilities.getNumberOfBuckets = function (numberOfRebalances) {
                var result = numberOfBuckets[numberOfRebalances];
                Classical.Assert.isDefined(result, 'The maximum size for a Dictionary has been exceeded.');
                return result;
            };
            DictionaryUtilities.capacityToBucketIndex = function (capacity) {
                var bucketValue = capacity / DictionaryUtilities.loadFactor, currentBucketValue;
                for (var i = 0, length = numberOfBuckets.length; i < length; i++) {
                    currentBucketValue = numberOfBuckets[i];
                    if (currentBucketValue > bucketValue)
                        return i;
                }
                Classical.Assert.isInvalid('The capacity is too large for the dictionary.');
            };
            DictionaryUtilities.loadFactor = 2;
            return DictionaryUtilities;
        })();
        var DictionaryEnumerator = (function () {
            function DictionaryEnumerator(dictionary) {
                this._index = -1;
                Classical.Assert.isDefined(dictionary);
                this._hashTable = dictionary._hashTable;
                this._numberOfBuckets = dictionary._numberOfBuckets;
                this._bucketIndex = 0;
                this._elements = this._hashTable[this._bucketIndex];
            }
            Object.defineProperty(DictionaryEnumerator.prototype, "current", {
                get: function () {
                    return this._elements[this._index];
                },
                enumerable: true,
                configurable: true
            });
            DictionaryEnumerator.prototype.moveNext = function () {
                var bucketIndex = this._bucketIndex, numberOfBuckets = this._numberOfBuckets, elements = this._elements, hashTable = this._hashTable;
                if (u.isDefined(elements)) {
                    this._index++;
                    if (this._index < elements.length)
                        return true;
                    this._elements = undefined;
                    elements = this._elements;
                }
                if (bucketIndex + 1 >= numberOfBuckets)
                    return false;
                for (var i = this._bucketIndex + 1; i < numberOfBuckets; i++) {
                    elements = hashTable[i];
                    if (u.isDefined(elements)) {
                        this._elements = elements;
                        this._bucketIndex = i;
                        this._index = 0;
                        return true;
                    }
                }
                return false;
            };
            return DictionaryEnumerator;
        })();
        var DictionaryKeyCollection = (function () {
            function DictionaryKeyCollection(dictionary) {
                Classical.Assert.isDefined(dictionary);
                this._dictionary = dictionary;
            }
            DictionaryKeyCollection.prototype.getEnumerator = function () {
                return new DictionaryKeyEnumerator(this._dictionary);
            };
            DictionaryKeyCollection.prototype.query = function () {
                return new Collections.Queryable(this);
            };
            DictionaryKeyCollection.prototype.forEach = function (operation) {
                forEach(this, operation);
            };
            DictionaryKeyCollection.prototype.array = function () {
                var array = new Array();
                this.forEach(function (pair) { return array.add(pair); });
                return array;
            };
            DictionaryKeyCollection.prototype.count = function () {
                return this._dictionary.count();
            };
            return DictionaryKeyCollection;
        })();
        var DictionaryKeyEnumerator = (function () {
            function DictionaryKeyEnumerator(dictionary) {
                Classical.Assert.isDefined(dictionary);
                this._dictionaryEnumerator = dictionary.getEnumerator();
            }
            Object.defineProperty(DictionaryKeyEnumerator.prototype, "current", {
                get: function () {
                    return this._dictionaryEnumerator.current.key;
                },
                enumerable: true,
                configurable: true
            });
            DictionaryKeyEnumerator.prototype.moveNext = function () {
                return this._dictionaryEnumerator.moveNext();
            };
            return DictionaryKeyEnumerator;
        })();
        var KeyValuePair = (function () {
            function KeyValuePair(key, value) {
                this.key = key;
                this.value = value;
            }
            return KeyValuePair;
        })();
        Collections.KeyValuePair = KeyValuePair;
        function forEach(items, operation) {
            var enumerator = items.getEnumerator(), current;
            while (enumerator.moveNext()) {
                var current = enumerator.current;
                operation.bind(current)(current);
            }
        }
    })(Collections = Classical.Collections || (Classical.Collections = {}));
})(Classical || (Classical = {}));
function typeOf(ctor) {
    return Classical.Reflection.Type.getType(ctor);
}
function moduleOf(ctor) {
    var type = typeOf(ctor);
    if (!type)
        return null;
    return Classical.Reflection.Module.getModule(type);
}
function Null() {
    return null;
}
;
function Undefined() {
    return undefined;
}
;
var Classical;
(function (Classical) {
    var Reflection;
    (function (Reflection) {
        var u = Classical.Utilities;
        var c = Classical.Collections;
        function isEnum(enumCandidate) {
            if (!u.isObject(enumCandidate))
                return false;
            var propertyNames = Object.getOwnPropertyNames(enumCandidate);
            var numberProperties = propertyNames.query().where(function (p) {
                var match = p.match(/[0-9]+/);
                return match && match.length === 1;
            });
            var numberPropertiesCount = numberProperties.count();
            if (numberPropertiesCount == 0 || (numberPropertiesCount * 2 !== propertyNames.length))
                return false;
            numberProperties.forEach(function (n) {
                if (!enumCandidate[n])
                    return false;
            });
            return true;
        }
        Reflection.isEnum = isEnum;
        (function (Modifier) {
            Modifier[Modifier["Public"] = 0] = "Public";
            Modifier[Modifier["Protected"] = 1] = "Protected";
            Modifier[Modifier["Private"] = 2] = "Private";
            Modifier[Modifier["Instance"] = 3] = "Instance";
            Modifier[Modifier["Static"] = 4] = "Static";
        })(Reflection.Modifier || (Reflection.Modifier = {}));
        var Modifier = Reflection.Modifier;
        Reflection.Public = 0 /* Public */;
        Reflection.Protected = 1 /* Protected */;
        Reflection.Private = 2 /* Private */;
        Reflection.Instance = 3 /* Instance */;
        Reflection.Static = 4 /* Static */;
        var defaultModifier = [Reflection.Public, Reflection.Instance];
        var LanguageConstruct = (function () {
            function LanguageConstruct(password) {
                Classical.Assert.isTrue(password === constructorPassword, 'You do not have permission to create instances of this type.');
            }
            Object.defineProperty(LanguageConstruct.prototype, "name", {
                get: function () {
                    throw Classical.Assert.notImplemented();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LanguageConstruct.prototype, "fullName", {
                get: function () {
                    throw Classical.Assert.notImplemented();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LanguageConstruct.prototype, "isPublic", {
                get: function () {
                    throw Classical.Assert.notImplemented();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LanguageConstruct.prototype, "isProtected", {
                get: function () {
                    throw Classical.Assert.notImplemented();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LanguageConstruct.prototype, "isPrivate", {
                get: function () {
                    throw Classical.Assert.notImplemented();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LanguageConstruct.prototype, "isStatic", {
                get: function () {
                    throw Classical.Assert.notImplemented();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LanguageConstruct.prototype, "isInstance", {
                get: function () {
                    throw Classical.Assert.notImplemented();
                },
                enumerable: true,
                configurable: true
            });
            return LanguageConstruct;
        })();
        Reflection.LanguageConstruct = LanguageConstruct;
        var Module = (function (_super) {
            __extends(Module, _super);
            function Module(password, name, scope, base) {
                _super.call(this, password);
                if (base && base != Module.global)
                    this._fullName = u.format("{0}.{1}", base.fullName, name);
                else
                    this._fullName = name;
                this._name = name;
                this._scope = scope;
                this._base = base;
            }
            Object.defineProperty(Module.prototype, "name", {
                get: function () {
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "fullName", {
                get: function () {
                    return this._fullName;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "isPublic", {
                get: function () {
                    return true;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "isProtected", {
                get: function () {
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "isPrivate", {
                get: function () {
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "isStatic", {
                get: function () {
                    throw 'isStatic is not valid for a Type.';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "isInstance", {
                get: function () {
                    throw 'isInstance is not valid for a Type.';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "scope", {
                get: function () {
                    return this._scope;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "moduleValue", {
                get: function () {
                    return this.scope;
                },
                enumerable: true,
                configurable: true
            });
            Module.prototype.getModules = function () {
                if (!this._modules)
                    this._modules = this._initializeModules();
                return this._modules.array().query();
            };
            Module.prototype.getTypes = function () {
                if (!this._types)
                    this._types = this._initializeTypes();
                return this._types.array().query();
            };
            Module.prototype.getFunctions = function () {
                if (!this._functions)
                    this._functions = this._initializeFunctions();
                return this._functions.array().query();
            };
            Module.prototype.getFunction = function (name) {
                Classical.Assert.isDefined(name);
                return this.getFunctions.apply(this).query().singleOrDefault(function (p) { return p.name === name; });
            };
            Module.prototype.getVariables = function () {
                if (!this._variables)
                    this._variables = this._initializeVariables();
                return this._variables.array().query();
            };
            Module.prototype.getVariable = function (name) {
                Classical.Assert.isDefined(name);
                return this.getVariables.apply(this).query().singleOrDefault(function (p) { return p.name === name; });
            };
            Module.prototype._initializeModules = function () {
                var initializedModules = [];
                var scope = this.scope;
                if (!scope)
                    return initializedModules;
                var moduleProperties = Object.getOwnPropertyNames(scope);
                for (var i = 0; i < moduleProperties.length; i++) {
                    var modulePropertyName = moduleProperties[i];
                    var moduleProperty = scope[modulePropertyName];
                    if (Module._isModule(moduleProperty, modulePropertyName)) {
                        var obj = moduleProperty;
                        if (Object.isFrozen(obj))
                            continue;
                        var newModule = modules.getValue(obj);
                        if (newModule === undefined) {
                            newModule = new Module(constructorPassword, modulePropertyName, moduleProperty, this);
                            modules.add(obj, newModule);
                        }
                        initializedModules.add(newModule);
                    }
                }
                return initializedModules;
            };
            Module.prototype._initializeTypes = function () {
                var initializedTypes = [];
                var scopeProperties = Object.getOwnPropertyNames(this._scope);
                for (var i = 0; i < scopeProperties.length; i++) {
                    var propertyName = scopeProperties[i];
                    if (propertyName == 'constructor' || propertyName.indexOf('_') === 0)
                        continue;
                    var property = this._scope[propertyName];
                    if (property === Null || property === Undefined)
                        continue;
                    if (Module._isType(property)) {
                        var ctor = property;
                        var type = types.getValue(ctor);
                        if (type === undefined) {
                            type = new Type(constructorPassword, ctor, this);
                            types.add(ctor, type);
                        }
                        else if (!type._module) {
                            type._module = this;
                        }
                        initializedTypes.add(type);
                    }
                }
                return initializedTypes;
            };
            Module.prototype._initializeFunctions = function () {
                var initializedFunctions = [];
                var scopeProperties = Object.getOwnPropertyNames(this._scope);
                for (var i = 0; i < scopeProperties.length; i++) {
                    var propertyName = scopeProperties[i];
                    var property = this._scope[propertyName];
                    if (!Module._isType(property) && u.isFunction(property)) {
                        var func = new Function(constructorPassword, propertyName, true, this, property);
                        initializedFunctions.add(func);
                    }
                }
                return initializedFunctions;
            };
            Module.prototype._initializeVariables = function () {
                var initializedVariables = new Array();
                var scopeProperties = Object.getOwnPropertyNames(this._scope).query().where(function (p) { return p !== '_hashCode'; }).array();
                for (var i = 0; i < scopeProperties.length; i++) {
                    var propertyName = scopeProperties[i];
                    var property = this._scope[propertyName];
                    if (!u.isFunction(property) && !Module._isModule(property)) {
                        var variable = new Variable(constructorPassword, propertyName, this, property);
                        initializedVariables.add(variable);
                    }
                }
                return initializedVariables;
            };
            Module.prototype._findModule = function (type) {
                var _this = this;
                var foundType = false;
                this.getTypes().forEach(function (t) {
                    if (t === type)
                        foundType = true;
                    else
                        t._module = _this;
                });
                if (foundType)
                    return this;
                var modules = this.getModules().array();
                for (var i = 0; i < modules.length; i++) {
                    var m = modules[i];
                    var foundModule = m._findModule(type);
                    if (foundModule !== null)
                        return foundModule;
                }
                return null;
            };
            Object.defineProperty(Module, "global", {
                get: function () {
                    if (!Module._global) {
                        Module._global = new Module(constructorPassword, 'Global', global);
                        modules.add(global, Module._global);
                    }
                    return Module._global;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module, "anonymous", {
                get: function () {
                    if (!Module._anonymous)
                        Module._anonymous = new Module(constructorPassword, 'Anonymous', Classical.Anonymous);
                    return Module._anonymous;
                },
                enumerable: true,
                configurable: true
            });
            Module.getModule = function (type) {
                Classical.Assert.isDefined(type);
                if (type._module)
                    return type._module;
                var foundModule = Module.global._findModule(type);
                if (foundModule) {
                    type._module = foundModule;
                    return foundModule;
                }
                type._module = Module.anonymous;
                return Module._anonymous;
            };
            Module._isModule = function (moduleCandidate, moduleName) {
                if (isEnum(moduleCandidate) || !u.isObject(moduleCandidate) || !u.isEmptyObject(Object.getPrototypeOf(moduleCandidate)))
                    return false;
                var ownProperties = Object.getOwnPropertyNames(moduleCandidate);
                for (var i = 0; i < ownProperties.length; i++) {
                    var ownProperty = ownProperties[i];
                    try {
                        var moduleProperty = moduleCandidate[ownProperty];
                    }
                    catch (e) {
                        continue;
                    }
                    if (this._isType(moduleProperty))
                        return true;
                }
                if (!moduleName)
                    return false;
                return moduleName[0] === moduleName[0].toUpperCase();
            };
            Module._isType = function (typeCandidate) {
                return typeCandidate === Object || (u.isFunction(typeCandidate) && u.isDefined(typeCandidate.prototype) && !u.isEmptyObject(typeCandidate.prototype));
            };
            return Module;
        })(LanguageConstruct);
        Reflection.Module = Module;
        var Type = (function (_super) {
            __extends(Type, _super);
            function Type(password, ctor, mod, singleton) {
                if (singleton === void 0) { singleton = false; }
                _super.call(this, password);
                this._base = null;
                this._name = null;
                this._ctor = ctor;
                this._isSingleton = singleton;
                this._typeConstructor = new Constructor(password, this, undefined, ctor);
                if (mod)
                    this._module = mod;
            }
            Object.defineProperty(Type.prototype, "base", {
                get: function () {
                    if (this._base === null) {
                        var prototype = Object.getPrototypeOf(this.constructorFunction.prototype);
                        if (prototype == null || Classical.Utilities.isFunction(!prototype.getType))
                            return null;
                        this._base = prototype.getType();
                    }
                    return this._base;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "constructorFunction", {
                get: function () {
                    return this.constructorValue.functionValue;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "constructorValue", {
                get: function () {
                    return this._typeConstructor;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "fullName", {
                get: function () {
                    if (this.declaringModule && this.declaringModule !== Module.global)
                        return u.format("{0}.{1}", this.declaringModule.fullName, this.name);
                    else
                        return this.name;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isNull", {
                get: function () {
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isUndefined", {
                get: function () {
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isPublic", {
                get: function () {
                    return !this.isPrivate && !this.isProtected;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isProtected", {
                get: function () {
                    return this.name.indexOf('$') === 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isPrivate", {
                get: function () {
                    return this.name.indexOf('_') === 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isPrimitive", {
                get: function () {
                    return this === typeOf(Boolean) || this === typeOf(String) || this === typeOf(Number);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isSingleton", {
                get: function () {
                    return this._isSingleton;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isStatic", {
                get: function () {
                    throw 'isStatic is not valid for a Type.';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "isInstance", {
                get: function () {
                    throw 'isInstance is not valid for a Type.';
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "name", {
                get: function () {
                    if (this._name === null) {
                        if (this._ctor === undefined) {
                            this._name = 'Undefined';
                        }
                        else if (this._ctor === null) {
                            this._name = 'Null';
                        }
                        else {
                            var name = this._ctor.name;
                            if (u.isNullOrUndefined(name)) {
                                var match = this._ctor.toString().match(/\s([\w\d]+)\(/);
                                if (match && match.length > 1)
                                    name = match[1];
                            }
                            if (u.isNullOrUndefined(name))
                                name = "`Anonymous";
                            this._name = name;
                        }
                    }
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "declaringModule", {
                get: function () {
                    if (!this._module)
                        this._module = Module.getModule(this);
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type.prototype, "prototype", {
                get: function () {
                    return this._ctor.prototype;
                },
                enumerable: true,
                configurable: true
            });
            Type.prototype.equals = function (other) {
                if (u.isNullOrUndefined(other) || !other.is(Type))
                    return false;
                var otherType = other;
                return this.constructorFunction === otherType.constructorFunction;
            };
            Type.prototype.toString = function () {
                return this.name;
            };
            Type.prototype.create = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                return this.constructorFunction(args);
            };
            Type.prototype.getHashCode = function () {
                return this._ctor.getHashCode();
            };
            Type.prototype.getFieldsOf = function (instance) {
                var _this = this;
                var options = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    options[_i - 1] = arguments[_i];
                }
                if (!u.isDefined(instance))
                    return [].query();
                Classical.Assert.isDefined(instance);
                if (instance.getType && Classical.Utilities.isFunction(instance.getType)) {
                    var instanceType = instance.getType();
                    if (instanceType !== this)
                        throw 'The instance passed in is not of type ' + this.name;
                }
                var fields = this._initializeFields(instance);
                options = this._getProperOptions(options);
                return fields.array().query().where(function (f) { return _this._isValidProperty(f, options); }).distinct();
            };
            Type.prototype.getFieldOf = function (instance, name) {
                var options = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    options[_i - 2] = arguments[_i];
                }
                Classical.Assert.isDefined(name);
                var args = [instance, options];
                return this.getFieldsOf.apply(this, args).query().singleOrDefault(function (f) { return f.name === name; });
            };
            Type.prototype.getProperties = function () {
                var _this = this;
                var options = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    options[_i - 0] = arguments[_i];
                }
                if (this.isNull || this.isUndefined)
                    return [].query();
                if (!this._properties)
                    this._initializeProperties();
                options = this._getProperOptions(options);
                return this._properties.array().query().where(function (p) { return _this._isValidProperty(p, options); }).distinct();
            };
            Type.prototype.getProperty = function (name) {
                var options = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    options[_i - 1] = arguments[_i];
                }
                Classical.Assert.isDefined(name);
                return this.getProperties.apply(this, options).query().singleOrDefault(function (p) { return p.name === name; });
            };
            Type.prototype.getMethods = function () {
                var options = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    options[_i - 0] = arguments[_i];
                }
                return this.getProperties.apply(this, options).where(function (p) { return p.isMethod; }).cast();
            };
            Type.prototype.getMethod = function (name) {
                var options = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    options[_i - 1] = arguments[_i];
                }
                Classical.Assert.isDefined(name);
                return this.getMethods.apply(this, options).query().singleOrDefault(function (m) { return m.name === name; });
            };
            Type.prototype.isAssignableTo = function (other) {
                var ctor = this.constructorFunction, otherCtor = other.constructorFunction, prototype = null;
                while (Classical.Utilities.isDefined(ctor)) {
                    if (ctor === otherCtor)
                        return true;
                    prototype = Object.getPrototypeOf(ctor.prototype);
                    if (Classical.Utilities.isDefined(prototype))
                        ctor = prototype['constructor'];
                    else
                        ctor = null;
                }
                return false;
            };
            Type.prototype.isAssignableFrom = function (other) {
                if (u.isNullOrUndefined(other))
                    return false;
                return other.isAssignableTo(this);
            };
            Type.prototype._initializeFields = function (instance) {
                var fields = new Array();
                Object.getOwnPropertyNames(instance).forEach(function (property) {
                    var propertyDescriptor = Object.getOwnPropertyDescriptor(instance, property);
                    var getter = propertyDescriptor.get;
                    var setter = propertyDescriptor.set;
                    if (!Classical.Utilities.isDefined(getter) && !Classical.Utilities.isDefined(setter) && !Classical.Utilities.isFunction(propertyDescriptor.value))
                        fields.add(new Field(constructorPassword, property, typeOf(instance.constructor), false));
                });
                return fields;
            };
            Type.prototype._initializeProperties = function () {
                var properties = new Array();
                var instance = this._ctor.prototype;
                properties.addRange(this._getStaticProperties());
                properties.addRange(this._getInstanceProperties());
                var baseType = this.base;
                if (Classical.Utilities.isDefined(baseType)) {
                    var baseTypeProperties = baseType.getProperties();
                    var propertiesToRemove = new Array();
                    properties.forEach(function (p) {
                        var baseTypeProperty = baseTypeProperties.singleOrDefault(function (prop) { return prop.name == p.name; });
                        if (baseTypeProperty) {
                            p._declaringType = baseTypeProperty.declaringType;
                            propertiesToRemove.add(p);
                        }
                    });
                    propertiesToRemove.forEach(function (p) {
                        properties.remove(p);
                    });
                    properties.addRange(baseTypeProperties);
                }
                this._properties = properties;
            };
            Type.prototype._getStaticProperties = function () {
                var _this = this;
                var properties = new Array();
                var instance = this._ctor.prototype;
                Object.getOwnPropertyNames(this._ctor).forEach(function (property) {
                    var propertyDescriptor = Object.getOwnPropertyDescriptor(_this._ctor, property);
                    var getter = propertyDescriptor.get;
                    var setter = propertyDescriptor.set;
                    if (Classical.Utilities.isDefined(getter) || Classical.Utilities.isDefined(setter))
                        properties.add(new Property(constructorPassword, property, typeOf(instance.constructor), propertyDescriptor, Classical.Utilities.isDefined(getter), Classical.Utilities.isDefined(setter), false, false, true));
                    else if (Classical.Utilities.isFunction(propertyDescriptor.value))
                        properties.add(new Method(constructorPassword, property, typeOf(instance.constructor), propertyDescriptor, propertyDescriptor.writable, propertyDescriptor.value, true));
                    else if (!Classical.Utilities.isDefined(getter) && !Classical.Utilities.isDefined(setter))
                        properties.add(new Field(constructorPassword, property, typeOf(instance.constructor), true));
                });
                return properties;
            };
            Type.prototype._getInstanceProperties = function () {
                var properties = new Array();
                var instance = this._ctor.prototype;
                Object.getOwnPropertyNames(instance).forEach(function (property) {
                    var propertyDescriptor = Object.getOwnPropertyDescriptor(instance, property);
                    var getter = propertyDescriptor.get;
                    var setter = propertyDescriptor.set;
                    if (Classical.Utilities.isDefined(getter) || Classical.Utilities.isDefined(setter))
                        properties.add(new Property(constructorPassword, property, typeOf(instance.constructor), propertyDescriptor, Classical.Utilities.isDefined(getter), Classical.Utilities.isDefined(setter), false, false, false));
                    else if (Classical.Utilities.isFunction(propertyDescriptor.value))
                        properties.add(new Method(constructorPassword, property, typeOf(instance.constructor), propertyDescriptor, propertyDescriptor.writable, propertyDescriptor.value, false));
                    else if (!Classical.Utilities.isDefined(getter) && !Classical.Utilities.isDefined(setter))
                        properties.add(new Field(constructorPassword, property, typeOf(instance.constructor), true));
                });
                return properties.query();
            };
            Type.prototype._getProperOptions = function (optionsList) {
                if (!optionsList || optionsList.length === 0)
                    return defaultModifier;
                var options = optionsList.query().distinct().array().query();
                var result = options.array();
                if (options.hasNone(function (o) { return o === 0 /* Public */; }) && options.hasNone(function (o) { return o === 1 /* Protected */; }) && options.hasNone(function (o) { return o === 2 /* Private */; }))
                    result.add(0 /* Public */);
                if (options.hasNone(function (o) { return o === 4 /* Static */; }) && options.hasNone(function (o) { return o === 3 /* Instance */; }))
                    result.add(3 /* Instance */);
                return result;
            };
            Type.prototype._isValidProperty = function (property, modifiers) {
                var modifierQuery = modifiers.query();
                var accessModifiers = modifierQuery.where(function (m) { return m !== 3 /* Instance */ && m !== 4 /* Static */; });
                var isValidAccessor = false;
                accessModifiers.forEach(function (m) {
                    switch (m) {
                        case 0 /* Public */: {
                            if (property.isPublic)
                                isValidAccessor = true;
                            break;
                        }
                        case 1 /* Protected */: {
                            if (property.isProtected)
                                isValidAccessor = true;
                            break;
                        }
                        case 2 /* Private */: {
                            if (property.isPrivate)
                                isValidAccessor = true;
                            break;
                        }
                    }
                });
                if (modifierQuery.hasAny(function (m) { return m === 3 /* Instance */; }))
                    return isValidAccessor && !property.isStatic;
                else if (modifierQuery.hasAny(function (m) { return m === 4 /* Static */; }))
                    return isValidAccessor && property.isStatic;
                return false;
            };
            Object.defineProperty(Type, "null", {
                get: function () {
                    return nullType;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Type, "undefined", {
                get: function () {
                    return undefinedType;
                },
                enumerable: true,
                configurable: true
            });
            Type.getType = function (ctor) {
                Classical.Assert.isDefined(ctor, 'The Type constructor was not specified.');
                Classical.Assert.isTrue(u.isFunction(ctor), 'The constructor must be a function.');
                if (ctor != global.Null && ctor != global.Undefined) {
                    var type = types.getValue(ctor);
                    if (!type) {
                        type = new Type(constructorPassword, ctor);
                        types.add(ctor, type);
                    }
                    return type;
                }
                else if (ctor === global.Null) {
                    return Type.null;
                }
                else if (ctor === global.Undefined) {
                    return Type.undefined;
                }
            };
            return Type;
        })(LanguageConstruct);
        Reflection.Type = Type;
        var Null = (function (_super) {
            __extends(Null, _super);
            function Null(password, ctor) {
                _super.call(this, password, ctor, null, true);
            }
            Object.defineProperty(Null.prototype, "isNull", {
                get: function () {
                    return true;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Null.prototype, "declaringModule", {
                get: function () {
                    return Module.global;
                },
                enumerable: true,
                configurable: true
            });
            return Null;
        })(Type);
        var Undefined = (function (_super) {
            __extends(Undefined, _super);
            function Undefined(password, ctor) {
                _super.call(this, password, ctor, null, true);
            }
            Object.defineProperty(Undefined.prototype, "isUndefined", {
                get: function () {
                    return true;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Undefined.prototype, "declaringModule", {
                get: function () {
                    return Module.global;
                },
                enumerable: true,
                configurable: true
            });
            return Undefined;
        })(Type);
        var Property = (function (_super) {
            __extends(Property, _super);
            function Property(password, name, declaringType, propertyDescriptor, canRead, canWrite, isMethod, isField, isStatic) {
                _super.call(this, password);
                this._name = name;
                this._declaringType = declaringType;
                this._isStatic = isStatic;
                this._canWrite = canWrite;
                this._canRead = canRead;
                this._isMethod = isMethod;
                this._isField = isField;
                this._propertyDescriptor = propertyDescriptor;
                this._initialPropertyDescriptor = this.getNewDescriptor(propertyDescriptor);
                this._propertyAspects = new Array();
            }
            Object.defineProperty(Property.prototype, "name", {
                get: function () {
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "fullName", {
                get: function () {
                    return Classical.Utilities.format('{0}.{1}', this.declaringType.fullName, this.name);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "declaringType", {
                get: function () {
                    return this._declaringType;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "isStatic", {
                get: function () {
                    return this._isStatic;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "isPublic", {
                get: function () {
                    return !this.isPrivate && !this.isProtected;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "isProtected", {
                get: function () {
                    return this.name.indexOf('$') === 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "isPrivate", {
                get: function () {
                    return this.name.indexOf('_') === 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "canWrite", {
                get: function () {
                    return this._canWrite;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "canRead", {
                get: function () {
                    return this._canRead;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "enumerable", {
                get: function () {
                    return !!(this._propertyDescriptor && this._propertyDescriptor.enumerable);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "configurable", {
                get: function () {
                    return !!(this._propertyDescriptor && this._propertyDescriptor.configurable);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "isMethod", {
                get: function () {
                    return this._isMethod;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Property.prototype, "isField", {
                get: function () {
                    return this._isField;
                },
                enumerable: true,
                configurable: true
            });
            Property.prototype.getValue = function (instance) {
                Classical.Assert.isDefined(instance);
                if (!this.canRead)
                    throw new Error('The property cannot be read.');
                if (this.isStatic)
                    return this.declaringType.constructorFunction[this.name];
                var type = typeOf(instance.constructor);
                var property = type.getProperty(this.name);
                if (Classical.Utilities.isNullOrUndefined(property))
                    throw Classical.Utilities.format('The property does not exist on type {0}.', type.name);
                var instanceType = instance.getType();
                if (instanceType && instanceType.constructorFunction !== instance.constructor) {
                    var prototype = instanceType.prototype;
                    while (prototype) {
                        if (instanceType.constructorFunction === prototype.constructor) {
                            return prototype[this.name];
                        }
                        var prototypeType = prototype.getType();
                        if (prototypeType)
                            prototype = prototypeType.prototype;
                        else
                            prototype = undefined;
                    }
                }
                return instance[this.name];
            };
            Property.prototype.setValue = function (instance, value) {
                Classical.Assert.isDefined(instance);
                if (this.isStatic) {
                    this.declaringType.constructorFunction[this.name] = value;
                    return;
                }
                var type = typeOf(instance.constructor);
                var property = type.getProperty(this.name);
                if (Classical.Utilities.isNullOrUndefined(property))
                    throw Classical.Utilities.format('The property does not exist on type {0}.', type.name);
                else if (!this.canWrite)
                    throw 'The property cannot be written to.';
                instance[this.name] = value;
            };
            Property.prototype.getNewDescriptor = function (descriptor) {
                if (!descriptor)
                    return descriptor;
                if (descriptor.get || descriptor.set)
                    return { configurable: descriptor.configurable, enumerable: descriptor.enumerable, get: descriptor.get, set: descriptor.set };
                else
                    return { configurable: descriptor.configurable, enumerable: descriptor.enumerable, writable: descriptor.writable, value: descriptor.value };
            };
            Property.prototype.toString = function () {
                return this.name;
            };
            Property.exists = function (instance, selector) {
                Classical.Assert.isDefined(instance);
                Classical.Assert.isDefined(selector);
                var propertyName = Classical.Expression.getProperty(selector);
                if (instance.getType) {
                    var instanceType = instance.getType();
                    var property = instanceType.getProperty(propertyName);
                    if (property)
                        return true;
                }
                return false;
            };
            return Property;
        })(LanguageConstruct);
        Reflection.Property = Property;
        var Field = (function (_super) {
            __extends(Field, _super);
            function Field(password, name, declaringType, isStatic) {
                _super.call(this, password, name, declaringType, null, true, true, false, true, isStatic);
            }
            Object.defineProperty(Field.prototype, "isPublic", {
                get: function () {
                    return !this.isPrivate && !this.isProtected;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Field.prototype, "isProtected", {
                get: function () {
                    return this.name.indexOf('$') === 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Field.prototype, "isPrivate", {
                get: function () {
                    return this.name.indexOf('_') === 0;
                },
                enumerable: true,
                configurable: true
            });
            Field.prototype.getValue = function (instance) {
                Classical.Assert.isDefined(instance);
                if (this.isStatic)
                    return this.declaringType.constructorFunction[this.name];
                var type = typeOf(instance.constructor);
                var property = type.getProperty(this.name);
                if (Classical.Utilities.isNullOrUndefined(property))
                    throw Classical.Utilities.format('The property does not exist on type {0}.', type.name);
                else if (!property.canRead)
                    throw 'The property cannot be read.';
                var instanceType = instance.getType();
                if (instanceType && instanceType.constructorFunction !== instance.constructor) {
                    var prototype = instanceType.prototype;
                    while (prototype) {
                        if (instanceType.constructorFunction === prototype.constructor) {
                            return prototype[this.name];
                        }
                        var prototypeType = prototype.getType();
                        if (prototypeType)
                            prototype = prototypeType.prototype;
                        else
                            prototype = undefined;
                    }
                }
                return instance[this.name];
            };
            Field.prototype.setValue = function (instance, value) {
                Classical.Assert.isDefined(instance);
                if (this.isStatic) {
                    this.declaringType.constructorFunction[this.name] = value;
                    return;
                }
                var type = typeOf(instance.constructor);
                var property = type.getProperty(this.name);
                if (Classical.Utilities.isNullOrUndefined(property))
                    throw Classical.Utilities.format('The property does not exist on type {0}.', type.name);
                else if (!property.canWrite)
                    throw 'The property cannot be written to.';
                instance[this.name] = value;
            };
            return Field;
        })(Property);
        Reflection.Field = Field;
        var Variable = (function (_super) {
            __extends(Variable, _super);
            function Variable(password, name, mod, value) {
                Classical.Assert.isDefined(mod);
                _super.call(this, password, name, null, null, true, true, false, false, true);
                this._module = mod;
                this._value = value;
            }
            Object.defineProperty(Variable.prototype, "declaringModule", {
                get: function () {
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Variable.prototype, "variableValue", {
                get: function () {
                    return this._value;
                },
                enumerable: true,
                configurable: true
            });
            return Variable;
        })(Property);
        Reflection.Variable = Variable;
        var Method = (function (_super) {
            __extends(Method, _super);
            function Method(password, name, declaringType, propertyDescriptor, canWrite, underlyingFunction, isStatic) {
                _super.call(this, password, name, declaringType, propertyDescriptor, true, canWrite, true, false, isStatic);
                this._underlyingFunction = underlyingFunction;
                this._initialFunction = underlyingFunction;
                this._methodAspects = new Array();
            }
            Object.defineProperty(Method.prototype, "functionValue", {
                get: function () {
                    return this._underlyingFunction;
                },
                enumerable: true,
                configurable: true
            });
            Method.prototype.invoke = function (instance) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (this.isStatic)
                    return this.declaringType.constructorFunction[this.name].apply(null, args);
                Classical.Assert.isDefined(instance);
                var type = typeOf(instance.constructor);
                var method = type.getMethod(this.name);
                if (Classical.Utilities.isNullOrUndefined(method))
                    throw Classical.Utilities.format('The method does not exist on type {0}.', type.name);
                return instance[this.name].apply(instance, args);
            };
            Method.prototype.getParameters = function () {
                if (!this._parameters)
                    this._parameters = this._initializeParameters();
                return this._parameters.array().query();
            };
            Method.prototype._initializeParameters = function () {
                var initializedParameters = new Array();
                var parameterNames = Classical.Expression.getArguments(this._underlyingFunction);
                for (var i = 0; i < parameterNames.length; i++) {
                    var parameterName = parameterNames[i];
                    var parameter = new Parameter(constructorPassword, parameterName, i, this);
                    initializedParameters.add(parameter);
                }
                return initializedParameters;
            };
            return Method;
        })(Property);
        Reflection.Method = Method;
        var Constructor = (function (_super) {
            __extends(Constructor, _super);
            function Constructor(password, declaringType, propertyDescriptor, underlyingFunction) {
                _super.call(this, constructorPassword, 'constructor', declaringType, propertyDescriptor, false, underlyingFunction, false);
            }
            Object.defineProperty(Constructor.prototype, "declaringModule", {
                get: function () {
                    return this.declaringType.declaringModule;
                },
                enumerable: true,
                configurable: true
            });
            return Constructor;
        })(Method);
        Reflection.Constructor = Constructor;
        var Function = (function (_super) {
            __extends(Function, _super);
            function Function(password, name, canWrite, mod, underlyingFunction) {
                _super.call(this, password, name, null, null, canWrite, underlyingFunction, true);
                Classical.Assert.isDefined(mod);
                this._module = mod;
            }
            Object.defineProperty(Function.prototype, "declaringModule", {
                get: function () {
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            return Function;
        })(Method);
        Reflection.Function = Function;
        var Parameter = (function () {
            function Parameter(password, name, position, declaringMethod) {
                Classical.Assert.isTrue(password === constructorPassword, 'You do not have permission to create instances of this type.');
                Classical.Assert.isDefined(declaringMethod);
                this._name = name;
                this._position = position;
                this._declaringMethod = declaringMethod;
            }
            Object.defineProperty(Parameter.prototype, "name", {
                get: function () {
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Parameter.prototype, "position", {
                get: function () {
                    return this._position;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Parameter.prototype, "declaringMethod", {
                get: function () {
                    return this._declaringMethod;
                },
                enumerable: true,
                configurable: true
            });
            Parameter.prototype.toString = function () {
                return this.name;
            };
            return Parameter;
        })();
        Reflection.Parameter = Parameter;
        var modules = new c.Dictionary(5000);
        var types = new c.Dictionary(5000);
        var constructorPassword = Math.random();
        var nullType = new Null(constructorPassword, global.Null);
        var undefinedType = new Undefined(constructorPassword, global.Undefined);
        var allModules;
        var allTypes;
        function getModules() {
            if (allModules)
                return allModules;
            var globalModule = Module.global;
            var loadedModules = getModulesFromModule(globalModule);
            allModules = loadedModules.query();
            return allModules;
        }
        Reflection.getModules = getModules;
        function getModulesFromModule(mod) {
            var modules = new Array();
            modules.add(mod);
            mod.getModules().forEach(function (m) {
                modules.addRange(getModulesFromModule(m));
            });
            return modules;
        }
        function getTypes() {
            if (allTypes)
                return allTypes;
            var globalModule = Module.global;
            var loadedTypes = getTypesFromModule(globalModule);
            allTypes = loadedTypes.query();
            return allTypes;
        }
        Reflection.getTypes = getTypes;
        function getTypesFromModule(mod) {
            var types = new Array();
            types.addRange(mod.getTypes());
            mod.getModules().forEach(function (m) {
                types.addRange(getTypesFromModule(m));
            });
            return types;
        }
        function findField(instance, selector) {
            Classical.Assert.isDefined(instance);
            Classical.Assert.isDefined(selector);
            var fieldName = Classical.Expression.getProperty(selector);
            if (instance.getType) {
                var instanceType = instance.getType();
                var field = instanceType.getFieldOf(instance, fieldName, 3 /* Instance */, 0 /* Public */, 2 /* Private */, 1 /* Protected */);
                if (field)
                    return field;
            }
            var t = typeOf(instance.constructor);
            var field = t.getFieldOf(instance, fieldName, 3 /* Instance */, 0 /* Public */, 2 /* Private */, 1 /* Protected */);
            return field;
        }
        Reflection.findField = findField;
        function findProperty(instance, selector) {
            Classical.Assert.isDefined(instance);
            Classical.Assert.isDefined(selector);
            var propertyName = Classical.Expression.getProperty(selector);
            if (instance.getType) {
                var instanceType = instance.getType();
                var property = instanceType.getProperty(propertyName, 3 /* Instance */, 0 /* Public */, 2 /* Private */, 1 /* Protected */);
                if (property)
                    return property;
            }
            var t = typeOf(instance.constructor);
            var properties = t._getInstanceProperties();
            var property = properties.singleOrDefault(function (p) { return p.name === propertyName; });
            if (property)
                return property;
            var baseType = t.base;
            while (baseType) {
                properties = baseType._getInstanceProperties();
                property = properties.singleOrDefault(function (p) { return p.name === propertyName; });
                if (property)
                    return property;
                baseType = baseType.base;
            }
            if (!property) {
                var objectInstance = instance;
                while (objectInstance) {
                    var propertyDescriptor = Object.getOwnPropertyDescriptor(instance, propertyName);
                    var foundProperty;
                    if (propertyDescriptor) {
                        var getter = propertyDescriptor.get;
                        var setter = propertyDescriptor.set;
                        if (Classical.Utilities.isDefined(getter) || Classical.Utilities.isDefined(setter))
                            foundProperty = new Property(constructorPassword, propertyName, typeOf(instance.constructor), propertyDescriptor, Classical.Utilities.isDefined(getter), Classical.Utilities.isDefined(setter), false, false, false);
                        else if (Classical.Utilities.isFunction(propertyDescriptor.value))
                            foundProperty = new Method(constructorPassword, propertyName, typeOf(instance.constructor), propertyDescriptor, propertyDescriptor.writable, propertyDescriptor.value, false);
                        else if (!Classical.Utilities.isDefined(getter) && !Classical.Utilities.isDefined(setter))
                            foundProperty = new Field(constructorPassword, propertyName, typeOf(instance.constructor), true);
                    }
                    if (foundProperty)
                        return foundProperty;
                    objectInstance = Object.getPrototypeOf(objectInstance);
                }
            }
            return null;
        }
        Reflection.findProperty = findProperty;
        function findMethod(instance, selector) {
            var property = findProperty(instance, selector);
            if (property && property.isMethod)
                return property;
            return null;
        }
        Reflection.findMethod = findMethod;
        function findVariable(instance, selector) {
            Classical.Assert.isDefined(instance);
            Classical.Assert.isDefined(selector);
            var variableName = Classical.Expression.getProperty(selector);
            var foundModule = getModules().firstOrDefault(function (m) { return m.scope === instance; });
            if (foundModule) {
                var foundVariable = foundModule.getVariable(variableName);
                if (foundVariable)
                    return foundVariable;
                var moduleScope = foundModule.scope;
                var initializedVariables = new Array();
                var scopeProperties = Object.getOwnPropertyNames(moduleScope).query().where(function (p) { return p !== '_hashCode'; }).array();
                for (var i = 0; i < scopeProperties.length; i++) {
                    var propertyName = scopeProperties[i];
                    if (propertyName !== variableName)
                        continue;
                    var property = moduleScope[propertyName];
                    if (!u.isFunction(property) && !Classical.Reflection.Module._isModule(property)) {
                        var variable = new Variable(constructorPassword, propertyName, this, property);
                        initializedVariables.add(variable);
                    }
                }
                return initializedVariables.query().singleOrDefault(function (v) { return v.name === variableName; });
            }
            return null;
        }
        Reflection.findVariable = findVariable;
        function findFunction(instance, selector) {
            Classical.Assert.isDefined(instance);
            Classical.Assert.isDefined(selector);
            var functionName = Classical.Expression.getProperty(selector);
            var foundModule = getModules().firstOrDefault(function (m) { return m.scope === instance; });
            if (foundModule) {
                var foundFunction = foundModule.getFunction(functionName);
                if (foundFunction)
                    return foundFunction;
                var moduleScope = foundModule.scope;
                var initializedFunctions = new Array();
                var scopeProperties = Object.getOwnPropertyNames(moduleScope).query().where(function (p) { return p !== '_hashCode'; }).array();
                for (var i = 0; i < scopeProperties.length; i++) {
                    var propertyName = scopeProperties[i];
                    if (propertyName !== functionName)
                        continue;
                    var property = moduleScope[propertyName];
                    if (!Classical.Reflection.Module._isType(property) && u.isFunction(property)) {
                        var func = new Function(constructorPassword, propertyName, true, this, property);
                        initializedFunctions.add(func);
                    }
                }
                return initializedFunctions.query().singleOrDefault(function (v) { return v.name === functionName; });
            }
            return null;
        }
        Reflection.findFunction = findFunction;
        function findStaticField(t, selector) {
            Classical.Assert.isDefined(t);
            Classical.Assert.isDefined(selector);
            var fieldName = Classical.Expression.getProperty(selector);
            var field = null;
            Object.getOwnPropertyNames(t).forEach(function (property) {
                if (property === fieldName) {
                    var propertyDescriptor = Object.getOwnPropertyDescriptor(t, property);
                    var getter = propertyDescriptor.get;
                    var setter = propertyDescriptor.set;
                    if (!Classical.Utilities.isDefined(getter) && !Classical.Utilities.isDefined(setter) && !Classical.Utilities.isFunction(propertyDescriptor.value))
                        field = new Field(constructorPassword, property, typeOf(t), true);
                }
            });
            return field;
        }
        Reflection.findStaticField = findStaticField;
        function findStaticProperty(t, selector) {
            Classical.Assert.isDefined(t);
            Classical.Assert.isDefined(selector);
            var propertyName = Classical.Expression.getProperty(selector);
            var functionType = typeOf(t);
            var property = functionType.getProperty(propertyName, 4 /* Static */, 0 /* Public */, 2 /* Private */, 1 /* Protected */);
            if (property)
                return property;
            var staticProperties = functionType._getStaticProperties().query();
            property = staticProperties.where(function (p) { return p.name === propertyName; }).singleOrDefault();
            return property;
        }
        Reflection.findStaticProperty = findStaticProperty;
        function findStaticMethod(t, selector) {
            var property = findStaticProperty(t, selector);
            if (property && property.isMethod)
                return property;
            return null;
        }
        Reflection.findStaticMethod = findStaticMethod;
    })(Reflection = Classical.Reflection || (Classical.Reflection = {}));
})(Classical || (Classical = {}));
var Classical;
(function (Classical) {
    var Collections;
    (function (Collections) {
        var u = Classical.Utilities;
        var r = Classical.Reflection;
        var ce = Classical.Collections.Enumerable;
        var ArrayPrototype = Array.prototype;
        ArrayPrototype.getEnumerator = function () {
            return new _ArrayEnumerator(this);
        };
        ArrayPrototype.array = function () {
            return this;
        };
        ArrayPrototype.query = function () {
            return new Queryable(this);
        };
        ArrayPrototype.count = function () {
            return this.length;
        };
        ArrayPrototype.equals = function (other) {
            return this === other;
        };
        ArrayPrototype.is = function (type) {
            if (Classical.Utilities.isNullOrUndefined(type))
                return true;
            return this.getType().isAssignableTo(typeOf(type));
        };
        ArrayPrototype.getType = function () {
            if (this._type == null) {
                this._type = r.Type.getType(this.constructor);
            }
            return this._type;
        };
        ArrayPrototype.getHashCode = function () {
            if (this._hashCode == undefined)
                this._hashCode = Classical.Hash.forNumber(Math.random());
            return this._hashCode;
        };
        var _ArrayEnumerator = (function () {
            function _ArrayEnumerator(array) {
                this._index = -1;
                Classical.Assert.isDefined(array);
                this._array = array;
            }
            Object.defineProperty(_ArrayEnumerator.prototype, "current", {
                get: function () {
                    return this._array[this._index];
                },
                enumerable: true,
                configurable: true
            });
            _ArrayEnumerator.prototype.moveNext = function () {
                this._index++;
                return this._index < this._array.length;
            };
            return _ArrayEnumerator;
        })();
        var ImmutableCollection = (function () {
            function ImmutableCollection(elements) {
                Classical.Assert.isDefined(elements, 'The elements of the ImmutableCollection are not defined.');
                var elementsCopy = copy(elements);
                this._get = function (element, index) {
                    switch (element) {
                        case 0 /* Copy */: return copy(elementsCopy);
                        case 1 /* Count */: return elementsCopy.length;
                        case 2 /* Item */: return elementsCopy[index];
                        default: return null;
                    }
                };
            }
            ImmutableCollection.prototype.get = function (index) {
                return this._get(2 /* Item */, index);
            };
            ImmutableCollection.prototype.getEnumerator = function () {
                return this._get(0 /* Copy */).getEnumerator();
            };
            ImmutableCollection.prototype.query = function () {
                return this._get(0 /* Copy */).query();
            };
            ImmutableCollection.prototype.forEach = function (operation) {
                ce.forEach(this, operation);
            };
            ImmutableCollection.prototype.array = function () {
                return this._get(0 /* Copy */).array();
            };
            ImmutableCollection.prototype.count = function () {
                return this._get(1 /* Count */);
            };
            return ImmutableCollection;
        })();
        Collections.ImmutableCollection = ImmutableCollection;
        var Element;
        (function (Element) {
            Element[Element["Copy"] = 0] = "Copy";
            Element[Element["Count"] = 1] = "Count";
            Element[Element["Item"] = 2] = "Item";
        })(Element || (Element = {}));
        function copy(elements) {
            var result;
            if (u.isArray(elements))
                result = elements.slice(0);
            else
                result = elements.array().slice(0);
            return result;
        }
        var Queryable = (function () {
            function Queryable(enumerable) {
                Classical.Assert.isDefined(enumerable);
                this._enumerable = enumerable;
            }
            Queryable.prototype.toString = function () {
                return this.array().toString();
            };
            Queryable.prototype.getEnumerator = function () {
                return this._enumerable.getEnumerator();
            };
            Queryable.prototype.query = function () {
                return this;
            };
            Queryable.prototype.array = function () {
                var result = new Array(), enumerator = this.getEnumerator();
                while (enumerator.moveNext()) {
                    result.push(enumerator.current);
                }
                return result;
            };
            Queryable.prototype.count = function () {
                var result = 0, enumerator = this.getEnumerator();
                while (enumerator.moveNext()) {
                    result++;
                }
                return result;
            };
            Queryable.prototype.forEach = function (operation) {
                var enumerator = this.getEnumerator(), current;
                while (enumerator.moveNext()) {
                    var current = enumerator.current;
                    operation.bind(current)(current);
                }
                return this;
            };
            Queryable.prototype.cast = function () {
                return this;
            };
            Queryable.prototype.where = function (predicate) {
                return new _WhereQueryable(this, predicate);
            };
            Queryable.prototype.select = function (selector) {
                return new _SelectQueryable(this, selector);
            };
            Queryable.prototype.selectMany = function (selector) {
                return new _ConcatQueryable(this.select(selector));
            };
            Queryable.prototype.orderBy = function (selector, comparison) {
                Classical.Assert.isDefined(selector);
                var result = this.array();
                if (result.length == 0)
                    return result.query();
                var comparer = getComparer(result, selector, comparison, true);
                if (comparer)
                    return result.sort(comparer).query();
                else
                    return result.query();
            };
            Queryable.prototype.orderByDescending = function (selector, comparison) {
                var ordered = this.orderBy(selector, comparison);
                return ordered.where(function (i) { return u.isDefined(i); }).reverse().concat(ordered.where(function (i) { return !u.isDefined(i); }));
            };
            Queryable.prototype.aggregate = function (accumulator, seed) {
                Classical.Assert.isDefined(accumulator, 'No accumulator was specified.');
                var result = seed, skipFirst = false;
                if (arguments.length == 1) {
                    skipFirst = true;
                    result = this.firstOrDefault();
                    if (result === null && this.hasNone())
                        result = undefined;
                }
                var firstPass = true;
                this.forEach(function (item) {
                    if (skipFirst && firstPass) {
                        firstPass = false;
                        return;
                    }
                    result = accumulator(result, item);
                });
                return result;
            };
            Queryable.prototype.sum = function (selector) {
                if (this.hasNone())
                    return undefined;
                if (!selector)
                    selector = function (item) { return item; };
                return this.aggregate(function (first, second) { return first + selector(second); }, 0);
            };
            Queryable.prototype.max = function (selector) {
                if (this.hasNone())
                    return undefined;
                if (!selector)
                    selector = function (item) { return item; };
                var result = this.aggregate(function (first, second) {
                    var secondValue = selector(second);
                    if (first > secondValue)
                        return first;
                    return secondValue;
                }, -Infinity);
                if (u.isInfinity(result) && this.hasNone(function (i) { return selector(i) === result; })) {
                    return undefined;
                }
                return result;
            };
            Queryable.prototype.min = function (selector) {
                if (this.hasNone())
                    return undefined;
                if (!selector)
                    selector = function (item) { return item; };
                var result = this.aggregate(function (first, second) {
                    var secondValue = selector(second);
                    if (first < secondValue)
                        return first;
                    return secondValue;
                }, Infinity);
                if (u.isInfinity(result) && this.hasNone(function (i) { return selector(i) === result; })) {
                    return undefined;
                }
                return result;
            };
            Queryable.prototype.hasNone = function (predicate) {
                return !this.hasAny(predicate);
            };
            Queryable.prototype.hasAny = function (predicate) {
                predicate = this.coalescePredicate(predicate);
                return new _WhereQueryable(this._enumerable, predicate).getEnumerator().moveNext();
            };
            Queryable.prototype.first = function (predicate) {
                predicate = this.coalescePredicate(predicate);
                var result = this.where(predicate), enumerator = result.getEnumerator();
                Classical.Assert.isTrue(enumerator.moveNext(), 'The sequence does not have a first element.');
                return enumerator.current;
            };
            Queryable.prototype.firstOrDefault = function (predicate) {
                predicate = this.coalescePredicate(predicate);
                var result = this.where(predicate), enumerator = result.getEnumerator();
                if (!enumerator.moveNext())
                    return null;
                return enumerator.current;
            };
            Queryable.prototype.last = function (predicate) {
                return this.reverse().first(predicate);
            };
            Queryable.prototype.lastOrDefault = function (predicate) {
                return this.reverse().firstOrDefault(predicate);
            };
            Queryable.prototype.single = function (predicate) {
                predicate = this.coalescePredicate(predicate);
                var result = this.where(predicate), enumerator = result.getEnumerator();
                Classical.Assert.isTrue(enumerator.moveNext(), 'The sequence does not have any matching elements.');
                var current = enumerator.current;
                Classical.Assert.isFalse(enumerator.moveNext(), 'The sequence has more than one matching element.');
                return current;
            };
            Queryable.prototype.singleOrDefault = function (predicate) {
                predicate = this.coalescePredicate(predicate);
                var result = this.where(predicate), enumerator = result.getEnumerator();
                if (!enumerator.moveNext())
                    return null;
                var current = enumerator.current;
                Classical.Assert.isFalse(enumerator.moveNext(), 'The sequence has more than one matching element.');
                return current;
            };
            Queryable.prototype.skip = function (count) {
                return new _SkipQueryable(this, count);
            };
            Queryable.prototype.take = function (count) {
                return new _TakeQueryable(this, count);
            };
            Queryable.prototype.at = function (index) {
                Classical.Assert.isTrue(u.isDefined(index) && index >= 0, 'The index must be a positive integer.');
                var rest = this.skip(index);
                Classical.Assert.isTrue(rest.hasAny(), 'The index is out of range.');
                return rest.first();
            };
            Queryable.prototype.concat = function (other) {
                var enumerables = [this, other].query();
                return new _ConcatQueryable(enumerables);
            };
            Queryable.prototype.distinct = function () {
                var map = new Collections.Dictionary(), enumerator = this.getEnumerator();
                while (enumerator.moveNext()) {
                    map.add(enumerator.current, true);
                }
                return map.keys.query();
            };
            Queryable.prototype.reverse = function () {
                return this.array().reverse().query();
            };
            Queryable.prototype.dictionary = function (keySelector, valueSelector) {
                var array = this.array(), length = array.length, result = new Collections.Dictionary(length), current, key, value;
                for (var i = 0; i < length; i++) {
                    current = array[i];
                    key = keySelector(current);
                    value = valueSelector(current);
                    result.add(key, value);
                }
                return result;
            };
            Queryable.prototype.execute = function () {
                return this.result().query();
            };
            Queryable.prototype.result = function () {
                return this.array();
            };
            Queryable.prototype.coalescePredicate = function (predicate) {
                return u.coalesce(predicate, function (item) { return true; });
            };
            return Queryable;
        })();
        Collections.Queryable = Queryable;
        var _QueryableEnumerator = (function () {
            function _QueryableEnumerator(enumerator, iterator, selector) {
                this._enumerator = enumerator;
                this._iterator = iterator;
                this._selector = selector;
            }
            Object.defineProperty(_QueryableEnumerator.prototype, "current", {
                get: function () {
                    return this._selector(this._enumerator.current);
                },
                enumerable: true,
                configurable: true
            });
            _QueryableEnumerator.prototype.moveNext = function () {
                return this._iterator(this._enumerator);
            };
            return _QueryableEnumerator;
        })();
        var _WhereQueryable = (function (_super) {
            __extends(_WhereQueryable, _super);
            function _WhereQueryable(enumerable, predicate) {
                _super.call(this, enumerable);
                this._predicate = predicate;
            }
            _WhereQueryable.prototype.getEnumerator = function () {
                var predicate = this._predicate, enumerator = this._enumerable.getEnumerator();
                return new _QueryableEnumerator(enumerator, function (enumerator) {
                    do {
                        var hasNext = enumerator.moveNext();
                    } while (hasNext && !predicate(enumerator.current));
                    return hasNext;
                }, function (item) { return item; });
            };
            return _WhereQueryable;
        })(Queryable);
        var _SelectQueryable = (function (_super) {
            __extends(_SelectQueryable, _super);
            function _SelectQueryable(enumerable, selector) {
                _super.call(this, new Array());
                this._selector = selector;
                this._selectedEnumerable = enumerable;
            }
            _SelectQueryable.prototype.getEnumerator = function () {
                return new _QueryableEnumerator(this._selectedEnumerable.getEnumerator(), function (enumerator) { return enumerator.moveNext(); }, this._selector);
            };
            return _SelectQueryable;
        })(Queryable);
        var _SkipQueryable = (function (_super) {
            __extends(_SkipQueryable, _super);
            function _SkipQueryable(enumerable, count) {
                _super.call(this, enumerable);
                Classical.Assert.isFalse(count < 0, 'The number of elements to skip must be greater than zero.');
                this._count = count;
            }
            _SkipQueryable.prototype.getEnumerator = function () {
                var count = this._count, currentCount = 0;
                return new _QueryableEnumerator(this._enumerable.getEnumerator(), function (enumerator) {
                    do {
                        var hasNext = enumerator.moveNext();
                        currentCount++;
                    } while (hasNext && currentCount <= count);
                    return hasNext;
                }, function (item) { return item; });
            };
            return _SkipQueryable;
        })(Queryable);
        var _TakeQueryable = (function (_super) {
            __extends(_TakeQueryable, _super);
            function _TakeQueryable(enumerable, count) {
                _super.call(this, enumerable);
                Classical.Assert.isFalse(count < 0, 'The number of elements to take must be greater than zero.');
                this._count = count;
            }
            _TakeQueryable.prototype.getEnumerator = function () {
                var count = this._count, currentCount = 0;
                return new _QueryableEnumerator(this._enumerable.getEnumerator(), function (enumerator) {
                    do {
                        var hasNext = enumerator.moveNext();
                        currentCount++;
                    } while (hasNext && count < currentCount);
                    return hasNext;
                }, function (item) { return item; });
            };
            return _TakeQueryable;
        })(Queryable);
        var _ConcatQueryable = (function (_super) {
            __extends(_ConcatQueryable, _super);
            function _ConcatQueryable(enumerables) {
                _super.call(this, this);
                this._enumerables = enumerables;
            }
            _ConcatQueryable.prototype.getEnumerator = function () {
                var enumerators = this._enumerables.query().where(function (e) { return u.isDefined(e); }).select(function (e) { return e.getEnumerator(); });
                return new _ConcatQueryableEnumerator(enumerators);
            };
            return _ConcatQueryable;
        })(Queryable);
        var _ConcatQueryableEnumerator = (function () {
            function _ConcatQueryableEnumerator(enumerators) {
                this._outerEnumerator = enumerators.getEnumerator();
                if (this._outerEnumerator.moveNext())
                    this._enumerator = this._outerEnumerator.current;
            }
            Object.defineProperty(_ConcatQueryableEnumerator.prototype, "current", {
                get: function () {
                    return this._enumerator.current;
                },
                enumerable: true,
                configurable: true
            });
            _ConcatQueryableEnumerator.prototype.moveNext = function () {
                var outerEnumerator = this._outerEnumerator, enumerator = this._enumerator;
                if (u.isNullOrUndefined(enumerator))
                    return false;
                if (enumerator.moveNext())
                    return true;
                if (outerEnumerator.moveNext()) {
                    this._enumerator = outerEnumerator.current;
                    return this.moveNext();
                }
                this._enumerator = null;
                return false;
            };
            return _ConcatQueryableEnumerator;
        })();
        var Enumerable;
        (function (Enumerable) {
            function empty() {
                return [];
            }
            Enumerable.empty = empty;
            function range(start, increment, end) {
                if (arguments.length == 1) {
                    end = start;
                    start = 0;
                    increment = end < 0 ? -1 : 1;
                }
                else if (arguments.length == 2) {
                    end = increment;
                    increment = end < start ? -1 : 1;
                }
                if (start === end)
                    return [start];
                Classical.Assert.isFalse(increment == 0, 'The increment cannot be equal to zero.');
                Classical.Assert.isFalse(start < end && increment < 0, 'The increment must be positive for increasing ranges.');
                Classical.Assert.isFalse(end < start && increment > 0, 'The increment must be negative for decreasing ranges.');
                var result = [], current = start, adjustmentFactor = start < end ? 1 : -1, adjustedEnd = end * adjustmentFactor;
                while (current * adjustmentFactor <= adjustedEnd) {
                    result.push(current);
                    current += increment;
                }
                return result;
            }
            Enumerable.range = range;
            function forEach(items, operation) {
                var enumerator = items.getEnumerator(), current;
                while (enumerator.moveNext()) {
                    var current = enumerator.current;
                    operation.bind(current)(current);
                }
            }
            Enumerable.forEach = forEach;
        })(Enumerable = Collections.Enumerable || (Collections.Enumerable = {}));
        function getComparer(array, selector, comparison, ascending) {
            if (!selector)
                selector = function (item) { return item; };
            if (!u.isDefined(comparison)) {
                var firstElement;
                for (var i = 0; i < array.length; i++) {
                    var value = selector(array[i]);
                    if (u.isDefined(value)) {
                        firstElement = value;
                        break;
                    }
                }
                if (!u.isDefined(firstElement))
                    return null;
                else if (u.isNumber(firstElement))
                    comparison = compareNumbers;
                else if (u.isString(firstElement))
                    comparison = compareStrings;
                else if (firstElement instanceof Date)
                    comparison = compareDates;
                else if (u.isBoolean(firstElement))
                    comparison = compareBooleans;
                else
                    Classical.Assert.isInvalid('The sequence cannot be ordered without a comparison.');
            }
            if (ascending) {
                return function (first, second) {
                    return comparison(selector(first), selector(second));
                };
            }
            return function (first, second) {
                return -comparison(selector(first), selector(second));
            };
        }
        function compareNumbers(first, second) {
            var value = compareUndefined(first, second);
            if (u.isDefined(value))
                return value;
            return first - second;
        }
        function compareStrings(first, second) {
            var value = compareUndefined(first, second);
            if (u.isDefined(value))
                return value;
            if (first < second)
                return -1;
            if (first > second)
                return 1;
            return 0;
        }
        function compareBooleans(first, second) {
            var value = compareUndefined(first, second);
            if (u.isDefined(value))
                return value;
            if (first < second)
                return -1;
            if (first > second)
                return 1;
            return 0;
        }
        function compareDates(first, second) {
            var value = compareUndefined(first, second);
            if (u.isDefined(value))
                return value;
            return first - second;
        }
        function compareUndefined(first, second) {
            var firstIsDefined = u.isDefined(first);
            var secondIsDefined = u.isDefined(second);
            if (!firstIsDefined && !secondIsDefined)
                return 0;
            if (!secondIsDefined)
                return -Infinity;
            if (!firstIsDefined)
                return Infinity;
            return null;
        }
    })(Collections = Classical.Collections || (Classical.Collections = {}));
})(Classical || (Classical = {}));
var Classical;
(function (Classical) {
    var Expression;
    (function (Expression) {
        var u = Classical.Utilities;
        var Assert = Classical.Assert;
        var Ajax = (function () {
            function Ajax() {
            }
            Ajax.createXmlHttpRequest = function () {
                if (typeof XMLHttpRequest !== 'undefined') {
                    return new XMLHttpRequest();
                }
                var versions = [
                    "MSXML2.XmlHttp.5.0",
                    "MSXML2.XmlHttp.4.0",
                    "MSXML2.XmlHttp.3.0",
                    "MSXML2.XmlHttp.2.0",
                    "Microsoft.XmlHttp"
                ];
                var xhr;
                for (var i = 0; i < versions.length; i++) {
                    try {
                        xhr = new ActiveXObject(versions[i]);
                        break;
                    }
                    catch (e) {
                    }
                }
                return xhr;
            };
            Ajax.get = function (url, callback, data, async) {
                if (async === void 0) { async = false; }
                var query = new Array();
                for (var key in data) {
                    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
                }
                Ajax.send(url + '?' + query.join('&'), callback, 'GET', null, async);
            };
            Ajax.post = function (url, callback, data, async) {
                if (async === void 0) { async = false; }
                var query = [];
                for (var key in data) {
                    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
                }
                Ajax.send(url, callback, 'POST', query.join('&'), async);
            };
            Ajax.send = function (url, callback, method, data, async) {
                if (async === void 0) { async = false; }
                var x = Ajax.createXmlHttpRequest();
                x.open(method, url, async);
                x.onreadystatechange = function () {
                    if (x.readyState == 4) {
                        callback(x.responseText);
                    }
                };
                if (method == 'POST') {
                    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                }
                x.send(data);
            };
            return Ajax;
        })();
        function getProperty(arg1, arg2) {
            var selector = arg1;
            if (arguments.length > 1)
                selector = arg2;
            var matches = propertyPattern.exec(selector.toString());
            Assert.isDefined(matches, 'The property selector was not properly defined.');
            var property = matches.slice().query().skip(1).firstOrDefault(function (m) { return u.isDefined(m); });
            Assert.isDefined(property, 'The property selector was not properly defined.');
            return property;
        }
        Expression.getProperty = getProperty;
        var space = '\\s*';
        var identifierPattern = '[_$a-zA-Z][_$a-zA-Z0-9]*';
        var stringSingleQuotePattern = "'(([^'\\\\\]|\\\\[btnvfr'\\\\\])*)'";
        var stringDoubleQuotePattern = '"(([^"\\\\\]|\\\\[btnvfr"\\\\\])*)"';
        var stringPattern = '(?:' + stringSingleQuotePattern + '|' + stringDoubleQuotePattern + ')';
        var propertySelector = identifierPattern + space + '\\.' + space + '(' + identifierPattern + ')';
        var propertyAccessor = identifierPattern + space + '\\[' + space + stringPattern + space + '\\]';
        var functionStart = '^' + space + 'function' + space + '\\([^\\)]*\\)' + space + '{' + space + '(?:return)?' + space + '(?:';
        var functionEnd = ')' + space + ';?' + space + '}' + space + '$';
        var propertyPatternString = functionStart + propertySelector + '|' + propertyAccessor + '|' + stringPattern + functionEnd;
        var propertyPattern = new RegExp(propertyPatternString);
        function getArguments(func) {
            Assert.isDefined(func, 'The function was not specified.');
            var functionString = func.toString();
            var argumentString = functionPattern.exec(functionString).slice().query().skip(1).singleOrDefault();
            Assert.isDefined(argumentString, 'The arguments of the function cannot be parsed.');
            if (argumentString.length === 0)
                return [];
            return argumentString.split(argumentSpacePattern).query().select(function (a) { return a.trim(); }).array();
        }
        Expression.getArguments = getArguments;
        var functionPattern = /^[\s]*function[\s]*(?:[_$a-zA-Z][_$a-zA-Z0-9]*)*\(([^\)]*)\)/;
        var argumentSpacePattern = /\s*,\s*/;
        function getScripts() {
            return getScriptsByClass();
        }
        Expression.getScripts = getScripts;
        function getScriptsByClass() {
            var classes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                classes[_i - 0] = arguments[_i];
            }
            var args = ['script'];
            for (var i = 0; i < classes.length; i++)
                args[i + 1] = classes[i];
            var scriptElements = getElementByClass.apply(this, args);
            var scriptContents = new Array();
            for (var i = 0; i < scriptElements.length; i++) {
                var node = scriptElements[i];
                var source = node.src;
                if (source) {
                    var content = '';
                    Ajax.get(source, function (d) {
                        content += d;
                    }, {});
                    scriptContents.add(content);
                }
                else {
                    scriptContents.add(node.innerHTML);
                }
            }
            return scriptContents.query();
        }
        Expression.getScriptsByClass = getScriptsByClass;
        function getElementByClass(elementName) {
            var classes = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                classes[_i - 1] = arguments[_i];
            }
            Assert.isDefined(elementName);
            var selectorArray = classes.query().distinct().select(function (c) { return Classical.Utilities.format('{0}.{1}', elementName, c); }).array();
            var selectors = selectorArray.join(', ');
            var nodeList = document.querySelectorAll(selectors);
            return nodeList;
        }
        Expression.getElementByClass = getElementByClass;
    })(Expression = Classical.Expression || (Classical.Expression = {}));
})(Classical || (Classical = {}));
var Classical;
(function (Classical) {
    var Events;
    (function (Events) {
        var Event = (function () {
            function Event(host) {
                this._subscribers = [];
                Classical.Assert.isDefined(host, 'The host is null or undefined.');
                this._host = host;
            }
            Event.prototype.subscribe = function (registration) {
                Classical.Assert.isDefined(registration, 'The registration is null or undefined.');
                this._subscribers.add(registration);
            };
            Event.prototype.unsubscribe = function (registration) {
                this._subscribers.remove(registration);
            };
            Event.prototype.execute = function (info) {
                var host = this._host, subscribers = this._subscribers;
                if (subscribers.count() === 0)
                    return;
                subscribers.query().forEach(function (registration) {
                    registration(host, info);
                });
            };
            Event.prototype.clear = function () {
                this._subscribers = [];
            };
            Event.prototype.count = function () {
                return this._subscribers.length;
            };
            return Event;
        })();
        Events.Event = Event;
        var Request = (function () {
            function Request(host) {
                this._subscribers = [];
                this._host = host;
            }
            Request.prototype.subscribe = function (registration) {
                Classical.Assert.isDefined(registration, 'The registration is null or undefined.');
                this._subscribers.add(registration);
            };
            Request.prototype.unsubscribe = function (registration) {
                this._subscribers.remove(registration);
            };
            Request.prototype.execute = function (info) {
                var host = this._host, subscribers = this._subscribers;
                if (subscribers.count() === 0)
                    return [];
                var responses = [], response;
                subscribers.forEach(function (registration) {
                    response = registration(host, info);
                    Classical.Assert.isDefined(response, 'A subscriber gave a response which is null or undefined.');
                    responses.add(response);
                });
                return responses;
            };
            Request.prototype.clear = function () {
                this._subscribers = [];
            };
            Request.prototype.count = function () {
                return this._subscribers.length;
            };
            return Request;
        })();
        Events.Request = Request;
        var TallyRequest = (function (_super) {
            __extends(TallyRequest, _super);
            function TallyRequest(host) {
                _super.call(this, host);
            }
            TallyRequest.prototype.tally = function (info) {
                var responses = this.execute(info), tally = 0;
                responses.forEach(function (value) { return tally += value; });
                return tally;
            };
            return TallyRequest;
        })(Request);
        Events.TallyRequest = TallyRequest;
        var VoteRequest = (function (_super) {
            __extends(VoteRequest, _super);
            function VoteRequest(host, undecidedResult) {
                if (undecidedResult === void 0) { undecidedResult = null; }
                _super.call(this, host);
                this._undecidedResult = undecidedResult;
            }
            VoteRequest.prototype.subscribe = function (registration) {
                _super.prototype.subscribe.call(this, registration);
            };
            VoteRequest.prototype.poll = function (info) {
                var responses = this.execute(info), tally = 0;
                if (responses.count() === 0)
                    return this._undecidedResult;
                responses.forEach(function (vote) {
                    vote ? tally++ : tally--;
                });
                if (tally === 0)
                    return this._undecidedResult;
                return tally > 0;
            };
            return VoteRequest;
        })(Request);
        Events.VoteRequest = VoteRequest;
        var UnanimousVoteRequest = (function (_super) {
            __extends(UnanimousVoteRequest, _super);
            function UnanimousVoteRequest(host, undecidedResult) {
                if (undecidedResult === void 0) { undecidedResult = null; }
                _super.call(this, host);
                this._host = host;
                this._undecidedResult = undecidedResult;
            }
            UnanimousVoteRequest.prototype.poll = function (info) {
                var responses = this.execute(info).array(), numberOfResponses = responses.length;
                if (numberOfResponses == 0)
                    return this._undecidedResult;
                for (var i = 0; i < numberOfResponses; i++) {
                    if (!responses[i])
                        return false;
                }
                return true;
            };
            return UnanimousVoteRequest;
        })(VoteRequest);
        Events.UnanimousVoteRequest = UnanimousVoteRequest;
    })(Events = Classical.Events || (Classical.Events = {}));
})(Classical || (Classical = {}));
function bind(model, selector) {
    var propertyName = Classical.Expression.getProperty(selector);
    var property = Classical.Binding._getProperty(model, propertyName);
    return Classical.Binding._propertyBinderToBinder({
        property: property,
        converter: {
            convert: function (x) { return x; },
            convertBack: function (x) { return x; }
        }
    });
}
var Classical;
(function (Classical) {
    var Binding;
    (function (Binding) {
        var u = Classical.Utilities;
        var cc = Classical.Collections;
        var e = Classical.Events;
        var Assert = Classical.Assert;
        var Update = (function () {
            function Update(sources) {
                var _this = this;
                this._sources = [];
                Assert.isDefined(sources, "The sources of the update are undefined.");
                if (sources)
                    sources.query().forEach(function (s) { return _this._sources.add(s); });
            }
            Update.prototype.hasSource = function (source) {
                var sources = this._sources;
                for (var i = 0; i < sources.length; i++) {
                    if (source === sources[i])
                        return true;
                }
                return false;
            };
            Update.prototype.addSource = function (source) {
                Assert.isDefined(source, 'The source is not defined.');
                if (this._sources.query().hasNone(function (s) { return s === source; }))
                    this._sources.add(source);
            };
            Update.prototype.transferSourcesTo = function (update) {
                Assert.isDefined(update, 'The update is not defined.');
                var sources = update._sources.query();
                update._sources.addRange(this._sources.query().where(function (s) { return !sources.hasAny(function (s2) { return s2 == s; }); }));
                return update;
            };
            return Update;
        })();
        Binding.Update = Update;
        var Synchronizer = (function () {
            function Synchronizer(target) {
                this._updateDepth = 0;
                this._updates = [];
                this._binders = [];
                Assert.isDefined(target, 'The target was not specified.');
                this._target = target;
                this._onUpdateEvent = new e.Event(target);
            }
            Object.defineProperty(Synchronizer.prototype, "target", {
                get: function () {
                    return this._target;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Synchronizer.prototype, "updates", {
                get: function () {
                    return this._updates.array();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Synchronizer.prototype, "updateDepth", {
                get: function () {
                    return this._updateDepth;
                },
                enumerable: true,
                configurable: true
            });
            Synchronizer.prototype.hasTarget = function (target) {
                return target && this._binders.query().hasAny(function (b) { return b.source === target; });
            };
            Synchronizer.prototype.hasSource = function (source) {
                return source && source.hasTarget(this._target);
            };
            Synchronizer.prototype.bind = function (arg) {
                Assert.isDefined(arg, 'The binder was not specified.');
                if (arg.sources)
                    return this._createComplexBinding(arg);
                var binder = arg;
                Assert.isTrue(u.isDefined(binder.source), 'The binder source was not specified.');
                Assert.isFalse(this.target.equals(binder.source), 'An object cannot be bound to itself');
                if (this._binders.query().hasAny(function (b) { return b.source.equals(binder.source); }))
                    return;
                if (!binder.converter) {
                    binder.converter = {
                        convert: function (sourceUpdate) { return sourceUpdate; },
                        convertBack: function (targetUpdate) { return targetUpdate; }
                    };
                }
                var converter = binder.converter;
                if (converter.convertBack)
                    this._binders.add(binder);
                if (binder.init)
                    binder.init(this._target, binder.source);
                var inverseBinder = {
                    source: this._target,
                    converter: {
                        convert: converter.convertBack,
                        convertBack: converter.convert
                    }
                };
                binder.source.bind(inverseBinder);
            };
            Synchronizer.prototype.unbind = function (source) {
                var sourceHasTarget = source.hasTarget(this._target), sourceBinder = this._binders.query().singleOrDefault(function (b) { return b.source === source; });
                if (sourceBinder)
                    this._binders.remove(sourceBinder);
                if (!sourceHasTarget)
                    return false;
                source.unbind(this._target);
                return true;
            };
            Synchronizer.prototype.apply = function (updates) {
                throw Assert.notImplemented("apply must be implemented by the parent ISynchronizable object rather than the child synchronizer.");
            };
            Synchronizer.prototype.track = function (registration) {
                this._onUpdateEvent.subscribe(function (host, info) {
                    registration(info, host);
                });
            };
            Synchronizer.prototype.detach = function () {
                var binders = this._binders, source = this._target;
                while (binders.length > 0) {
                    binders.pop().source.unbind(source);
                }
            };
            Synchronizer.prototype.add = function (update) {
                Assert.isDefined(update, 'The update is not defined.');
                update.addSource(this._target);
                this._updates.add(update);
            };
            Synchronizer.prototype.filter = function (updates) {
                var target = this._target;
                return updates.query().where(function (u) { return !u.hasSource(target); }).array();
            };
            Synchronizer.prototype.sync = function (immediate) {
                var _this = this;
                if (immediate === void 0) { immediate = false; }
                if (!immediate) {
                    this._updateDepth--;
                    if (this._updateDepth >= 0)
                        return false;
                }
                this._updateDepth = 0;
                var updates = this._updates;
                if (updates.length === 0)
                    return true;
                this._updates = [];
                var groupUpdate = {
                    isExecuted: false,
                    data: []
                };
                this._binders.query().forEach(function (binder) {
                    var converter = binder.converter;
                    if (!converter.convertBack)
                        return;
                    var sourceUpdates = updates.query().where(function (update) { return !update.hasSource(binder.source); }).forEach(function (update) {
                        var sourceUpdate = converter.convertBack(update);
                        update.transferSourcesTo(sourceUpdate);
                        update.addSource(_this.target);
                    }).array();
                    var sourceGroupUpdate = {
                        binder: binder,
                        updates: sourceUpdates
                    };
                    if (sourceGroupUpdate.updates.query().hasAny()) {
                        groupUpdate.data.add(sourceGroupUpdate);
                    }
                });
                if (groupUpdate.data.query().hasAny())
                    this._executeUpdates(groupUpdate);
                this._executeOnUpdate(updates.slice());
            };
            Synchronizer.prototype.syncStart = function () {
                this._updateDepth++;
            };
            Synchronizer.prototype._createComplexBinding = function (binder) {
                var _this = this;
                Assert.isDefined(binder.sources, 'The sources of the ComplexBinder are not defined');
                var sources = binder.sources, sourcesQuery = sources.query(), bindingHandler = function () {
                    var update = binder.converter.convert(sources);
                    sourcesQuery.forEach(function (source) { return update.addSource(source); });
                    return _this.target.apply([update]);
                };
                sourcesQuery.forEach(function (source) { return source.track(bindingHandler); });
                bindingHandler();
            };
            Synchronizer.prototype._executeUpdates = function (groupUpdate) {
                if (groupUpdate.isExecuted)
                    return;
                groupUpdate.data.query().forEach(function (sourceUpdate) {
                    var sourceUpdateQuery = sourceUpdate.updates.query();
                    if (sourceUpdateQuery.hasAny()) {
                        sourceUpdate.binder.source.apply(sourceUpdate.updates);
                    }
                });
                groupUpdate.isExecuted = true;
            };
            Synchronizer.prototype._executeOnUpdate = function (updates) {
                this._onUpdateEvent.execute(updates);
            };
            return Synchronizer;
        })();
        Binding.Synchronizer = Synchronizer;
        var Property = (function () {
            function Property(value) {
                if (value === void 0) { value = null; }
                this._synchronizer = new Synchronizer(this);
                this._value = value;
            }
            Object.defineProperty(Property.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                    this._synchronizer.add(new PropertyUpdate(value));
                    this._synchronizer.sync();
                },
                enumerable: true,
                configurable: true
            });
            Property.prototype.toString = function () {
                return u.coalesce(this.value.toString(), '').toString();
            };
            Property.prototype.hasTarget = function (target) {
                return this._synchronizer.hasTarget(target);
            };
            Property.prototype.hasSource = function (source) {
                return this._synchronizer.hasSource(source);
            };
            Property.prototype.bind = function (arg1, arg2) {
                var currentBinder;
                if (u.isArray(arg1)) {
                    var complexBinder = this._createComplexBinder(arg1, arg2);
                    return this._synchronizer.bind(complexBinder);
                }
                else if (arg1.getType && this.getType().isAssignableFrom(arg1.getType())) {
                    var source = arg1;
                    currentBinder = this._sourceToBinder(source);
                }
                else if (arg1.property) {
                    var propertyBinder = arg1;
                    currentBinder = _propertyBinderToBinder(arg1);
                }
                else {
                    currentBinder = arg1;
                }
                this._synchronizer.bind(currentBinder);
            };
            Property.prototype.unbind = function (partner) {
                return this._synchronizer.unbind(partner);
            };
            Property.prototype.track = function (registration) {
                this._synchronizer.track(registration);
            };
            Property.prototype.apply = function (updates) {
                var synchronizer = this._synchronizer;
                var update = synchronizer.filter(updates).query().lastOrDefault();
                if (!u.isDefined(update) || u.areEqual(this._value, update.value))
                    return;
                this._value = update.value;
                synchronizer.add(update);
                synchronizer.sync();
            };
            Property.prototype.detach = function () {
                this._synchronizer.detach();
            };
            Property.prototype._createComplexBinder = function (sources, selector) {
                return {
                    sources: sources,
                    converter: {
                        convert: function (sources) {
                            var value = selector(sources);
                            return new PropertyUpdate(value);
                        }
                    }
                };
            };
            Property.prototype._sourceToBinder = function (source) {
                var _this = this;
                return {
                    source: source,
                    init: function () {
                        _this.value = source.value;
                    }
                };
            };
            return Property;
        })();
        Binding.Property = Property;
        var ConfirmationProperty = (function (_super) {
            __extends(ConfirmationProperty, _super);
            function ConfirmationProperty(value) {
                if (value === void 0) { value = null; }
                _super.call(this, value);
                this._newValue = value;
            }
            Object.defineProperty(ConfirmationProperty.prototype, "value", {
                get: function () {
                    return this._getValue();
                },
                set: function (value) {
                    this._newValue = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConfirmationProperty.prototype, "newValue", {
                get: function () {
                    return this._newValue;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConfirmationProperty.prototype, "synchronizer", {
                get: function () {
                    return this._synchronizer;
                },
                enumerable: true,
                configurable: true
            });
            ConfirmationProperty.prototype.apply = function (updates) {
                var synchronizer = this.synchronizer;
                var update = synchronizer.filter(updates).query().lastOrDefault();
                if (!u.isDefined(update) || u.areEqual(this._getValue(), update.value))
                    return;
                this._newValue = update.value;
            };
            ConfirmationProperty.prototype.accept = function () {
                this._setValue(this._newValue);
                this.synchronizer.add(new PropertyUpdate(this._newValue));
                this.synchronizer.sync();
            };
            ConfirmationProperty.prototype.reject = function () {
                this._newValue = this.value;
            };
            ConfirmationProperty.prototype._getValue = function () {
                return this._value;
            };
            ConfirmationProperty.prototype._setValue = function (value) {
                this._value = value;
            };
            return ConfirmationProperty;
        })(Property);
        Binding.ConfirmationProperty = ConfirmationProperty;
        var PropertyUpdate = (function (_super) {
            __extends(PropertyUpdate, _super);
            function PropertyUpdate(value, sources) {
                var _this = this;
                if (sources === void 0) { sources = []; }
                _super.call(this, sources);
                this.value = value;
                if (sources)
                    sources.query().forEach(function (source) { return _this.addSource(source); });
            }
            return PropertyUpdate;
        })(Update);
        Binding.PropertyUpdate = PropertyUpdate;
        function _getProperty(obj, propertyName) {
            var value = obj[propertyName];
            if (!value.getType().isAssignableTo(typeOf(Property)))
                _setProperty(obj, propertyName, value);
            return objectToPropertyMap.getValue(obj).getValue(propertyName);
        }
        Binding._getProperty = _getProperty;
        function _setProperty(obj, propertyName, value) {
            if (!objectToPropertyMap.containsKey(obj))
                objectToPropertyMap.add(obj, new cc.Dictionary());
            var propertyMap = objectToPropertyMap.getValue(obj);
            if (!propertyMap.containsKey(propertyName)) {
                var property = new Property(value);
                propertyMap.add(propertyName, property);
                delete obj[propertyName];
                Object.defineProperty(obj, propertyName, {
                    get: function () { return property.value; },
                    set: function (value) { return property.value = value; },
                    configurable: true,
                    enumerable: true,
                });
                return;
            }
            propertyMap.getValue(propertyName).value = value;
        }
        Binding._setProperty = _setProperty;
        function _propertyBinderToBinder(propertyBinder) {
            var converter = null, valueConverter = propertyBinder.converter;
            converter = {
                convert: function (sourceUpdate) {
                    var value = valueConverter.convert(sourceUpdate.value);
                    return sourceUpdate.transferSourcesTo(new PropertyUpdate(value));
                },
            };
            if (valueConverter.convertBack) {
                converter.convertBack = function (targetUpdate) {
                    var value = valueConverter.convertBack(targetUpdate.value);
                    return targetUpdate.transferSourcesTo(new PropertyUpdate(value));
                };
            }
            return {
                source: propertyBinder.property,
                converter: converter,
                init: function (target, source) {
                    target.value = valueConverter.convert(propertyBinder.property.value);
                }
            };
        }
        Binding._propertyBinderToBinder = _propertyBinderToBinder;
        var objectToPropertyMap = new cc.Dictionary(100);
    })(Binding = Classical.Binding || (Classical.Binding = {}));
})(Classical || (Classical = {}));
var Classical;
(function (Classical) {
    var Binding;
    (function (Binding) {
        var Collections;
        (function (Collections) {
            var u = Classical.Utilities;
            var Assert = Classical.Assert;
            var Collection = (function () {
                function Collection(items) {
                    this._synchronizer = new Binding.Synchronizer(this);
                    if (!items)
                        this._items = [];
                    else
                        this._items = items.array().slice(0);
                }
                Collection.prototype.getEnumerator = function () {
                    return this._items.getEnumerator();
                };
                Collection.prototype.forEach = function (operation) {
                    this._items.forEach(operation);
                };
                Collection.prototype.query = function () {
                    return this._items.query();
                };
                Collection.prototype.array = function () {
                    return this._items.array();
                };
                Collection.prototype.count = function () {
                    return this._items.count();
                };
                Collection.prototype.add = function (item) {
                    var index = this._items.length;
                    this._add(new CollectionUpdate().create(0 /* Add */, null, item, index));
                    return this;
                };
                Collection.prototype._add = function (update) {
                    var s = this._synchronizer;
                    s.add(update);
                    this._items.add(update.newValue);
                    s.sync();
                };
                Collection.prototype.addRange = function (items) {
                    var _this = this;
                    items = items || [];
                    var s = this._synchronizer;
                    s.syncStart();
                    items.forEach(function (item) { return _this.add(item); });
                    s.sync();
                    return this;
                };
                Collection.prototype.remove = function (item) {
                    this._remove(new CollectionUpdate().create(2 /* Remove */, item, null, null));
                    return this;
                };
                Collection.prototype._remove = function (update) {
                    var s = this._synchronizer;
                    this._items.remove(update.oldValue);
                    s.add(update);
                    s.sync();
                };
                Collection.prototype.removeAt = function (index) {
                    this._removeAt(new CollectionUpdate().create(3 /* RemoveAt */, null, null, index));
                    this._synchronizer.sync();
                    return this;
                };
                Collection.prototype._removeAt = function (update) {
                    var s = this._synchronizer;
                    this._items.removeAt(update.index);
                    s.add(update);
                    s.sync();
                };
                Collection.prototype.clear = function () {
                    var items = this._items, s = this._synchronizer;
                    items.clear();
                    s.syncStart();
                    while (items.length > 0) {
                        items.removeAt(items.length - 1);
                    }
                    s.sync();
                    return this;
                };
                Collection.prototype.get = function (index) {
                    return this._items[index];
                };
                Collection.prototype.set = function (index, item) {
                    this._set(new CollectionUpdate(this).create(1 /* Set */, null, item, index));
                    return this;
                };
                Collection.prototype._set = function (update) {
                    this._items.set(update.index, update.newValue);
                    var s = this._synchronizer;
                    s.add(update);
                    s.sync();
                };
                Collection.prototype.hasTarget = function (target) {
                    return this._synchronizer.hasTarget(target);
                };
                Collection.prototype.hasSource = function (source) {
                    return this._synchronizer.hasSource(source);
                };
                Collection.prototype.bind = function (arg1, arg2) {
                    var currentBinder;
                    if (u.isArray(arg1)) {
                        var complexBinder = this._createComplexBinder(arg1, arg2);
                        return this._synchronizer.bind(complexBinder);
                    }
                    else if (arg1.sources) {
                        return this._synchronizer.bind(arg1);
                    }
                    else if (arg1.getType && this.getType().isAssignableFrom(arg1.getType())) {
                        var target = arg1;
                        currentBinder = this._sourceToBinder(target);
                    }
                    else if (arg1.collection) {
                        currentBinder = this._collectionBinderToBinder(arg1);
                    }
                    else {
                        currentBinder = arg1;
                    }
                    this._synchronizer.bind(currentBinder);
                };
                Collection.prototype.unbind = function (source) {
                    return this._synchronizer.unbind(source);
                };
                Collection.prototype.track = function (registration) {
                    this._synchronizer.track(registration);
                };
                Collection.prototype.apply = function (updates) {
                    var synchronizer = this._synchronizer, updates = updates || [], updateQuery = synchronizer.filter(updates).query();
                    this._applyAdd(updateQuery.where(function (u) { return u.type === 0 /* Add */; }));
                    this._applySet(updateQuery.where(function (u) { return u.type === 1 /* Set */; }));
                    this._applyRemove(updateQuery.where(function (u) { return u.type === 2 /* Remove */; }));
                    this._applyRemoveAt(updateQuery.where(function (u) { return u.type === 3 /* RemoveAt */; }));
                    synchronizer.sync();
                };
                Collection.prototype.detach = function () {
                    this._synchronizer.detach();
                };
                Collection.prototype.toString = function () {
                    return this._items.toString();
                };
                Collection.prototype._createComplexBinder = function (sources, selector) {
                    return {
                        sources: sources,
                        converter: {
                            convert: function (sources) { return selector(sources); },
                        }
                    };
                };
                Collection.prototype._sourceToBinder = function (source) {
                    var _this = this;
                    return {
                        source: source,
                        init: function () {
                            _this.clear();
                            _this._items = source._items.slice(0);
                            _this._synchronizer.sync();
                        }
                    };
                };
                Collection.prototype._collectionBinderToBinder = function (collectionBinder) {
                    var _this = this;
                    var converter = null, valueConverter = collectionBinder.converter;
                    converter = {
                        convert: function (sourceUpdate) {
                            return sourceUpdate.transferSourcesTo(converter.convert(sourceUpdate));
                        }
                    };
                    if (valueConverter.convertBack) {
                        converter.convertBack = function (targetUpdate) {
                            return targetUpdate.transferSourcesTo(converter.convertBack(targetUpdate));
                        };
                    }
                    return {
                        source: collectionBinder.collection,
                        converter: converter,
                        init: function () {
                            _this.clear();
                            collectionBinder.collection.addRange(_this);
                        }
                    };
                };
                Collection.prototype._applyAdd = function (updates) {
                    var _this = this;
                    updates.forEach(function (update) {
                        _this._add(update);
                    });
                };
                Collection.prototype._applySet = function (updates) {
                    var _this = this;
                    updates.forEach(function (update) {
                        _this._set(update);
                    });
                };
                Collection.prototype._applyRemove = function (updates) {
                    var _this = this;
                    updates.forEach(function (update) {
                        _this._remove(update);
                    });
                };
                Collection.prototype._applyRemoveAt = function (updates) {
                    var _this = this;
                    updates.forEach(function (update) {
                        _this._removeAt(update);
                    });
                };
                return Collection;
            })();
            Collections.Collection = Collection;
            var CollectionUpdate = (function (_super) {
                __extends(CollectionUpdate, _super);
                function CollectionUpdate(sources) {
                    if (sources === void 0) { sources = []; }
                    _super.call(this, sources);
                    this.oldValue = null;
                    this.newValue = null;
                    this.index = null;
                }
                CollectionUpdate.prototype.create = function (type, oldValue, newValue, index) {
                    Assert.isDefined(type, 'A CollectionUpdateType is required');
                    this.type = type;
                    this.oldValue = oldValue;
                    this.newValue = newValue;
                    this.index = index;
                    return this;
                };
                return CollectionUpdate;
            })(Binding.Update);
            Collections.CollectionUpdate = CollectionUpdate;
            (function (CollectionUpdateType) {
                CollectionUpdateType[CollectionUpdateType["Add"] = 0] = "Add";
                CollectionUpdateType[CollectionUpdateType["Set"] = 1] = "Set";
                CollectionUpdateType[CollectionUpdateType["Remove"] = 2] = "Remove";
                CollectionUpdateType[CollectionUpdateType["RemoveAt"] = 3] = "RemoveAt";
            })(Collections.CollectionUpdateType || (Collections.CollectionUpdateType = {}));
            var CollectionUpdateType = Collections.CollectionUpdateType;
        })(Collections = Binding.Collections || (Binding.Collections = {}));
    })(Binding = Classical.Binding || (Classical.Binding = {}));
})(Classical || (Classical = {}));
var Classical;
(function (Classical) {
    var Aspects;
    (function (Aspects) {
        var Aspect = (function () {
            function Aspect() {
            }
            return Aspect;
        })();
        Aspects.Aspect = Aspect;
        var PropertyAspect = (function (_super) {
            __extends(PropertyAspect, _super);
            function PropertyAspect() {
                _super.apply(this, arguments);
            }
            PropertyAspect.prototype.ApplyAspect = function (property) {
                throw Classical.Assert.notImplemented();
            };
            PropertyAspect.prototype.IsFirstAspect = function (property) {
                return this === property._propertyAspects[0];
            };
            PropertyAspect.onGetValue = function (property, additionalFunc) {
                Classical.Assert.isDefined(property);
                Classical.Assert.isDefined(additionalFunc);
                if (!property.canRead)
                    return null;
                var onGetValueAspect = new OnGetValueAspect(additionalFunc);
                PropertyAspect.AddAspectToProperty(property, onGetValueAspect);
                PropertyAspect.ApplyAllAspects(property);
                return onGetValueAspect;
            };
            PropertyAspect.onSetValue = function (property, additionalFunc) {
                Classical.Assert.isDefined(property);
                Classical.Assert.isDefined(additionalFunc);
                if (!property.canWrite)
                    return null;
                var onSetValueAspect = new OnSetValueAspect(additionalFunc);
                PropertyAspect.AddAspectToProperty(property, onSetValueAspect);
                PropertyAspect.ApplyAllAspects(property);
                return onSetValueAspect;
            };
            PropertyAspect.removeAspect = function (property, propertyAspect) {
                var removedAspect = false;
                var methodAspects = property._propertyAspects;
                for (var i = 0; i < property._propertyAspects.length; i++) {
                    var aspect = property._propertyAspects[i];
                    if (propertyAspect === aspect) {
                        property._propertyAspects.removeAt(i);
                        removedAspect = true;
                    }
                }
                if (removedAspect)
                    PropertyAspect.ApplyAllAspects(property);
                return removedAspect;
            };
            PropertyAspect.removeAllAspects = function (property) {
                Classical.Assert.isDefined(property);
                property._propertyAspects.length = 0;
                PropertyAspect.ApplyAllAspects(property);
            };
            PropertyAspect.AddAspectToProperty = function (property, propertyAspect) {
                property._propertyAspects.add(propertyAspect);
            };
            PropertyAspect.ApplyAllAspects = function (property) {
                if (property._propertyAspects.length === 0) {
                    var initialPropertyDescriptor = property._initialPropertyDescriptor;
                    if (property.isStatic)
                        Object.defineProperty(property.declaringType.constructorFunction, property.name, initialPropertyDescriptor);
                    else
                        Object.defineProperty(property.declaringType.prototype, property.name, initialPropertyDescriptor);
                    property._propertyDescriptor = PropertyAspect.getNewDescriptor(initialPropertyDescriptor);
                }
                for (var i = 0; i < property._propertyAspects.length; i++) {
                    if (i === 0) {
                        var initialPropertyDescriptor = property._initialPropertyDescriptor;
                        property._propertyDescriptor = PropertyAspect.getNewDescriptor(initialPropertyDescriptor);
                    }
                    var aspect = property._propertyAspects[i];
                    aspect.ApplyAspect(property);
                }
            };
            PropertyAspect.getNewDescriptor = function (descriptor) {
                if (!descriptor)
                    return descriptor;
                if (descriptor.get || descriptor.set)
                    return { configurable: descriptor.configurable, enumerable: descriptor.enumerable, get: descriptor.get, set: descriptor.set };
                else
                    return { configurable: descriptor.configurable, enumerable: descriptor.enumerable, writable: descriptor.writable, value: descriptor.value };
            };
            return PropertyAspect;
        })(Aspect);
        Aspects.PropertyAspect = PropertyAspect;
        var OnGetValueAspect = (function (_super) {
            __extends(OnGetValueAspect, _super);
            function OnGetValueAspect(onEntryFunction) {
                _super.call(this);
                Classical.Assert.isDefined(onEntryFunction);
                this._onGetValueFunction = onEntryFunction;
            }
            OnGetValueAspect.prototype.ApplyAspect = function (property) {
                var propertyDescriptor = this.IsFirstAspect(property) ? property._initialPropertyDescriptor : property._propertyDescriptor;
                var originalGetFunction = propertyDescriptor.get;
                var additionalFunc = this._onGetValueFunction;
                var newFunction = function () {
                    additionalFunc.apply(this, [property]);
                    return originalGetFunction.apply(this, arguments);
                };
                propertyDescriptor = property._propertyDescriptor;
                propertyDescriptor.get = newFunction;
                if (property.isStatic)
                    Object.defineProperty(property.declaringType.constructorFunction, property.name, propertyDescriptor);
                else
                    Object.defineProperty(property.declaringType.prototype, property.name, propertyDescriptor);
            };
            return OnGetValueAspect;
        })(PropertyAspect);
        Aspects.OnGetValueAspect = OnGetValueAspect;
        var OnSetValueAspect = (function (_super) {
            __extends(OnSetValueAspect, _super);
            function OnSetValueAspect(onSetValueFunction) {
                _super.call(this);
                Classical.Assert.isDefined(onSetValueFunction);
                this._onSetValueFunction = onSetValueFunction;
            }
            OnSetValueAspect.prototype.ApplyAspect = function (property) {
                var propertyDescriptor = this.IsFirstAspect(property) ? property._initialPropertyDescriptor : property._propertyDescriptor;
                var originalSetFunction = propertyDescriptor.set;
                var additionalFunc = this._onSetValueFunction;
                var newFunction = function () {
                    var setValue = arguments[0];
                    additionalFunc.apply(this, [property, setValue]);
                    originalSetFunction.apply(this, arguments);
                };
                propertyDescriptor = property._propertyDescriptor;
                propertyDescriptor.set = newFunction;
                if (property.isStatic)
                    Object.defineProperty(property.declaringType.constructorFunction, property.name, propertyDescriptor);
                else
                    Object.defineProperty(property.declaringType.prototype, property.name, propertyDescriptor);
            };
            return OnSetValueAspect;
        })(PropertyAspect);
        Aspects.OnSetValueAspect = OnSetValueAspect;
        var MethodAspect = (function (_super) {
            __extends(MethodAspect, _super);
            function MethodAspect() {
                _super.apply(this, arguments);
            }
            MethodAspect.prototype.ApplyAspect = function (method) {
                throw Classical.Assert.notImplemented();
            };
            MethodAspect.prototype.IsFirstAspect = function (method) {
                return this === method._methodAspects[0];
            };
            MethodAspect.onEntry = function (method, additionalFunc) {
                Classical.Assert.isDefined(method);
                Classical.Assert.isDefined(additionalFunc);
                var onEntryAspect = new OnEntryAspect(additionalFunc);
                MethodAspect.AddAspectToMethod(method, onEntryAspect);
                MethodAspect.ApplyAllAspects(method);
                return onEntryAspect;
            };
            MethodAspect.onExit = function (method, additionalFunc) {
                Classical.Assert.isDefined(method);
                Classical.Assert.isDefined(additionalFunc);
                var onExitAspect = new OnExitAspect(additionalFunc);
                MethodAspect.AddAspectToMethod(method, onExitAspect);
                MethodAspect.ApplyAllAspects(method);
                return onExitAspect;
            };
            MethodAspect.onException = function (method, additionalFunc, reThrowException) {
                if (reThrowException === void 0) { reThrowException = true; }
                Classical.Assert.isDefined(method);
                Classical.Assert.isDefined(additionalFunc);
                var onExceptionAspect = new OnExceptionAspect(additionalFunc, reThrowException);
                MethodAspect.AddAspectToMethod(method, onExceptionAspect);
                MethodAspect.ApplyAllAspects(method);
                return onExceptionAspect;
            };
            MethodAspect.removeAspect = function (method, methodAspect) {
                var removedAspect = false;
                var methodAspects = method._methodAspects;
                for (var i = 0; i < method._methodAspects.length; i++) {
                    var aspect = method._methodAspects[i];
                    if (methodAspect === aspect) {
                        method._methodAspects.removeAt(i);
                        removedAspect = true;
                    }
                }
                if (removedAspect)
                    MethodAspect.ApplyAllAspects(method);
                return removedAspect;
            };
            MethodAspect.removeAllAspects = function (method) {
                Classical.Assert.isDefined(method);
                method._methodAspects.length = 0;
                MethodAspect.ApplyAllAspects(method);
            };
            MethodAspect.AddAspectToMethod = function (method, methodAspect) {
                method._methodAspects.add(methodAspect);
            };
            MethodAspect.ApplyAllAspects = function (method) {
                if (method._methodAspects.length === 0) {
                    var initialFunction = method._initialFunction;
                    if (method.isStatic)
                        method.declaringType.constructorFunction[method.name] = initialFunction;
                    else
                        method.declaringType.prototype[method.name] = initialFunction;
                    method._underlyingFunction = initialFunction;
                }
                for (var i = 0; i < method._methodAspects.length; i++) {
                    var aspect = method._methodAspects[i];
                    aspect.ApplyAspect(method);
                }
            };
            return MethodAspect;
        })(Aspect);
        Aspects.MethodAspect = MethodAspect;
        var OnEntryAspect = (function (_super) {
            __extends(OnEntryAspect, _super);
            function OnEntryAspect(onEntryFunction) {
                _super.call(this);
                Classical.Assert.isDefined(onEntryFunction);
                this._onEntryFunction = onEntryFunction;
            }
            OnEntryAspect.prototype.ApplyAspect = function (method) {
                var originalFunc = this.IsFirstAspect(method) ? method._initialFunction : method.functionValue;
                var additionalFunc = this._onEntryFunction;
                var newFunction = function () {
                    additionalFunc.apply(this, [method]);
                    return originalFunc.apply(this, arguments);
                };
                if (method.isStatic)
                    method.declaringType.constructorFunction[method.name] = newFunction;
                else
                    method.declaringType.prototype[method.name] = newFunction;
                method._underlyingFunction = newFunction;
            };
            return OnEntryAspect;
        })(MethodAspect);
        var OnExitAspect = (function (_super) {
            __extends(OnExitAspect, _super);
            function OnExitAspect(onExitFunction) {
                _super.call(this);
                Classical.Assert.isDefined(onExitFunction);
                this._onExitFunction = onExitFunction;
            }
            OnExitAspect.prototype.ApplyAspect = function (method) {
                var originalFunc = this.IsFirstAspect(method) ? method._initialFunction : method.functionValue;
                var additionalFunc = this._onExitFunction;
                var newFunction = function () {
                    var retValue = originalFunc.apply(this, arguments);
                    additionalFunc.apply(this, [method, retValue]);
                    return retValue;
                };
                if (method.isStatic)
                    method.declaringType.constructorFunction[method.name] = newFunction;
                else
                    method.declaringType.prototype[method.name] = newFunction;
                method._underlyingFunction = newFunction;
            };
            return OnExitAspect;
        })(MethodAspect);
        var OnExceptionAspect = (function (_super) {
            __extends(OnExceptionAspect, _super);
            function OnExceptionAspect(onExceptionFunction, reThrowException) {
                _super.call(this);
                Classical.Assert.isDefined(onExceptionFunction);
                this._onExceptionFunction = onExceptionFunction;
                this._reThrowException = reThrowException;
            }
            OnExceptionAspect.prototype.ApplyAspect = function (method) {
                var originalFunc = this.IsFirstAspect(method) ? method._initialFunction : method.functionValue;
                var additionalFunc = this._onExceptionFunction;
                var reThrowException = this._reThrowException;
                var newFunction = function () {
                    try {
                        return originalFunc.apply(this, arguments);
                    }
                    catch (e) {
                        additionalFunc.apply(this, [method, e]);
                        if (reThrowException)
                            throw e;
                    }
                };
                if (method.isStatic)
                    method.declaringType.constructorFunction[method.name] = newFunction;
                else
                    method.declaringType.prototype[method.name] = newFunction;
                method._underlyingFunction = newFunction;
            };
            return OnExceptionAspect;
        })(MethodAspect);
    })(Aspects = Classical.Aspects || (Classical.Aspects = {}));
})(Classical || (Classical = {}));
