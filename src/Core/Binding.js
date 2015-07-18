//#region bind
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
//#endregion bind
/**
 The objects and interfaces used to create objects that can be bound to each other
 in the sense that when one updates so too does the other.
 @seealso Classical.Binding.Collections
*/
var Classical;
(function (Classical) {
    var Binding;
    (function (Binding) {
        //#region Imports
        var u = Classical.Utilities;
        var cc = Classical.Collections;
        var e = Classical.Events;
        var Assert = Classical.Assert;
        //#endregion ISynchronizable
        //#region Update
        /**
         An update that can be performed on an ISynchronizable object.
         @remarks
            Updates are converted between types to facilitate binding across types.
            Updates also store their sources so there is an audit trail for objects they have been applied to.
         @seealso Classical.Binding.Synchronizer.
        */
        var Update = (function () {
            //#endregion Fields
            //#region Constructor
            function Update(sources) {
                var _this = this;
                //#region Fields
                this._sources = [];
                Assert.isDefined(sources, "The sources of the update are undefined.");
                if (sources)
                    sources.query().forEach(function (s) { return _this._sources.add(s); });
            }
            //#endregion Constructor
            //#region Methods
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
                update._sources.addRange(this._sources.query()
                    .where(function (s) {
                    return !sources.hasAny(function (s2) { return s2 == s; });
                }));
                return update;
            };
            return Update;
        })();
        Binding.Update = Update;
        //#endregion IComplexConverter
        //#region Synchronizer
        /**
         A utility class which performs most of the heavy lifting of the binding system.
         @typeparam [TTargetUpdate] {Update} The type of update consumed by the synchronizable object associated with the synchronizer.
         @remarks
            All synchronizable objects are meant to store a reference to a synchronizer.
            They should decorate every method of the synchronizer except apply.
         @seealso Classical.Binding.Synchronizer
        */
        var Synchronizer = (function () {
            //#endregion updateDepth
            //#endregion Properties
            //#region Constructor
            function Synchronizer(target) {
                //#region Fields
                this._updateDepth = 0;
                this._updates = [];
                this._binders = [];
                Assert.isDefined(target, 'The target was not specified.');
                this._target = target;
                this._onUpdateEvent = new e.Event(target);
            }
            Object.defineProperty(Synchronizer.prototype, "target", {
                //#endregion Fields
                //#region Properties
                //#region target
                get: function () {
                    return this._target;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Synchronizer.prototype, "updates", {
                //#endregion target
                //#region updates
                get: function () {
                    return this._updates.array();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Synchronizer.prototype, "updateDepth", {
                //#endregion updates
                //#region updateDepth
                get: function () {
                    return this._updateDepth;
                },
                enumerable: true,
                configurable: true
            });
            //#endregion Constructor
            //#region ISynchronizable
            //#region hasTarget
            Synchronizer.prototype.hasTarget = function (target) {
                return target && this._binders.query().hasAny(function (b) { return b.source === target; });
            };
            //#endregion hasTarget
            //#region hasSource
            Synchronizer.prototype.hasSource = function (source) {
                return source && source.hasTarget(this._target);
            };
            //For overload resolution only
            Synchronizer.prototype.bind = function (arg) {
                Assert.isDefined(arg, 'The binder was not specified.');
                if (arg.sources)
                    return this._createComplexBinding(arg);
                var binder = arg;
                Assert.isTrue(u.isDefined(binder.source), 'The binder source was not specified.');
                Assert.isFalse(this.target.equals(binder.source), 'An object cannot be bound to itself');
                //Return if the target is already bound to the source
                if (this._binders.query().hasAny(function (b) { return b.source.equals(binder.source); }))
                    return;
                //If converters are unspecified, it is assumed that TSourceUpdate is the update type of the target
                if (!binder.converter) {
                    binder.converter = {
                        convert: function (sourceUpdate) { return sourceUpdate; },
                        convertBack: function (targetUpdate) { return targetUpdate; }
                    };
                }
                //Add the source for two way binding
                var converter = binder.converter;
                if (converter.convertBack)
                    this._binders.add(binder);
                //Initialize the target
                if (binder.init)
                    binder.init(this._target, binder.source);
                //The inverse binder uses the target as the source, and inverts the converter
                var inverseBinder = {
                    source: this._target,
                    converter: {
                        convert: converter.convertBack,
                        convertBack: converter.convert
                    }
                };
                binder.source.bind(inverseBinder);
            };
            //#endregion bind
            //#region unbind
            Synchronizer.prototype.unbind = function (source) {
                var sourceHasTarget = source.hasTarget(this._target), sourceBinder = this._binders.query().singleOrDefault(function (b) { return b.source === source; });
                if (sourceBinder)
                    this._binders.remove(sourceBinder);
                if (!sourceHasTarget)
                    return false;
                source.unbind(this._target);
                return true;
            };
            //#endregion unbind
            //#region apply
            Synchronizer.prototype.apply = function (updates) {
                throw Assert.notImplemented("apply must be implemented by the parent ISynchronizable object rather than the child synchronizer.");
            };
            //#endregion apply
            //#region observe
            Synchronizer.prototype.track = function (registration) {
                this._onUpdateEvent.subscribe(function (host, info) {
                    registration(info, host);
                });
            };
            //#endregion observe
            //#region detach
            Synchronizer.prototype.detach = function () {
                var binders = this._binders, source = this._target;
                while (binders.length > 0) {
                    binders.pop().source.unbind(source);
                }
            };
            //#endregion detach
            //#endregion ISynchronizable
            //#region Methods
            //#region add
            Synchronizer.prototype.add = function (update) {
                Assert.isDefined(update, 'The update is not defined.');
                update.addSource(this._target);
                this._updates.add(update);
            };
            //#endregion add
            //#region filter
            Synchronizer.prototype.filter = function (updates) {
                var target = this._target;
                return updates.query().where(function (u) { return !u.hasSource(target); }).array();
            };
            //#endregion filter
            //#region sync
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
                    var sourceUpdates = updates.query()
                        .where(function (update) { return !update.hasSource(binder.source); })
                        .forEach(function (update) {
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
                //TODO: REMOVE
                //Assert.isTrue(groupUpdate.data.query().hasAny(d => d.updates[0].hasSource(this.target)));
                if (groupUpdate.data.query().hasAny())
                    this._executeUpdates(groupUpdate);
                this._executeOnUpdate(updates.slice());
            };
            //#endregion sync
            //#region syncStart
            Synchronizer.prototype.syncStart = function () {
                this._updateDepth++;
            };
            //#endregion syncStart
            //#endregion Methods
            //#region Utilities
            //#region createComplexBinding
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
            //#endregion createComplexBinding
            //#region executeUpdates
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
            //#endregion executeUpdates
            //#region executeOnUpdate
            Synchronizer.prototype._executeOnUpdate = function (updates) {
                this._onUpdateEvent.execute(updates);
            };
            return Synchronizer;
        })();
        Binding.Synchronizer = Synchronizer;
        //#endregion IGroupUpdate
        //#endregion Synchronizer
        //#region Property
        /**
         A property whose value can be bound to other objects.
         @typeparam [TValue] The type of the property value.
         @remarks
            Properties are not meant to be explicitly added to classes.
            They gain their utility by replacing simple properties on the object
            through the bind method.
         @seealso bind
        */
        var Property = (function () {
            //#endregion Properties
            //#region Constructor
            function Property(value) {
                if (value === void 0) { value = null; }
                this._synchronizer = new Synchronizer(this);
                this._value = value;
            }
            Object.defineProperty(Property.prototype, "value", {
                //#endregion Fields
                //#region Properties
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
            //#endregion Constructor
            //#region Base Class Overrides
            Property.prototype.toString = function () {
                return u.coalesce(this.value.toString(), '').toString();
            };
            //#endregion Base Class Overrides
            //#region ISynchronizable
            //#region hasTarget
            Property.prototype.hasTarget = function (target) {
                return this._synchronizer.hasTarget(target);
            };
            //#endregion hasTarget
            //#region hasSource
            Property.prototype.hasSource = function (source) {
                return this._synchronizer.hasSource(source);
            };
            //For overload resolution only.
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
            //#endregion bind
            //#region unbind
            Property.prototype.unbind = function (partner) {
                return this._synchronizer.unbind(partner);
            };
            //#endregion unbind
            //#region observe
            Property.prototype.track = function (registration) {
                this._synchronizer.track(registration);
            };
            //#endregion observe
            //#region apply
            Property.prototype.apply = function (updates) {
                var synchronizer = this._synchronizer;
                var update = synchronizer
                    .filter(updates).query()
                    .lastOrDefault();
                if (!u.isDefined(update) ||
                    u.areEqual(this._value, update.value))
                    return;
                this._value = update.value;
                synchronizer.add(update);
                synchronizer.sync();
            };
            //#endregion apply
            //#region detach
            Property.prototype.detach = function () {
                this._synchronizer.detach();
            };
            //#endregion detach
            //#endregion ISynchronizable
            //#region Utilities
            //#region createComplexBinder
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
            //#endregion createComplexBinder
            //#region sourceToBinder
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
        //#endregion Property
        //#region ConfirmationProperty
        /**
         A property whose value can be bound to other objects. Updates will not be applied until explicitly accepted or reflected.
         @typeparam [TValue] The type of the property value.
         @remarks
            This property is a solution to the problem that arises when an object is bound to a form, and the form is cancelled.
            An object composed of confirmation propreties can have its state accepted or rejected, much like the form.
         @seealso Classical.Binding.Property
        */
        var ConfirmationProperty = (function (_super) {
            __extends(ConfirmationProperty, _super);
            //#endregion Properties
            //#region Constructor
            function ConfirmationProperty(value) {
                if (value === void 0) { value = null; }
                _super.call(this, value);
                this._newValue = value;
            }
            Object.defineProperty(ConfirmationProperty.prototype, "value", {
                //#endregion Fields
                //#region Properties
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
                //This breaks our convention of having private members have an underscore.
                get: function () {
                    return this._synchronizer;
                },
                enumerable: true,
                configurable: true
            });
            //#endregion Constructor
            //#region ISynchronizable
            //#region apply
            ConfirmationProperty.prototype.apply = function (updates) {
                var synchronizer = this.synchronizer;
                var update = synchronizer
                    .filter(updates).query()
                    .lastOrDefault();
                if (!u.isDefined(update) ||
                    u.areEqual(this._getValue(), update.value))
                    return;
                this._newValue = update.value;
            };
            //#endregion apply
            //#endregion ISynchronizable
            //#region Methods
            //#region accept
            ConfirmationProperty.prototype.accept = function () {
                this._setValue(this._newValue);
                this.synchronizer.add(new PropertyUpdate(this._newValue));
                this.synchronizer.sync();
            };
            //#endregion accept
            //#region reject
            ConfirmationProperty.prototype.reject = function () {
                this._newValue = this.value;
            };
            //#endregion reject
            //#endregion Methods
            //#region Utilities
            ConfirmationProperty.prototype._getValue = function () {
                return this._value;
            };
            ConfirmationProperty.prototype._setValue = function (value) {
                this._value = value;
            };
            return ConfirmationProperty;
        })(Property);
        Binding.ConfirmationProperty = ConfirmationProperty;
        //#endregion IPropertyBinder
        //#region PropertyUpdate
        /**
         A specialized update used as a convenience when synchronizing two binding properties.
         The properties can have different value types.
         @typeparam [TValue] The type of the property value.
        */
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
        //#endregion PropertyUpdate
        //#region Functions
        /**
         @internal
        */
        function _getProperty(obj, propertyName) {
            var value = obj[propertyName];
            if (!value.getType().isAssignableTo(typeOf(Property)))
                _setProperty(obj, propertyName, value);
            return objectToPropertyMap.getValue(obj).getValue(propertyName);
        }
        Binding._getProperty = _getProperty;
        /**
         @internal
        */
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
        /**
         @internal
        */
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
        //#endregion Functions
        //#region Utilities
        var objectToPropertyMap = new cc.Dictionary(100);
    })(Binding = Classical.Binding || (Classical.Binding = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Binding.js.map