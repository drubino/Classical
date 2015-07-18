
/**
 A set of collections which can be bound to each other.
 @seealso Classical.Binding
*/
module Classical.Binding.Collections {

    //#region Imports

    import u = Classical.Utilities;
    import Assert = Classical.Assert;

    //#endregion Imports

    //#region Collection

    /**
     A collection whose items can be bound and synchronized with other objects. 
     @typeparam [T] The type of item in the collection.
    */
    export class Collection<T>
        implements ICollection<T>, ISynchronizable<CollectionUpdate<T>>  {

        //#region Fields

        private _items: Array<T>;
        private _synchronizer = new Synchronizer<CollectionUpdate<T>>(this);

        //#endregion Fields

        //#region Constructor

        constructor(items?: IEnumerable<T>) {
            if (!items)
                this._items = [];
            else
                this._items = items.array().slice(0);
        }

        //#endregion Constructor

        //#region IEnumerable Members

        //Enumerates the elements of the sequence, calling the enumerator for each.
        getEnumerator(): IEnumerator<T> {
            return this._items.getEnumerator();
        }

        //Enumerates the sequence
        forEach(operation: (item?: T) => void): void {
            this._items.forEach(operation);
        }

        //Returns an IEnumerable implementation that is queryable.
        query(): IQueryable<T> {
            return this._items.query();
        }

        //Returns a JavaScript array.
        array(): Array<T> {
            return this._items.array();
        }

        //Counts the number of elements in a sequence.
        count(): number {
            return this._items.count();
        }

        //#endregion IEnumerable Members

        //#region ICollection Members

        //Adds an item to the collection.
        add(item: T): ICollection<T> {
            var index = this._items.length;
            this._add(
                new CollectionUpdate<T>().create(
                    CollectionUpdateType.Add, null, item, index));

            return this;
        }

        private _add(update: CollectionUpdate<T>) {
            var s = this._synchronizer;
            s.add(update);
            this._items.add(update.newValue);
            s.sync();
        }

        //Adds a sequence of items to the collection.
        addRange(items: IEnumerable<T>): ICollection<T> {
            items = items || [];
            var s = this._synchronizer;

            s.syncStart();
            items.forEach(item => this.add(item));
            s.sync();

            return this;
        }

        //Removes all instances of the item from the collection.
        remove(item: T): ICollection<T> {
            this._remove(
                new CollectionUpdate<T>().create(
                    CollectionUpdateType.Remove, item, null, null));

            return this;
        }

        private _remove(update: CollectionUpdate<T>) {
            var s = this._synchronizer;
            this._items.remove(update.oldValue);
            s.add(update);
            s.sync();
        }

        //Removes the element at the specified index.
        removeAt(index: number): ICollection<T> {
            this._removeAt(
                new CollectionUpdate<T>().create(
                    CollectionUpdateType.RemoveAt, null, null, index));

            this._synchronizer.sync();
            return this;
        }

        //Removes the element at the specified index.
        private _removeAt(update: CollectionUpdate<T>) {
            var s = this._synchronizer;
            this._items.removeAt(update.index);
            s.add(update);
            s.sync();
        }

        //Clears all elements from the collection.
        clear(): ICollection<T> {
            var items = this._items,
                s = this._synchronizer;
            items.clear();

            s.syncStart();
            while (items.length > 0) {
                items.removeAt(items.length - 1);
            }
            s.sync();
            
            return this;
        }

        //Returns the element at the specified index.
        get(index: number): T {
            return this._items[index];
        }

        //Returns the element at the specified index.
        set(index: number, item: T): ICollection<T> {
            this._set(
                new CollectionUpdate<T>(this).create(
                CollectionUpdateType.Set, null, item, index));
            return this;
        }

        private _set(update: CollectionUpdate<T>) {
            this._items.set(update.index, update.newValue);
            var s = this._synchronizer;

            s.add(update);
            s.sync();
        }

        //#endregion ICollection Members

        //#region ISynchronizable Members

        hasTarget(target: ISynchronizable<CollectionUpdate<T>>): boolean {
            return this._synchronizer.hasTarget(target);
        }

        hasSource(source: ISynchronizable<any>): boolean {
            return this._synchronizer.hasSource(source);
        }

        bind(source: Collection<T>): void;
        bind(collectionBinder: ICollectionBinder<T>): void;
        bind(sources: Array<ISynchronizable<Update>>, selector: (sources: Array<any>) => any);
        bind(binder: IBinder<CollectionUpdate<T>>): void;
        bind(binder: IComplexBinder<CollectionUpdate<T>>): void;
        
        //For overload resolution only.
        bind(arg1: any, arg2?: any) {
            var currentBinder: IBinder<CollectionUpdate<T>>;

            if (u.isArray(arg1)) /*sources*/ {
                var complexBinder = this._createComplexBinder(arg1, arg2);
                return this._synchronizer.bind(complexBinder);
            } else if (arg1.sources) {
                return this._synchronizer.bind(arg1);
            } else if (arg1.getType && this.getType().isAssignableFrom(arg1.getType())) /*target*/ {
                var target: Collection<T> = arg1;
                currentBinder = this._sourceToBinder(target);
            } else if (arg1.collection) /*collectionBinder*/ {
                currentBinder = this._collectionBinderToBinder(arg1);
            } else  /*binder*/ {
                currentBinder = arg1;
            }

            this._synchronizer.bind(currentBinder);
        }

        unbind(source: ISynchronizable<any>): boolean {
            return this._synchronizer.unbind(source);
        }

        track(registration: (update: Array<CollectionUpdate<T>>, source: any) => void) {
            this._synchronizer.track(registration);
        }

        apply(updates: IEnumerable<CollectionUpdate<T>>): void {
            var synchronizer = this._synchronizer,
                updates = updates || [],
                updateQuery = synchronizer
                    .filter(updates).query()

            this._applyAdd(updateQuery.where(u => u.type === CollectionUpdateType.Add));
            this._applySet(updateQuery.where(u => u.type === CollectionUpdateType.Set));
            this._applyRemove(updateQuery.where(u => u.type === CollectionUpdateType.Remove));
            this._applyRemoveAt(updateQuery.where(u => u.type === CollectionUpdateType.RemoveAt));
            synchronizer.sync();
        }

        detach(): void {
            this._synchronizer.detach();
        }

        //#endregion ISynchronizable Members

        //#region Base Class Overrides

        toString() {
            return this._items.toString();
        }

        //#endregion Base Class Overrides

        //#region Utilities

        //#region createComplexBinder

        private _createComplexBinder(sources: Array<ISynchronizable<Update>>, selector: (sources: IEnumerable<ISynchronizable<Update>>) => T): IComplexBinder<CollectionUpdate<T>> {
            return {
                sources: sources,
                converter: {
                    convert: sources => <any>selector(sources),
                }
            };
        }

        //#endregion createComplexBinder

        //#region sourceToBinder

        private _sourceToBinder(source: Collection<T>): IBinder<CollectionUpdate<T>> {
            return {
                source: source,
                init: () => {
                    this.clear();
                    this._items = source._items.slice(0);
                    this._synchronizer.sync();
                }
            };
        }

        //#endregion sourceToBinder

        //#region collectionBinderToBinder

        private _collectionBinderToBinder(collectionBinder: ICollectionBinder<T>): IBinder<CollectionUpdate<T>> {
            var converter: IConverter<Update, CollectionUpdate<T>> = null,
                valueConverter = collectionBinder.converter;

            converter = {
                convert: sourceUpdate => {
                    return sourceUpdate.transferSourcesTo(
                        converter.convert(sourceUpdate));
                }
            };

            if (valueConverter.convertBack) {
                converter.convertBack = targetUpdate => {
                    return targetUpdate.transferSourcesTo(
                        converter.convertBack(targetUpdate))
                }
            }

            return {
                source: collectionBinder.collection,
                converter: converter,
                init: () => {
                    this.clear();
                    collectionBinder.collection.addRange(this);
                }
            };
        }

        //#endregion propertyBinderToBinder

        //#region applyAdd

        private _applyAdd(updates: IQueryable<CollectionUpdate<T>>) {
            updates.forEach(update => {
                this._add(update);
            });
        }

        //#endregion applyAdd

        //#region applySet

        private _applySet(updates: IQueryable<CollectionUpdate<T>>) {
            updates.forEach(update => {
                this._set(update);
            });
        }

        //#endregion applySet

        //#region applyRemove

        private _applyRemove(updates: IQueryable<CollectionUpdate<T>>) {
            updates.forEach(update => {
                this._remove(update);
            });
        }

        //#endregion applyRemove

        //#region applyRemoveAt

        private _applyRemoveAt(updates: IQueryable<CollectionUpdate<T>>) {
            updates.forEach(update => {
                this._removeAt(update);
            });
        }

        //#endregion applyRemoveAt

        //#endregion Utilities
    }

    //#endregion Collection

    //#region ICollectionBinder

    /**
     Defines the manner in which two binding collections are synchronized.
     @typeparam [T] The type of item in the target collection.
    */
    export interface ICollectionBinder<T> extends IObject {
        collection: Collection<any>;
        converter?: IConverter<any, T>;
    }

    //#endregion ICollectionBinder

    //#region CollectionUpdate

    /**
     A specialized update used as a convenience when synchronizing two binding collections. 
     @typeparam [TValue] The type of the property value.
    */
    export class CollectionUpdate<T> extends Update {

        //#region Fields

        type: CollectionUpdateType;
        oldValue: T = null;
        newValue: T = null;
        index: number = null;

        //#endregion Fields

        //#region Constructor

        constructor(sources: IEnumerable<any> = []) {
            super(sources);
        }

        //#endregion Constructor

        //#region Methods

        create(type: CollectionUpdateType, oldValue: T, newValue: T, index: number): CollectionUpdate<T> {
            Assert.isDefined(type, 'A CollectionUpdateType is required');
            this.type = type;
            this.oldValue = oldValue;
            this.newValue = newValue;
            this.index = index;
            return this;
        }

        //#endregion Methods
    }

    //#endregion CollectionUpdate

    //#region CollectionUpdateType

    export enum CollectionUpdateType { Add, Set, Remove, RemoveAt }

    //#endregion CollectionUpdateType
} 