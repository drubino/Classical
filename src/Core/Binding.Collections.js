var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 A set of collections which can be bound to each other.
 @seealso Classical.Binding
*/
var Classical;
(function (Classical) {
    var Binding;
    (function (Binding) {
        var Collections;
        (function (Collections) {
            //#region Imports
            var u = Classical.Utilities;
            var Assert = Classical.Assert;
            //#endregion Imports
            //#region Collection
            /**
             A collection whose items can be bound and synchronized with other objects.
             @typeparam [T] The type of item in the collection.
            */
            var Collection = (function () {
                //#endregion Fields
                //#region Constructor
                function Collection(items) {
                    this._synchronizer = new Binding.Synchronizer(this);
                    if (!items)
                        this._items = [];
                    else
                        this._items = items.array().slice(0);
                }
                //#endregion Constructor
                //#region IEnumerable Members
                //Enumerates the elements of the sequence, calling the enumerator for each.
                Collection.prototype.getEnumerator = function () {
                    return this._items.getEnumerator();
                };
                //Enumerates the sequence
                Collection.prototype.forEach = function (operation) {
                    this._items.forEach(operation);
                };
                //Returns an IEnumerable implementation that is queryable.
                Collection.prototype.query = function () {
                    return this._items.query();
                };
                //Returns a JavaScript array.
                Collection.prototype.array = function () {
                    return this._items.array();
                };
                //Counts the number of elements in a sequence.
                Collection.prototype.count = function () {
                    return this._items.count();
                };
                //#endregion IEnumerable Members
                //#region ICollection Members
                //Adds an item to the collection.
                Collection.prototype.add = function (item) {
                    var index = this._items.length;
                    this._add(new CollectionUpdate().create(CollectionUpdateType.Add, null, item, index));
                    return this;
                };
                Collection.prototype._add = function (update) {
                    var s = this._synchronizer;
                    s.add(update);
                    this._items.add(update.newValue);
                    s.sync();
                };
                //Adds a sequence of items to the collection.
                Collection.prototype.addRange = function (items) {
                    var _this = this;
                    items = items || [];
                    var s = this._synchronizer;
                    s.syncStart();
                    items.forEach(function (item) { return _this.add(item); });
                    s.sync();
                    return this;
                };
                //Removes all instances of the item from the collection.
                Collection.prototype.remove = function (item) {
                    this._remove(new CollectionUpdate().create(CollectionUpdateType.Remove, item, null, null));
                    return this;
                };
                Collection.prototype._remove = function (update) {
                    var s = this._synchronizer;
                    this._items.remove(update.oldValue);
                    s.add(update);
                    s.sync();
                };
                //Removes the element at the specified index.
                Collection.prototype.removeAt = function (index) {
                    this._removeAt(new CollectionUpdate().create(CollectionUpdateType.RemoveAt, null, null, index));
                    this._synchronizer.sync();
                    return this;
                };
                //Removes the element at the specified index.
                Collection.prototype._removeAt = function (update) {
                    var s = this._synchronizer;
                    this._items.removeAt(update.index);
                    s.add(update);
                    s.sync();
                };
                //Clears all elements from the collection.
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
                //Returns the element at the specified index.
                Collection.prototype.get = function (index) {
                    return this._items[index];
                };
                //Returns the element at the specified index.
                Collection.prototype.set = function (index, item) {
                    this._set(new CollectionUpdate(this).create(CollectionUpdateType.Set, null, item, index));
                    return this;
                };
                Collection.prototype._set = function (update) {
                    this._items.set(update.index, update.newValue);
                    var s = this._synchronizer;
                    s.add(update);
                    s.sync();
                };
                //#endregion ICollection Members
                //#region ISynchronizable Members
                Collection.prototype.hasTarget = function (target) {
                    return this._synchronizer.hasTarget(target);
                };
                Collection.prototype.hasSource = function (source) {
                    return this._synchronizer.hasSource(source);
                };
                //For overload resolution only.
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
                    var synchronizer = this._synchronizer, updates = updates || [], updateQuery = synchronizer
                        .filter(updates).query();
                    this._applyAdd(updateQuery.where(function (u) { return u.type === CollectionUpdateType.Add; }));
                    this._applySet(updateQuery.where(function (u) { return u.type === CollectionUpdateType.Set; }));
                    this._applyRemove(updateQuery.where(function (u) { return u.type === CollectionUpdateType.Remove; }));
                    this._applyRemoveAt(updateQuery.where(function (u) { return u.type === CollectionUpdateType.RemoveAt; }));
                    synchronizer.sync();
                };
                Collection.prototype.detach = function () {
                    this._synchronizer.detach();
                };
                //#endregion ISynchronizable Members
                //#region Base Class Overrides
                Collection.prototype.toString = function () {
                    return this._items.toString();
                };
                //#endregion Base Class Overrides
                //#region Utilities
                //#region createComplexBinder
                Collection.prototype._createComplexBinder = function (sources, selector) {
                    return {
                        sources: sources,
                        converter: {
                            convert: function (sources) { return selector(sources); },
                        }
                    };
                };
                //#endregion createComplexBinder
                //#region sourceToBinder
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
                //#endregion sourceToBinder
                //#region collectionBinderToBinder
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
                //#endregion propertyBinderToBinder
                //#region applyAdd
                Collection.prototype._applyAdd = function (updates) {
                    var _this = this;
                    updates.forEach(function (update) {
                        _this._add(update);
                    });
                };
                //#endregion applyAdd
                //#region applySet
                Collection.prototype._applySet = function (updates) {
                    var _this = this;
                    updates.forEach(function (update) {
                        _this._set(update);
                    });
                };
                //#endregion applySet
                //#region applyRemove
                Collection.prototype._applyRemove = function (updates) {
                    var _this = this;
                    updates.forEach(function (update) {
                        _this._remove(update);
                    });
                };
                //#endregion applyRemove
                //#region applyRemoveAt
                Collection.prototype._applyRemoveAt = function (updates) {
                    var _this = this;
                    updates.forEach(function (update) {
                        _this._removeAt(update);
                    });
                };
                return Collection;
            })();
            Collections.Collection = Collection;
            //#endregion ICollectionBinder
            //#region CollectionUpdate
            /**
             A specialized update used as a convenience when synchronizing two binding collections.
             @typeparam [TValue] The type of the property value.
            */
            var CollectionUpdate = (function (_super) {
                __extends(CollectionUpdate, _super);
                //#endregion Fields
                //#region Constructor
                function CollectionUpdate(sources) {
                    if (sources === void 0) { sources = []; }
                    _super.call(this, sources);
                    this.oldValue = null;
                    this.newValue = null;
                    this.index = null;
                }
                //#endregion Constructor
                //#region Methods
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
            //#endregion CollectionUpdate
            //#region CollectionUpdateType
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
//# sourceMappingURL=Binding.Collections.js.map