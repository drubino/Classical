//#region IEnumerable
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//#endregion Array
/**
 The core set of collections defined in Classical.
*/
var Classical;
(function (Classical) {
    var Collections;
    (function (Collections) {
        //#region Imports
        var u = Classical.Utilities;
        var r = Classical.Reflection;
        var ce = Classical.Collections.Enumerable;
        //#endregion Imports
        //#region Native Extensions
        //#region Array
        var ArrayPrototype = Array.prototype;
        //Implements IEnumerable<T>.getEnumerator
        ArrayPrototype.getEnumerator = function () {
            return new _ArrayEnumerator(this);
        };
        //Implements IEnumerable<T>.array
        ArrayPrototype.array = function () {
            return this;
        };
        //Implements IEnumerable<T>.query
        ArrayPrototype.query = function () {
            return new Queryable(this);
        };
        //Counts the number of elements in the array
        ArrayPrototype.count = function () {
            return this.length;
        };
        //Implements the object.equals
        ArrayPrototype.equals = function (other) {
            return this === other;
        };
        //Implements the object.is
        ArrayPrototype.is = function (type) {
            if (Classical.Utilities.isNullOrUndefined(type))
                return true;
            return this.getType().isAssignableTo(typeOf(type));
        };
        //Implements object.getType
        ArrayPrototype.getType = function () {
            if (this._type == null) {
                this._type = r.Type.getType(this.constructor);
            }
            return this._type;
        };
        //Implements object.getHashCode
        ArrayPrototype.getHashCode = function () {
            if (this._hashCode == undefined)
                this._hashCode = Classical.Hash.forNumber(Math.random());
            return this._hashCode;
        };
        //#endregion Array
        //#region ArrayEnumerator
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
        //#endregion ArrayEnumerator
        //#endregion Native Extensions
        //#region ImmutableCollection
        /**
         An accessible collection that is immutable.
         @typeparam [T] Type parameter of the class
        */
        var ImmutableCollection = (function () {
            //#endregion Fields
            //#region Constructor
            function ImmutableCollection(elements) {
                Classical.Assert.isDefined(elements, 'The elements of the ImmutableCollection are not defined.');
                var elementsCopy = copy(elements);
                this._get = function (element, index) {
                    switch (element) {
                        case Element.Copy: return copy(elementsCopy);
                        case Element.Count: return elementsCopy.length;
                        case Element.Item: return elementsCopy[index];
                        default: return null;
                    }
                };
            }
            //#endregion Constructor
            //#region IAccessible
            //Returns the element at the specified index.
            ImmutableCollection.prototype.get = function (index) {
                return this._get(Element.Item, index);
            };
            //#endregion IAccessible
            //#region IEnumerable
            //Enumerates the elements of the sequence, calling the enumerator for each.
            ImmutableCollection.prototype.getEnumerator = function () {
                return this._get(Element.Copy).getEnumerator();
            };
            //Returns an IEnumerable implementation that is queryable.
            ImmutableCollection.prototype.query = function () {
                return this._get(Element.Copy).query();
            };
            //Enumerates the collection
            ImmutableCollection.prototype.forEach = function (operation) {
                ce.forEach(this, operation);
            };
            //Returns a JavaScript array.
            ImmutableCollection.prototype.array = function () {
                return this._get(Element.Copy).array();
            };
            //Counts the number of elements in a sequence.
            ImmutableCollection.prototype.count = function () {
                return this._get(Element.Count);
            };
            return ImmutableCollection;
        })();
        Collections.ImmutableCollection = ImmutableCollection;
        //#region Resources
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
        //#endregion Resources
        //#endregion ImmutableCollection
        //#region Queryable
        /**
         Defines a lazily executed query that performs a computation on a sequence of data.
         @typeparam [T] The type of item being queried.
         @remarks
            Not all methods of IQueryable are lazily executed.
            In particular, methods which don't return IQueryables
            are expected to have executed the query.
        */
        var Queryable = (function () {
            //#endregion Fields
            //#region Constructor
            function Queryable(enumerable) {
                Classical.Assert.isDefined(enumerable);
                this._enumerable = enumerable;
            }
            //#endregion Constructor
            //#region IObject Members
            Queryable.prototype.toString = function () {
                return this.array().toString();
            };
            //#endregion IObject Members
            //#region IEnumerable Members
            Queryable.prototype.getEnumerator = function () {
                return this._enumerable.getEnumerator();
            };
            //Returns an IEnumerable implementation that is queryable.
            Queryable.prototype.query = function () {
                return this;
            };
            //Returns a JavaScript array.
            Queryable.prototype.array = function () {
                var result = new Array(), enumerator = this.getEnumerator();
                while (enumerator.moveNext()) {
                    result.push(enumerator.current);
                }
                return result;
            };
            //Returns the number of elements in the query.
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
            //#endregion forEach
            //#region cast
            Queryable.prototype.cast = function () {
                return this;
            };
            //#endregion cast
            //#region where
            //Returns a queryable containing the items that satisfy the predicate.
            Queryable.prototype.where = function (predicate) {
                return new _WhereQueryable(this, predicate);
            };
            //#endregion where
            //#region select
            //Returns a queryable containing the items selected by the selector.
            Queryable.prototype.select = function (selector) {
                return new _SelectQueryable(this, selector);
            };
            //#endregion select
            //#region selectMany
            //Returns a queryable containing the concatenation of all sequences selected by the selector.
            Queryable.prototype.selectMany = function (selector) {
                return new _ConcatQueryable(this.select(selector));
            };
            //#endregion selectMany
            //#region orderBy
            //Returns a queryable ordered by the selected item.
            //This only works well for number and string.
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
            //#endregion orderBy
            //#region orderByDescending
            //Returns a queryable ordered by the selected item in descending order.
            //This only works well for number and string.
            //TODO: Make this more efficient.
            Queryable.prototype.orderByDescending = function (selector, comparison) {
                var ordered = this.orderBy(selector, comparison);
                return ordered.where(function (i) { return u.isDefined(i); }).reverse()
                    .concat(ordered.where(function (i) { return !u.isDefined(i); }));
            };
            //#endregion orderByDescending
            //#region aggregate
            //Returns the accumulation of the elements in the sequence, starting with a seed.
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
            //#endregion aggregate
            //#region sum
            //Sums the selected values from the sequence.
            //If the array is empty, undefined is returned.
            Queryable.prototype.sum = function (selector) {
                if (this.hasNone())
                    return undefined;
                if (!selector)
                    selector = function (item) { return item; };
                return this.aggregate(function (first, second) { return first + selector(second); }, 0);
            };
            //#endregion sum
            //#region max
            //Returns the max of the values in the array.
            //If the array is empty, undefined is returned.
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
                if (u.isInfinity(result) &&
                    this.hasNone(function (i) { return selector(i) === result; })) {
                    return undefined;
                }
                return result;
            };
            //#endregion max
            //#region min
            //Sums the selected values from the sequence.
            //If the array is empty, undefined is returned.
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
                if (u.isInfinity(result) &&
                    this.hasNone(function (i) { return selector(i) === result; })) {
                    return undefined;
                }
                return result;
            };
            //#endregion min
            //#region hasNone
            //Returns whether the queryable is empty.
            Queryable.prototype.hasNone = function (predicate) {
                return !this.hasAny(predicate);
            };
            //#endregion hasNone
            //#region hasAny
            //Returns whether the queryable has any items in it.
            Queryable.prototype.hasAny = function (predicate) {
                predicate = this.coalescePredicate(predicate);
                return new _WhereQueryable(this._enumerable, predicate)
                    .getEnumerator()
                    .moveNext();
            };
            //#endregion hasAny
            //#region first
            //Returns the first element satisfying the predicate.
            //Throws an exception if empty.
            Queryable.prototype.first = function (predicate) {
                predicate = this.coalescePredicate(predicate);
                var result = this.where(predicate), enumerator = result.getEnumerator();
                Classical.Assert.isTrue(enumerator.moveNext(), 'The sequence does not have a first element.');
                return enumerator.current;
            };
            //#endregion first
            //#region firstOrDefault
            //Returns the first element satisfying the predicate, or null if empty.
            Queryable.prototype.firstOrDefault = function (predicate) {
                predicate = this.coalescePredicate(predicate);
                var result = this.where(predicate), enumerator = result.getEnumerator();
                if (!enumerator.moveNext())
                    return null;
                return enumerator.current;
            };
            //#endregion firstOrDefault
            //#region last
            //Returns the last element satisfying the predicate.
            //Throws an exception if empty.
            Queryable.prototype.last = function (predicate) {
                return this.reverse().first(predicate);
            };
            //#endregion last
            //#region lastOrDefault
            //Returns the last element satisfying the predicate, or null if empty.
            Queryable.prototype.lastOrDefault = function (predicate) {
                return this.reverse().firstOrDefault(predicate);
            };
            //#endregion lastOrDefault
            //#region single
            //Returns the only element satisfying the predicate.
            //Throws an exception if more then one satisfy the predicate.
            Queryable.prototype.single = function (predicate) {
                predicate = this.coalescePredicate(predicate);
                var result = this.where(predicate), enumerator = result.getEnumerator();
                Classical.Assert.isTrue(enumerator.moveNext(), 'The sequence does not have any matching elements.');
                var current = enumerator.current;
                Classical.Assert.isFalse(enumerator.moveNext(), 'The sequence has more than one matching element.');
                return current;
            };
            //#endregion single
            //#region singleOrDefault
            //Returns the only element satisfying the predicate, or null if empty.
            //Throws an exception if more then one satisfy the predicate.
            Queryable.prototype.singleOrDefault = function (predicate) {
                predicate = this.coalescePredicate(predicate);
                var result = this.where(predicate), enumerator = result.getEnumerator();
                if (!enumerator.moveNext())
                    return null;
                var current = enumerator.current;
                Classical.Assert.isFalse(enumerator.moveNext(), 'The sequence has more than one matching element.');
                return current;
            };
            //#endregion singleOrDefault
            //#region skip
            //Skips up to the specified count, and returns the remaining elements.
            Queryable.prototype.skip = function (count) {
                return new _SkipQueryable(this, count);
            };
            //#endregion skip
            //#region take
            //Takes up to the specified count, omitting the remaining elements.
            Queryable.prototype.take = function (count) {
                return new _TakeQueryable(this, count);
            };
            //#endregion take
            //#region at
            //Returns the item at the specified index.
            Queryable.prototype.at = function (index) {
                Classical.Assert.isTrue(u.isDefined(index) && index >= 0, 'The index must be a positive integer.');
                var rest = this.skip(index);
                Classical.Assert.isTrue(rest.hasAny(), 'The index is out of range.');
                return rest.first();
            };
            //#endregion at
            //#region concat
            //Concatenates this query with the other query.
            Queryable.prototype.concat = function (other) {
                var enumerables = [this, other].query();
                return new _ConcatQueryable(enumerables);
            };
            //#endregion take
            //#region distinct
            //Returns the distinct elements of a sequence.
            Queryable.prototype.distinct = function () {
                var map = new Collections.Dictionary(), enumerator = this.getEnumerator();
                while (enumerator.moveNext()) {
                    map.add(enumerator.current, true);
                }
                return map.keys.query();
            };
            //#endregion distinct
            //#region reverse
            //Reverses the order of the sequence.
            Queryable.prototype.reverse = function () {
                return this.array().reverse().query();
            };
            //#endregion reverse
            //#region dictionary
            //Returns a dictionary with the specified keys and values selected from the sequence.
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
            //#endregion dictionary
            //#region execute
            //Returns an executed version of the query which can be passed around without risk of redundant calculation.
            Queryable.prototype.execute = function () {
                return this.result().query();
            };
            //#endregion execute
            //#region result
            //Return the result of executing the query, as a basi JavaScript array.
            Queryable.prototype.result = function () {
                return this.array();
            };
            //#endregion result
            //#endregion IQueryable Members
            //#region Utilities
            Queryable.prototype.coalescePredicate = function (predicate) {
                return u.coalesce(predicate, function (item) { return true; });
            };
            return Queryable;
        })();
        Collections.Queryable = Queryable;
        //#endregion IQueryable
        //#region QueryableEnumerator
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
        //#endregion QueryableEnumerator
        //#region WhereQueryable
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
        //#endregion WhereQueryable
        //#region SelectQueryable
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
        //#endregion SelectQueryable
        //#region SkipQueryable
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
        //#endregion SkipQueryable
        //#region TakeQueryable
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
        //#endregion TakeQueryable
        //#region ConcatQueryable
        var _ConcatQueryable = (function (_super) {
            __extends(_ConcatQueryable, _super);
            function _ConcatQueryable(enumerables) {
                _super.call(this, this);
                this._enumerables = enumerables;
            }
            _ConcatQueryable.prototype.getEnumerator = function () {
                var enumerators = this._enumerables.query()
                    .where(function (e) { return u.isDefined(e); })
                    .select(function (e) { return e.getEnumerator(); });
                return new _ConcatQueryableEnumerator(enumerators);
            };
            return _ConcatQueryable;
        })(Queryable);
        //#endregion ConcatQueryable
        //#region ConcatQueryableEnumerator
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
        //#endregion ConcatQueryableEnumerator
        //#region Enumerable
        /**
         A collection of utilities for working with objects that implement IEnumerable<T>
         @seealso IEnumerable<T>
        */
        var Enumerable;
        (function (Enumerable) {
            //#region empty
            function empty() {
                return [];
            }
            Enumerable.empty = empty;
            //Returns numbers from the start number, incrememted by the increment number, to the end number.
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
            //#endregion range
            //#region forEach
            function forEach(items, operation) {
                var enumerator = items.getEnumerator(), current;
                while (enumerator.moveNext()) {
                    var current = enumerator.current;
                    operation.bind(current)(current);
                }
            }
            Enumerable.forEach = forEach;
        })(Enumerable = Collections.Enumerable || (Collections.Enumerable = {}));
        //#endregion Enumerable
        //#region Utilities
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
//# sourceMappingURL=Collections.js.map