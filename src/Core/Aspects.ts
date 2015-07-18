/// <reference path="reflection.ts" />

module Classical.Aspects {

    //#region Aspect

    export class Aspect {
    }

    //#endregion Aspect

    //#region Property Aspects

    //#region PropertyAspect

    export class PropertyAspect extends Aspect {

        //#region Methods

        //#region ApplyAspect

        public ApplyAspect(property: Reflection.Property): void {
            throw Assert.notImplemented();
        }

        //#endregion ApplyAspect

        //#endregion Methods

        //#region Utilities

        //#region IsFirstAspect

        protected IsFirstAspect(property: Reflection.Property): boolean {
            return this === (<any>property)._propertyAspects[0];
        }

        //#endregion IsFirstAspect

        //#endregion Utilities

        //#region Static Members

        //#region Methods

        //#region onGetValue

        static onGetValue(property: Reflection.Property, additionalFunc: (p: Reflection.Property) => void): OnGetValueAspect {
            Assert.isDefined(property);
            Assert.isDefined(additionalFunc);

            if (!property.canRead)
                return null;

            var onGetValueAspect = new OnGetValueAspect(additionalFunc);
            PropertyAspect.AddAspectToProperty(property, onGetValueAspect);
            PropertyAspect.ApplyAllAspects(property);

            return onGetValueAspect;
        }

        //#endregion onGetValue

        //#region onSetValue

        static onSetValue(property: Reflection.Property, additionalFunc: (p: Reflection.Property, value: any) => void): OnSetValueAspect {
            Assert.isDefined(property);
            Assert.isDefined(additionalFunc);

            if (!property.canWrite)
                return null;

            var onSetValueAspect = new OnSetValueAspect(additionalFunc);
            PropertyAspect.AddAspectToProperty(property, onSetValueAspect);
            PropertyAspect.ApplyAllAspects(property);

            return onSetValueAspect;
        }

        //#endregion onSetValue

        //#region removeAspect

        static removeAspect(property: Classical.Reflection.Property, propertyAspect: PropertyAspect): boolean {
            var removedAspect = false;
            var methodAspects = <Array<PropertyAspect>>(<any>property)._propertyAspects;

            for (var i = 0; i < (<any>property)._propertyAspects.length; i++) {
                var aspect = <PropertyAspect>(<any>property)._propertyAspects[i];
                if (propertyAspect === aspect) {
                    (<any>property)._propertyAspects.removeAt(i);
                    removedAspect = true;
                }
            }

            if (removedAspect)
                PropertyAspect.ApplyAllAspects(property);

            return removedAspect;
        }

        //#endregion removeAspect

        //#region removeAllAspects

        public static removeAllAspects(property: Reflection.Property): void {
            Assert.isDefined(property);

            (<any>property)._propertyAspects.length = 0;
            PropertyAspect.ApplyAllAspects(property);
        }

        //#endregion removeAllAspects

        //#endregion Methods

        //#region Utilities

        //#region AddAspectToProperty

        private static AddAspectToProperty(property: Reflection.Property, propertyAspect: PropertyAspect): void {
            (<any>property)._propertyAspects.add(propertyAspect);
        }

        //#endregion AddAspectToProperty

        //#region ApplyAllAspects

        private static ApplyAllAspects(property: Reflection.Property): void {
            if ((<any>property)._propertyAspects.length === 0) {
                var initialPropertyDescriptor = (<any>property)._initialPropertyDescriptor;

                if (property.isStatic)
                    Object.defineProperty(property.declaringType.constructorFunction, property.name, initialPropertyDescriptor);
                else
                    Object.defineProperty(property.declaringType.prototype, property.name, initialPropertyDescriptor);

                (<any>property)._propertyDescriptor = PropertyAspect.getNewDescriptor(initialPropertyDescriptor);
            }

            for (var i = 0; i < (<any>property)._propertyAspects.length; i++) {
                // This needs to happen for the case when a property has a mix of OnGetValue and OnSetValue Aspects. 
                // The way this gets done is when applying all aspects, the underlying property descriptor will have the old version of the get/set depending on which is added second.
                if (i === 0) {
                    var initialPropertyDescriptor = (<any>property)._initialPropertyDescriptor;
                    (<any>property)._propertyDescriptor = PropertyAspect.getNewDescriptor(initialPropertyDescriptor);
                }

                var aspect = <PropertyAspect>(<any>property)._propertyAspects[i];
                aspect.ApplyAspect(property);
            }
        }

        //#endregion ApplyAllAspects

        //#region getNewDescriptor

        private static getNewDescriptor(descriptor: PropertyDescriptor): PropertyDescriptor {
            if (!descriptor)
                return descriptor;

            // Need this method because we can't keep a reference to the actual PropertyDescriptor if we want to update it with Aspects.
            if (descriptor.get || descriptor.set)
                return { configurable: descriptor.configurable, enumerable: descriptor.enumerable, get: descriptor.get, set: descriptor.set };
            else
                return { configurable: descriptor.configurable, enumerable: descriptor.enumerable, writable: descriptor.writable, value: descriptor.value };
        }

        //#endregion getNewDescriptor

        //#endregion Utilities

        //#endregion Static Members
    }

    //#endregion PropertyAspect

    //#region OnGetValueAspect

    export class OnGetValueAspect extends PropertyAspect {

        //#region Fields

        private _onGetValueFunction: (p: Reflection.Property) => void;

        //#endregion Fields

        //#region Constructors

        constructor(onEntryFunction: (p: Reflection.Property) => void) {
            super();

            Assert.isDefined(onEntryFunction);
            this._onGetValueFunction = onEntryFunction;
        }

        //#endregion Constructors

        //#region Methods

        //#region ApplyAspect

        public ApplyAspect(property: Reflection.Property): void {
            var propertyDescriptor = this.IsFirstAspect(property) ?
                <PropertyDescriptor>(<any>property)._initialPropertyDescriptor :
                <PropertyDescriptor>(<any>property)._propertyDescriptor;

            var originalGetFunction = propertyDescriptor.get;
            var additionalFunc = this._onGetValueFunction;
            var newFunction = function () {
                additionalFunc.apply(this, [property]);
                return originalGetFunction.apply(this, arguments);
            };
            propertyDescriptor = <PropertyDescriptor>(<any>property)._propertyDescriptor;
            propertyDescriptor.get = newFunction;

            if(property.isStatic)
                Object.defineProperty(property.declaringType.constructorFunction, property.name, propertyDescriptor);
            else
                Object.defineProperty(property.declaringType.prototype, property.name, propertyDescriptor);
        }

        //#endregion ApplyAspect

        //#endregion Methods
    }

    //#endregion OnGetValueAspect
    
    export class OnSetValueAspect extends PropertyAspect {

        //#region Fields

        private _onSetValueFunction: (p: Reflection.Property, value: any) => void;

        //#endregion Fields

        //#region Constructors

        constructor(onSetValueFunction: (p: Reflection.Property, value: any) => void) {
            super();

            Assert.isDefined(onSetValueFunction);
            this._onSetValueFunction = onSetValueFunction;
        }

        //#endregion Constructors

        //#region Methods

        //#region ApplyAspect

        public ApplyAspect(property: Reflection.Property): void {
            var propertyDescriptor = this.IsFirstAspect(property) ?
                <PropertyDescriptor>(<any>property)._initialPropertyDescriptor :
                <PropertyDescriptor>(<any>property)._propertyDescriptor;

            var originalSetFunction = propertyDescriptor.set;
            var additionalFunc = this._onSetValueFunction;
            var newFunction = function () {
                var setValue = arguments[0];

                additionalFunc.apply(this, [property, setValue]);
                originalSetFunction.apply(this, arguments);
            }
            propertyDescriptor = <PropertyDescriptor>(<any>property)._propertyDescriptor;
            propertyDescriptor.set = newFunction;

            if (property.isStatic)
                Object.defineProperty(property.declaringType.constructorFunction, property.name, propertyDescriptor);
            else
                Object.defineProperty(property.declaringType.prototype, property.name, propertyDescriptor);
        }

        //#endregion ApplyAspect

        //#endregion Methods
    }

    //#endregion Property Aspects

    //#region Method Aspects

    //#region MethodAspect

    export class MethodAspect extends Aspect {

        //#region Methods

        //#region ApplyAspect

        public ApplyAspect(method: Reflection.Method): void {
            throw Assert.notImplemented();
        }

        //#endregion ApplyAspect

        //#endregion Methods

        //#region Utilities

        //#region IsFirstAspect

        protected IsFirstAspect(method: Reflection.Method): boolean {
            return this === (<any>method)._methodAspects[0];
        }

        //#endregion IsFirstAspect

        //#endregion Utilities

        //#region Static Members

        //#region Methods

        //#region onEntry

        static onEntry(method: Classical.Reflection.Method, additionalFunc: (m: Reflection.Method) => void): MethodAspect {
            Assert.isDefined(method);
            Assert.isDefined(additionalFunc);

            var onEntryAspect = new OnEntryAspect(additionalFunc);
            MethodAspect.AddAspectToMethod(method, onEntryAspect);
            MethodAspect.ApplyAllAspects(method);

            return onEntryAspect;
        }

        //#endregion onEntry

        //#region onExit

        static onExit(method: Classical.Reflection.Method, additionalFunc: (m: Reflection.Method, returnValue: any) => void): MethodAspect {
            Assert.isDefined(method);
            Assert.isDefined(additionalFunc);

            var onExitAspect = new OnExitAspect(additionalFunc);
            MethodAspect.AddAspectToMethod(method, onExitAspect);
            MethodAspect.ApplyAllAspects(method);

            return onExitAspect;
        }

        //#endregion onExit

        //#region onException

        static onException(method: Classical.Reflection.Method, additionalFunc: (m: Reflection.Method, e: any) => void, reThrowException = true): MethodAspect {
            Assert.isDefined(method);
            Assert.isDefined(additionalFunc);

            var onExceptionAspect = new OnExceptionAspect(additionalFunc, reThrowException);
            MethodAspect.AddAspectToMethod(method, onExceptionAspect);

            MethodAspect.ApplyAllAspects(method);

            return onExceptionAspect;
        }

        //#endregion onException

        //#region removeAspect

        static removeAspect(method: Classical.Reflection.Method, methodAspect: MethodAspect): boolean {
            var removedAspect = false;
            var methodAspects = <Array<MethodAspect>>(<any>method)._methodAspects;

            for (var i = 0; i < (<any>method)._methodAspects.length; i++) {
                var aspect = <MethodAspect>(<any>method)._methodAspects[i];
                if (methodAspect === aspect) {
                    (<any>method)._methodAspects.removeAt(i);
                    removedAspect = true;
                }
            }

            if (removedAspect)
                MethodAspect.ApplyAllAspects(method);

            return removedAspect;
        }

        //#endregion removeAspect

        //#region removeAllAspects

        public static removeAllAspects(method: Reflection.Method): void {
            Assert.isDefined(method);

            (<any>method)._methodAspects.length = 0;
            MethodAspect.ApplyAllAspects(method);
        }

        //#endregion removeAllAspects

        //#endregion Methods

        //#region Utilities

        //#region AddAspectToMethod

        private static AddAspectToMethod(method: Reflection.Method, methodAspect: MethodAspect): void {
            (<any>method)._methodAspects.add(methodAspect);
        }

        //#endregion AddAspectToMethod

        //#region ApplyAllAspects

        private static ApplyAllAspects(method: Reflection.Method): void {
            if ((<any>method)._methodAspects.length === 0) {
                var initialFunction = (<any>method)._initialFunction;

                if(method.isStatic)
                    method.declaringType.constructorFunction[method.name] = initialFunction;
                else
                    method.declaringType.prototype[method.name] = initialFunction;

                (<any>method)._underlyingFunction = initialFunction;
            }

            for (var i = 0; i < (<any>method)._methodAspects.length; i++) {
                var aspect = <MethodAspect>(<any>method)._methodAspects[i];
                aspect.ApplyAspect(method);
            }
        }

        //#endregion ApplyAllAspects

        //#endregion Utilities

        //#endregion Static Members
    }

    //#endregion MethodAspect

    //#region OnEntryAspect

    class OnEntryAspect extends MethodAspect {
        
        //#region Fields

        private _onEntryFunction: (m: Reflection.Method) => void;

        //#endregion Fields

        //#region Constructors

        constructor(onEntryFunction: (m: Reflection.Method) => void) {
            super();

            Assert.isDefined(onEntryFunction);
            this._onEntryFunction = onEntryFunction;
        }

        //#endregion Constructors

        //#region Methods

        //#region ApplyAspect

        public ApplyAspect(method: Reflection.Method): void {
            var originalFunc = this.IsFirstAspect(method) ?
                <IFunction>(<any>method)._initialFunction :
                method.functionValue;
            var additionalFunc = this._onEntryFunction;
            var newFunction = function () {
                additionalFunc.apply(this, [method]);
                return originalFunc.apply(this, arguments);
            };
            
            if(method.isStatic)
                method.declaringType.constructorFunction[method.name] = newFunction;
            else
                method.declaringType.prototype[method.name] = newFunction;

            (<any>method)._underlyingFunction = newFunction;
        }

        //#endregion ApplyAspect

        //#endregion Methods
    }

    //#endregion OnEntryAspect

    //#region OnExitAspect

    class OnExitAspect extends MethodAspect {
        
        //#region Fields

        private _onExitFunction: (m: Reflection.Method, returnValue: any) => void;

        //#endregion Fields

        //#region Constructors

        constructor(onExitFunction: (m: Reflection.Method, returnValue: any) => void) {
            super();

            Assert.isDefined(onExitFunction);
            this._onExitFunction = onExitFunction;
        }

        //#endregion Constructors

        //#region Methods

        //#region ApplyAspect

        public ApplyAspect(method: Reflection.Method): void {
            var originalFunc = this.IsFirstAspect(method) ?
                <IFunction>(<any>method)._initialFunction :
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

            (<any>method)._underlyingFunction = newFunction;
        }

        //#endregion ApplyAspect

        //#endregion Methods
    }

    //#endregion OnExitAspect

    //#region OnExceptionAspect

    class OnExceptionAspect extends MethodAspect {
        
        //#region Fields

        private _onExceptionFunction: (m: Reflection.Method, returnValue: any) => void;
        private _reThrowException: boolean;

        //#endregion Fields

        //#region Constructors

        constructor(onExceptionFunction: (m: Reflection.Method, returnValue: any) => void, reThrowException: boolean) {
            super();

            Assert.isDefined(onExceptionFunction);
            this._onExceptionFunction = onExceptionFunction;
            this._reThrowException = reThrowException;
        }

        //#endregion Constructors

        //#region Methods

        //#region ApplyAspect

        public ApplyAspect(method: Reflection.Method): void {
            var originalFunc = this.IsFirstAspect(method) ?
                <IFunction>(<any>method)._initialFunction :
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

            (<any>method)._underlyingFunction = newFunction;
        }

        //#endregion ApplyAspect

        //#endregion Methods
    }

    //#endregion OnExceptionAspect

    //#endregion Method Aspects
}