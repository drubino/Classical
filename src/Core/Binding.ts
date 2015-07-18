
//#region bind

function bind<TModel, TProperty>(model: TModel, selector: (obj: TModel) => TProperty): Classical.Binding.IBinder<Classical.Binding.PropertyUpdate<TProperty>> {
    var propertyName = Classical.Expression.getProperty(selector);
    var property = Classical.Binding._getProperty(model, propertyName);
    return Classical.Binding._propertyBinderToBinder<TProperty>({
        property: property,
        converter: {
            convert: x => x,
            convertBack: x => x
        }
    });
}

//#endregion bind

/**
 The objects and interfaces used to create objects that can be bound to each other
 in the sense that when one updates so too does the other.
 @seealso Classical.Binding.Collections
*/
module Classical.Binding {

    //#region Imports

    import u = Classical.Utilities;
    import cc = Classical.Collections;
    import e = Classical.Events;
    import Assert = Classical.Assert;

    //#endregion Imports

    //#region ISynchronizable

    /**
     Defines an object that can be synchronized with or bound to another object. 
     @typeparam [TTargetUpdate] {Update} The type of update consumed by the synchronizable object.
     @remarks 
        Every object implementing ISynchronizable is meant to have a Synchronizer associated with it.
     @seealso Classical.Binding.Synchronizer
    */
    export interface ISynchronizable<TTargetUpdate extends Update> extends IObject {
        hasTarget(target: ISynchronizable<TTargetUpdate>): boolean;
        hasSource(source: ISynchronizable<any>): boolean;
        bind(binder: IBinder<TTargetUpdate>): void;
        bind(binder: IComplexBinder<TTargetUpdate>): void;
        unbind(source: ISynchronizable<any>): boolean;
        track(registration: (update: Array<TTargetUpdate>, source: any) => void);
        apply(updates: IEnumerable<TTargetUpdate>): void;
        detach(): void;

    }

    //#endregion ISynchronizable

    //#region Update

    /**
     An update that can be performed on an ISynchronizable object. 
     @remarks 
        Updates are converted between types to facilitate binding across types.
        Updates also store their sources so there is an audit trail for objects they have been applied to.
     @seealso Classical.Binding.Synchronizer.
    */
    export class Update {

        //#region Fields

        private _sources: Array<any> = [];

        //#endregion Fields

        //#region Constructor

        constructor(sources: IEnumerable<any>) {
            Assert.isDefined(sources, "The sources of the update are undefined.");
            if (sources)
                sources.query().forEach(s => this._sources.add(s));
        }

        //#endregion Constructor

        //#region Methods

        hasSource(source: any): boolean {
            var sources = this._sources;
            for (var i = 0; i < sources.length; i++) {
                if (source === sources[i])
                    return true;
            }

            return false;
        }

        addSource(source: any): void {
            Assert.isDefined(source, 'The source is not defined.');
            if (this._sources.query().hasNone(s => s === source))
                this._sources.add(source);
        }

        transferSourcesTo<TUpdate extends Update>(update: TUpdate): TUpdate {
            Assert.isDefined(update, 'The update is not defined.');
            var sources: IQueryable<any> = update._sources.query();
            (<Update>update)._sources.addRange(
                this._sources.query()
                    .where(s =>
                        !sources.hasAny(s2 => s2 == s)));

            return update;
        }

        //#endregion Methods
    }

    //#endregion Update

    //#region IBinder

    /**
     Defines the manner in which two objects are synchronized.
     @typeparam [TTargetUpdate] {Update} The type of update consumed by a synchronizable object.
    */
    export interface IBinder<TTargetUpdate extends Update> extends IObject {
        source: ISynchronizable<Update>;
        converter?: IConverter<any, TTargetUpdate>;
        init?: (target: ISynchronizable<TTargetUpdate>, source: ISynchronizable<Update>) => void;
    }

    //#endregion IBinder

    //#region IComplexBinder

    /**
     Defines the manner in which one object is synchronized with multiple sources.
     @typeparam [TTargetUpdate] {Update} The type of update consumed by a synchronizable object.
    */
    export interface IComplexBinder<TTargetUpdate extends Update> extends IObject {
        sources: Array<ISynchronizable<Update>>;
        converter: IAggregator<any, TTargetUpdate>;
    }

    //#endregion IComplexBinder

    //#region IConverter

    /**
     Defines an object that converts data between two types.
     @typeparam [TSourceValue] The type of value to convert from.
     @typeparam [TTargetValue] The type of value to convert to.
    */
    export interface IConverter<TSourceValue, TTargetValue> extends IObject {
        convert(source: TSourceValue): TTargetValue;
        convertBack? (target: TTargetValue): TSourceValue;
    }

    //#endregion IConverter

    //#region IComplexConverter

    /**
     Defines an object that aggregates a sequence into a single value.
     @typeparam [TSourceValue] The type of data to aggregate.
     @typeparam [TTargetValue] The type of data returned by the aggregation.
    */
    export interface IAggregator<TSourceValue, TTargetValue> extends IObject {
        convert(sources: IEnumerable<TSourceValue>): TTargetValue;
    }

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
    export class Synchronizer<TTargetUpdate extends Update>
        implements ISynchronizable<TTargetUpdate> {

        //#region Fields

        private _updateDepth: number = 0;
        private _updates: Array<TTargetUpdate> = [];
        private _target: ISynchronizable<TTargetUpdate>;
        private _binders: Array<IBinder<TTargetUpdate>> = [];
        private _onUpdateEvent: IEvent<any, Array<TTargetUpdate>>;

        //#endregion Fields

        //#region Properties

        //#region target

        get target(): ISynchronizable<TTargetUpdate> {
            return this._target;
        }

        //#endregion target

        //#region updates

        get updates(): Array<TTargetUpdate> {
            return this._updates.array();
        }

        //#endregion updates

        //#region updateDepth

        get updateDepth(): number {
            return this._updateDepth;
        }

        //#endregion updateDepth

        //#endregion Properties

        //#region Constructor

        constructor(target: ISynchronizable<TTargetUpdate>) {
            Assert.isDefined(target,
                'The target was not specified.');
            this._target = target;
            this._onUpdateEvent = new e.Event(target);
        }

        //#endregion Constructor

        //#region ISynchronizable

        //#region hasTarget

        hasTarget(target: ISynchronizable<TTargetUpdate>): boolean {
            return target && this._binders.query().hasAny(b => b.source === target);
        }

        //#endregion hasTarget

        //#region hasSource

        hasSource(source: ISynchronizable<any>): boolean {
            return source && source.hasTarget(this._target);
        }

        //#endregion hasSource

        //#region bind

        bind(binder: IBinder<TTargetUpdate>): void;
        bind(binder: IComplexBinder<TTargetUpdate>): void;

        //For overload resolution only
        bind(arg: any): void {
            Assert.isDefined(arg, 'The binder was not specified.');
            if (arg.sources)
                return this._createComplexBinding(arg);

            var binder: IBinder<TTargetUpdate> = arg;
            Assert.isTrue(u.isDefined(binder.source),
                'The binder source was not specified.');
            Assert.isFalse(this.target.equals(binder.source),
                'An object cannot be bound to itself');

            //Return if the target is already bound to the source
            if (this._binders.query().hasAny(b => b.source.equals(binder.source)))
                return;

            //If converters are unspecified, it is assumed that TSourceUpdate is the update type of the target
            if (!binder.converter) {
                binder.converter = {
                    convert: sourceUpdate => <TTargetUpdate>sourceUpdate,
                    convertBack: targetUpdate => targetUpdate
                }
            }

            //Add the source for two way binding
            var converter = binder.converter;
            if (converter.convertBack)
                this._binders.add(binder);

            //Initialize the target
            if (binder.init)
                binder.init(this._target, binder.source);

            //The inverse binder uses the target as the source, and inverts the converter
            var inverseBinder: IBinder<Update> = {
                source: this._target,
                converter: {
                    convert: converter.convertBack,
                    convertBack: converter.convert
                }
            };

            binder.source.bind(inverseBinder);
        }

        //#endregion bind

        //#region unbind

        unbind(source: ISynchronizable<any>): boolean {
            var sourceHasTarget = source.hasTarget(this._target),
                sourceBinder = this._binders.query().singleOrDefault(b => b.source === source);

            if (sourceBinder)
                this._binders.remove(sourceBinder);

            if (!sourceHasTarget)
                return false;

            source.unbind(this._target)
            return true;
        }

        //#endregion unbind

        //#region apply

        apply(updates: IEnumerable<TTargetUpdate>): void {
            throw Assert.notImplemented("apply must be implemented by the parent ISynchronizable object rather than the child synchronizer.");
        }

        //#endregion apply

        //#region observe

        track(registration: (update: Array<TTargetUpdate>, source: any) => void) {
            this._onUpdateEvent.subscribe((host, info) => {
                registration(info, host);
            });
        }

        //#endregion observe

        //#region detach

        detach() {
            var binders = this._binders,
                source = this._target;

            while (binders.length > 0) {
                binders.pop().source.unbind(source);
            }
        }

        //#endregion detach

        //#endregion ISynchronizable

        //#region Methods

        //#region add

        add(update: TTargetUpdate) {
            Assert.isDefined(update, 'The update is not defined.');
            update.addSource(this._target);
            this._updates.add(update);
        }

        //#endregion add

        //#region filter

        filter(updates: IEnumerable<TTargetUpdate>): Array<TTargetUpdate> {
            var target = this._target;
            return updates.query().where(u => !u.hasSource(target)).array();
        }

        //#endregion filter

        //#region sync

        sync(immediate: boolean = false): boolean {
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

            var groupUpdate: IGroupUpdate<TTargetUpdate> = {
                isExecuted: false,
                data: []
            };

            this._binders.query().forEach(binder => {

                var converter = binder.converter;
                if (!converter.convertBack)
                    return;

                var sourceUpdates = updates.query()
                    .where(update => !update.hasSource(binder.source))
                    .forEach(update => {
                        var sourceUpdate = converter.convertBack(update);
                        update.transferSourcesTo(sourceUpdate);
                        update.addSource(this.target);
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
        }

        //#endregion sync

        //#region syncStart

        syncStart() {
            this._updateDepth++;
        }

        //#endregion syncStart

        //#endregion Methods

        //#region Utilities

        //#region createComplexBinding

        private _createComplexBinding(binder: IComplexBinder<TTargetUpdate>) {
            Assert.isDefined(binder.sources, 'The sources of the ComplexBinder are not defined');
            var sources = binder.sources,
                sourcesQuery = sources.query(),
                bindingHandler = () => {
                    var update = binder.converter.convert(sources);
                    sourcesQuery.forEach(source => update.addSource(source));
                    return this.target.apply([update]);
                };

            sourcesQuery.forEach(source => source.track(bindingHandler));
            bindingHandler();
        }

        //#endregion createComplexBinding

        //#region executeUpdates

        private _executeUpdates(groupUpdate: IGroupUpdate<TTargetUpdate>) {
            if (groupUpdate.isExecuted)
                return;

            groupUpdate.data.query().forEach(sourceUpdate => {
                var sourceUpdateQuery = sourceUpdate.updates.query();
                if (sourceUpdateQuery.hasAny()) {
                    sourceUpdate.binder.source.apply(sourceUpdate.updates);
                }
            });

            groupUpdate.isExecuted = true;
        }

        //#endregion executeUpdates

        //#region executeOnUpdate

        private _executeOnUpdate(updates: Array<TTargetUpdate>) {
            this._onUpdateEvent.execute(updates);
        }

        //#endregion executeOnUpdate

        //#endregion Utilities
    }

    //#region IGroupUpdate

    interface IGroupUpdate<TTargetUpdate extends Update> {
        isExecuted: boolean;
        data: Array<{ binder: IBinder<TTargetUpdate>; updates: Array<Update>; }>;
    }

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
    export class Property<TValue>
        implements ISynchronizable<PropertyUpdate<TValue>> {

        //#region Fields

        updating: boolean;
        private _value: TValue;
        private _synchronizer = new Synchronizer<PropertyUpdate<TValue>>(this);

        //#endregion Fields

        //#region Properties

        get value(): TValue {
            return this._value;
        }

        set value(value: TValue) {
            this._value = value;
            this._synchronizer.add(new PropertyUpdate(value));
            this._synchronizer.sync();
        }

        //#endregion Properties

        //#region Constructor

        constructor(value: TValue = null) {
            this._value = value;
        }

        //#endregion Constructor

        //#region Base Class Overrides

        toString(): string {
            return u.coalesce(this.value.toString(), '').toString();
        }

        //#endregion Base Class Overrides

        //#region ISynchronizable

        //#region hasTarget

        hasTarget(target: ISynchronizable<PropertyUpdate<TValue>>): boolean {
            return this._synchronizer.hasTarget(target);
        }

        //#endregion hasTarget

        //#region hasSource

        hasSource(source: ISynchronizable<any>): boolean {
            return this._synchronizer.hasSource(source);
        }

        //#endregion hasSource

        //#region bind

        bind(source: Property<TValue>);
        bind(sources: Array<ISynchronizable<Update>>, selector: (sources: Array<any>) => TValue);
        bind(propertyBinder: IPropertyBinder<TValue>);
        bind(binder: IBinder<PropertyUpdate<TValue>>);
        bind(binder: IComplexBinder<PropertyUpdate<TValue>>): void;

        //For overload resolution only.
        bind(arg1: any, arg2?: any) {
            var currentBinder: IBinder<PropertyUpdate<TValue>>;

            if (u.isArray(arg1)) /*sources*/ {
                var complexBinder = this._createComplexBinder(arg1, arg2);
                return this._synchronizer.bind(complexBinder);
            } else if (arg1.getType && this.getType().isAssignableFrom(arg1.getType())) /*target*/ {
                var source: Property<TValue> = arg1;
                currentBinder = this._sourceToBinder(source);
            } else if (arg1.property) /*propertyBinder*/ {
                var propertyBinder: IPropertyBinder<TValue> = arg1;
                currentBinder = _propertyBinderToBinder<TValue>(arg1);
            } else  /*binder*/ {
                currentBinder = arg1;
            }

            this._synchronizer.bind(currentBinder);
        }

        //#endregion bind

        //#region unbind

        unbind(partner: ISynchronizable<any>): boolean {
            return this._synchronizer.unbind(partner);
        }

        //#endregion unbind

        //#region observe

        track(registration: (update: Array<PropertyUpdate<TValue>>, source: Property<TValue>) => void) {
            this._synchronizer.track(registration);
        }

        //#endregion observe

        //#region apply

        apply(updates: IEnumerable<PropertyUpdate<TValue>>) {
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
        }

        //#endregion apply

        //#region detach

        detach() {
            this._synchronizer.detach();
        }

        //#endregion detach

        //#endregion ISynchronizable

        //#region Utilities

        //#region createComplexBinder

        private _createComplexBinder(sources: Array<ISynchronizable<Update>>, selector: (sources: IEnumerable<ISynchronizable<Update>>) => TValue): IComplexBinder<PropertyUpdate<TValue>> {
            return {
                sources: sources,
                converter: {
                    convert: sources => {
                        var value = selector(sources);
                        return new PropertyUpdate(value);
                    }
                }
            };
        }

        //#endregion createComplexBinder

        //#region sourceToBinder

        private _sourceToBinder(source: Property<TValue>): IBinder<PropertyUpdate<TValue>> {
            return {
                source: source,
                init: () => {
                    this.value = source.value;
                }
            };
        }

        //#endregion sourceToBinder

        //#endregion Utilities
    }

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
    export class ConfirmationProperty<TValue>
        extends Property<TValue> {

        //#region Fields

        private _newValue: TValue;
        private hasAccepted: boolean;

        //#endregion Fields

        //#region Properties

        get value(): TValue {
            return this._getValue();
        }

        set value(value: TValue) {
            this._newValue = value;
        }

        get newValue() {
            return this._newValue;
        }

        //This breaks our convention of having private members have an underscore.
        private get synchronizer(): Synchronizer<PropertyUpdate<TValue>> {
            return (<any>this)._synchronizer;
        }

        //#endregion Properties

        //#region Constructor

        constructor(value: TValue = null) {
            super(value);
            this._newValue = value;
        }

        //#endregion Constructor

        //#region ISynchronizable

        //#region apply

        apply(updates: IEnumerable<PropertyUpdate<TValue>>) {
            var synchronizer = this.synchronizer;

            var update = synchronizer
                .filter(updates).query()
                .lastOrDefault();

            if (!u.isDefined(update) ||
                u.areEqual(this._getValue(), update.value))
                return;

            this._newValue = update.value;
        }

        //#endregion apply

        //#endregion ISynchronizable

        //#region Methods

        //#region accept

        accept() {
            this._setValue(this._newValue);
            this.synchronizer.add(new PropertyUpdate(this._newValue));
            this.synchronizer.sync();
        }

        //#endregion accept

        //#region reject

        reject() {
            this._newValue = this.value;
        }

        //#endregion reject

        //#endregion Methods

        //#region Utilities

        private _getValue(): TValue {
            return (<any>this)._value;
        }

        private _setValue(value: TValue) {
            (<any>this)._value = value;
        }

        //#endregion Utilities
    }

    //#endregion ConfirmationProperty

    //#region IPropertyBinder

    /**
     Defines the manner in which two binding properties are synchronized.
     @typeparam [TValue] The type of the target property value.
    */
    export interface IPropertyBinder<TValue> extends IObject {
        property: Property<any>;
        converter: IConverter<any, TValue>;
    }

    //#endregion IPropertyBinder

    //#region PropertyUpdate

    /**
     A specialized update used as a convenience when synchronizing two binding properties. 
     The properties can have different value types.
     @typeparam [TValue] The type of the property value.
    */
    export class PropertyUpdate<TValue> extends Update {
        value: TValue;
        constructor(value: TValue, sources: IEnumerable<any> = []) {
            super(sources);
            this.value = value;
            if (sources)
                sources.query().forEach(source => this.addSource(source));
        }
    }

    //#endregion PropertyUpdate

    //#region Functions

    /**
     @internal
    */
    export function _getProperty<T>(obj: any, propertyName: string): Property<T> {
        var value = obj[propertyName];
        if (!value.getType().isAssignableTo(typeOf(Property)))
            _setProperty(obj, propertyName, value);

        return objectToPropertyMap.getValue(obj).getValue(propertyName);
    }

    /**
     @internal
    */
    export function _setProperty<T>(obj: any, propertyName: string, value: T): void {
        if (!objectToPropertyMap.containsKey(obj))
            objectToPropertyMap.add(obj, new cc.Dictionary<string, Property<T>>());

        var propertyMap = objectToPropertyMap.getValue(obj);
        if (!propertyMap.containsKey(propertyName)) {
            var property = new Property<T>(value);
            propertyMap.add(propertyName, property);

            delete obj[propertyName];
            Object.defineProperty(obj, propertyName, {
                get: () => property.value,
                set: (value: T) => property.value = value,
                configurable: true,
                enumerable: true,
            });

            return;
        }

        propertyMap.getValue(propertyName).value = value;
    }

    /**
     @internal
    */
    export function _propertyBinderToBinder<TValue>(propertyBinder: IPropertyBinder<TValue>): IBinder<PropertyUpdate<TValue>> {
        var converter: IConverter<Update, PropertyUpdate<TValue>> = null,
            valueConverter = propertyBinder.converter;

        converter = {
            convert: sourceUpdate => {
                var value = valueConverter.convert(
                    (<any>sourceUpdate).value);
                return sourceUpdate.transferSourcesTo(
                    new PropertyUpdate(value));
            },
        };

        if (valueConverter.convertBack) {
            converter.convertBack = targetUpdate => {
                var value = valueConverter.convertBack(
                    targetUpdate.value);
                return targetUpdate.transferSourcesTo(
                    new PropertyUpdate(value));
            }
        }

        return {
            source: propertyBinder.property,
            converter: converter,
            init: (target, source) => {
                (<any>target).value = valueConverter.convert(
                    propertyBinder.property.value);
            }
        };
    }

    //#endregion Functions

    //#region Utilities

    var objectToPropertyMap = new cc.Dictionary<any, cc.Dictionary<string, Property<any>>>(100);

    //#endregion Utilities
} 