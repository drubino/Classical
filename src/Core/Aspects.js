/// <reference path="reflection.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Classical;
(function (Classical) {
    var Aspects;
    (function (Aspects) {
        //#region Aspect
        var Aspect = (function () {
            function Aspect() {
            }
            return Aspect;
        })();
        Aspects.Aspect = Aspect;
        //#endregion Aspect
        //#region Property Aspects
        //#region PropertyAspect
        var PropertyAspect = (function (_super) {
            __extends(PropertyAspect, _super);
            function PropertyAspect() {
                _super.apply(this, arguments);
            }
            //#region Methods
            //#region ApplyAspect
            PropertyAspect.prototype.ApplyAspect = function (property) {
                throw Classical.Assert.notImplemented();
            };
            //#endregion ApplyAspect
            //#endregion Methods
            //#region Utilities
            //#region IsFirstAspect
            PropertyAspect.prototype.IsFirstAspect = function (property) {
                return this === property._propertyAspects[0];
            };
            //#endregion IsFirstAspect
            //#endregion Utilities
            //#region Static Members
            //#region Methods
            //#region onGetValue
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
            //#endregion onGetValue
            //#region onSetValue
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
            //#endregion onSetValue
            //#region removeAspect
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
            //#endregion removeAspect
            //#region removeAllAspects
            PropertyAspect.removeAllAspects = function (property) {
                Classical.Assert.isDefined(property);
                property._propertyAspects.length = 0;
                PropertyAspect.ApplyAllAspects(property);
            };
            //#endregion removeAllAspects
            //#endregion Methods
            //#region Utilities
            //#region AddAspectToProperty
            PropertyAspect.AddAspectToProperty = function (property, propertyAspect) {
                property._propertyAspects.add(propertyAspect);
            };
            //#endregion AddAspectToProperty
            //#region ApplyAllAspects
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
                    // This needs to happen for the case when a property has a mix of OnGetValue and OnSetValue Aspects. 
                    // The way this gets done is when applying all aspects, the underlying property descriptor will have the old version of the get/set depending on which is added second.
                    if (i === 0) {
                        var initialPropertyDescriptor = property._initialPropertyDescriptor;
                        property._propertyDescriptor = PropertyAspect.getNewDescriptor(initialPropertyDescriptor);
                    }
                    var aspect = property._propertyAspects[i];
                    aspect.ApplyAspect(property);
                }
            };
            //#endregion ApplyAllAspects
            //#region getNewDescriptor
            PropertyAspect.getNewDescriptor = function (descriptor) {
                if (!descriptor)
                    return descriptor;
                // Need this method because we can't keep a reference to the actual PropertyDescriptor if we want to update it with Aspects.
                if (descriptor.get || descriptor.set)
                    return { configurable: descriptor.configurable, enumerable: descriptor.enumerable, get: descriptor.get, set: descriptor.set };
                else
                    return { configurable: descriptor.configurable, enumerable: descriptor.enumerable, writable: descriptor.writable, value: descriptor.value };
            };
            return PropertyAspect;
        })(Aspect);
        Aspects.PropertyAspect = PropertyAspect;
        //#endregion PropertyAspect
        //#region OnGetValueAspect
        var OnGetValueAspect = (function (_super) {
            __extends(OnGetValueAspect, _super);
            //#endregion Fields
            //#region Constructors
            function OnGetValueAspect(onEntryFunction) {
                _super.call(this);
                Classical.Assert.isDefined(onEntryFunction);
                this._onGetValueFunction = onEntryFunction;
            }
            //#endregion Constructors
            //#region Methods
            //#region ApplyAspect
            OnGetValueAspect.prototype.ApplyAspect = function (property) {
                var propertyDescriptor = this.IsFirstAspect(property) ?
                    property._initialPropertyDescriptor :
                    property._propertyDescriptor;
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
        //#endregion OnGetValueAspect
        var OnSetValueAspect = (function (_super) {
            __extends(OnSetValueAspect, _super);
            //#endregion Fields
            //#region Constructors
            function OnSetValueAspect(onSetValueFunction) {
                _super.call(this);
                Classical.Assert.isDefined(onSetValueFunction);
                this._onSetValueFunction = onSetValueFunction;
            }
            //#endregion Constructors
            //#region Methods
            //#region ApplyAspect
            OnSetValueAspect.prototype.ApplyAspect = function (property) {
                var propertyDescriptor = this.IsFirstAspect(property) ?
                    property._initialPropertyDescriptor :
                    property._propertyDescriptor;
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
        //#endregion Property Aspects
        //#region Method Aspects
        //#region MethodAspect
        var MethodAspect = (function (_super) {
            __extends(MethodAspect, _super);
            function MethodAspect() {
                _super.apply(this, arguments);
            }
            //#region Methods
            //#region ApplyAspect
            MethodAspect.prototype.ApplyAspect = function (method) {
                throw Classical.Assert.notImplemented();
            };
            //#endregion ApplyAspect
            //#endregion Methods
            //#region Utilities
            //#region IsFirstAspect
            MethodAspect.prototype.IsFirstAspect = function (method) {
                return this === method._methodAspects[0];
            };
            //#endregion IsFirstAspect
            //#endregion Utilities
            //#region Static Members
            //#region Methods
            //#region onEntry
            MethodAspect.onEntry = function (method, additionalFunc) {
                Classical.Assert.isDefined(method);
                Classical.Assert.isDefined(additionalFunc);
                var onEntryAspect = new OnEntryAspect(additionalFunc);
                MethodAspect.AddAspectToMethod(method, onEntryAspect);
                MethodAspect.ApplyAllAspects(method);
                return onEntryAspect;
            };
            //#endregion onEntry
            //#region onExit
            MethodAspect.onExit = function (method, additionalFunc) {
                Classical.Assert.isDefined(method);
                Classical.Assert.isDefined(additionalFunc);
                var onExitAspect = new OnExitAspect(additionalFunc);
                MethodAspect.AddAspectToMethod(method, onExitAspect);
                MethodAspect.ApplyAllAspects(method);
                return onExitAspect;
            };
            //#endregion onExit
            //#region onException
            MethodAspect.onException = function (method, additionalFunc, reThrowException) {
                if (reThrowException === void 0) { reThrowException = true; }
                Classical.Assert.isDefined(method);
                Classical.Assert.isDefined(additionalFunc);
                var onExceptionAspect = new OnExceptionAspect(additionalFunc, reThrowException);
                MethodAspect.AddAspectToMethod(method, onExceptionAspect);
                MethodAspect.ApplyAllAspects(method);
                return onExceptionAspect;
            };
            //#endregion onException
            //#region removeAspect
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
            //#endregion removeAspect
            //#region removeAllAspects
            MethodAspect.removeAllAspects = function (method) {
                Classical.Assert.isDefined(method);
                method._methodAspects.length = 0;
                MethodAspect.ApplyAllAspects(method);
            };
            //#endregion removeAllAspects
            //#endregion Methods
            //#region Utilities
            //#region AddAspectToMethod
            MethodAspect.AddAspectToMethod = function (method, methodAspect) {
                method._methodAspects.add(methodAspect);
            };
            //#endregion AddAspectToMethod
            //#region ApplyAllAspects
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
        //#endregion MethodAspect
        //#region OnEntryAspect
        var OnEntryAspect = (function (_super) {
            __extends(OnEntryAspect, _super);
            //#endregion Fields
            //#region Constructors
            function OnEntryAspect(onEntryFunction) {
                _super.call(this);
                Classical.Assert.isDefined(onEntryFunction);
                this._onEntryFunction = onEntryFunction;
            }
            //#endregion Constructors
            //#region Methods
            //#region ApplyAspect
            OnEntryAspect.prototype.ApplyAspect = function (method) {
                var originalFunc = this.IsFirstAspect(method) ?
                    method._initialFunction :
                    method.functionValue;
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
        //#endregion OnEntryAspect
        //#region OnExitAspect
        var OnExitAspect = (function (_super) {
            __extends(OnExitAspect, _super);
            //#endregion Fields
            //#region Constructors
            function OnExitAspect(onExitFunction) {
                _super.call(this);
                Classical.Assert.isDefined(onExitFunction);
                this._onExitFunction = onExitFunction;
            }
            //#endregion Constructors
            //#region Methods
            //#region ApplyAspect
            OnExitAspect.prototype.ApplyAspect = function (method) {
                var originalFunc = this.IsFirstAspect(method) ?
                    method._initialFunction :
                    method.functionValue;
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
        //#endregion OnExitAspect
        //#region OnExceptionAspect
        var OnExceptionAspect = (function (_super) {
            __extends(OnExceptionAspect, _super);
            //#endregion Fields
            //#region Constructors
            function OnExceptionAspect(onExceptionFunction, reThrowException) {
                _super.call(this);
                Classical.Assert.isDefined(onExceptionFunction);
                this._onExceptionFunction = onExceptionFunction;
                this._reThrowException = reThrowException;
            }
            //#endregion Constructors
            //#region Methods
            //#region ApplyAspect
            OnExceptionAspect.prototype.ApplyAspect = function (method) {
                var originalFunc = this.IsFirstAspect(method) ?
                    method._initialFunction :
                    method.functionValue;
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
//# sourceMappingURL=Aspects.js.map