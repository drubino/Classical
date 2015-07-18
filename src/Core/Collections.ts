
//#region IEnumerable

/**
 A sequence of items that can be enumerated one at a time. 
 IEnumerables serve to allow common functionality to be defined for 
 collections like arrays, sets, dictionaries or more complex data 
 structures that have still represent some kind of collection.
 @typeparam [T] The type of item in the sequence.
 @remarks 
    An enumeration is not constrainted to be finite but 
    it is assumed that they are unless otherwise specified.
*/
interface IEnumerable<T> extends IObject {
    //Enumerates the elements of the sequence, calling the enumerator for each.
    getEnumerator(): IEnumerator<T>;

    //Enumerates the sequence
    forEach(operation: (item?: T) => void): void;

    //Returns an IEnumerable implementation that is queryable.
    query(): IQueryable<T>;

    //Returns a JavaScript array.
    array(): Array<T>;

    //Counts the number of elements in a sequence.
    count(): number;
}

//#endregion IEnumerable

//#region IEnumerator

/**
 Defines an object which performs the enumeration for a particular implementation of IEnumerable.
 @typeparam [T] The type of item which is enumerated.
 @seealso IEnumerable<T>
*/
interface IEnumerator<T> extends IObject {
    current: T;
    moveNext(): boolean;
}

//#endregion IEnumerator

//#region IAccessibleCollection

/**
 Defines an sequence with a getter.
 @typeparam [T] The type of item in the collection.
 @remarks 
    The get method cannot assumed to be fast though by convention is it implemented to be when possible. 
    It is safe to assume that retrieving an object using the get method requires a traversal of the collection.
*/
interface IAccessibleCollection<T> extends IEnumerable<T> {

    //Returns the element at the specified index.
    get(index: number): T;
}

//#endregion ICollection

//#region ICollection

/**
 Defines a collection that can be used for storing and retrieving objects.
 @typeparam [T] The type of item in the collection.
 @remarks Array<T> implemements ICollection.
 @seealso Array<T>
*/
interface ICollection<T> extends IAccessibleCollection<T> {

    //Adds an item to the collection.
    add(item: T): ICollection<T>;

    //Adds a sequence of items to the collection.
    addRange(items: IEnumerable<T>): ICollection<T>;

    //Removes all instances of the item from the collection.
    remove(item: T): ICollection<T>;

    //Removes the element at the specified index.
    removeAt(index: number): ICollection<T>;

    //Clears all elements from the collection.
    clear(): ICollection<T>;

    //Returns the element at the specified index.
    set(index: number, item: T): ICollection<T>;
}

//#endregion ICollection

//#region IQueryable

/**
 Defines a lazily executed query that performs a computation on a sequence of data.
 @typeparam [T] The type of item being queried.
 @remarks 
    Not all methods of IQueryable are lazily executed.
    In particular, methods which don't return IQueryables 
    are expected to have executed the query.
*/
interface IQueryable<T> extends IEnumerable<T> {

    //Iterates through the elements in the queried sequence.
    forEach(operation: (item: T) => void): IQueryable<T>;

    //Casts the elements of the query to a new type.
    cast<TElement>(): IQueryable<TElement>;

    //Returns a queryable containing the items that satisfy the predicate.
    where(predicate: (item: T) => boolean): IQueryable<T>;

    //Returns a queryable containing the items selected by the selector.
    select<TSelected>(selector: (item: T) => TSelected): IQueryable<TSelected>;

    //Returns a queryable containing the concatenation of all sequences selected by the selector.
    selectMany<TSelected>(selector: (item: T) => IEnumerable<TSelected>): IQueryable<TSelected>;

    //Returns a queryable ordered by the selected item.
    orderBy<TSelected>(selector: (item: T) => TSelected, comparison?: (first: TSelected, second: TSelected) => number): IQueryable<T>;

    //Returns a queryable ordered by the selected item in descending order.
    orderByDescending<TSelected>(selector: (item: T) => TSelected, comparison?: (first: TSelected, second: TSelected) => number): IQueryable<T>;

    //Returns the accumulation of the elements in the sequence, starting with a seed.
    aggregate<TAccumulate>(accumulator: (first: TAccumulate, second: T) => TAccumulate, seed?: TAccumulate): TAccumulate;

    //Sums the selected values from the sequence.
    //If the array is empty, undefined is returned.
    sum(selector?: (item: T) => number): number;

    //Returns the max of the values in the array.
    //If the array is empty, undefined is returned.
    max(selector?: (item: T) => number): number;

    //Sums the selected values from the sequence.
    //If the array is empty, undefined is returned.
    min(selector?: (item: T) => number): number;

    //Returns the first element satisfying the predicate.
    //Throws an exception if empty.
    first(predicate?: (item: T) => boolean): T;

    //Returns the first element satisfying the predicate, or null if empty.
    firstOrDefault(predicate?: (item: T) => boolean): T;

    //Returns the last element satisfying the predicate.
    //Throws an exception if empty.
    last(predicate?: (item: T) => boolean): T;

    //Returns the last element satisfying the predicate, or null if empty.
    lastOrDefault(predicate?: (item: T) => boolean): T;

    //Returns the only element satisfying the predicate.
    //Throws an exception if more then one satisfy the predicate.
    single(predicate?: (item: T) => boolean): T;

    //Returns the only element satisfying the predicate, or null if empty.
    //Throws an exception if more then one satisfy the predicate.
    singleOrDefault(predicate?: (item: T) => boolean): T;

    //Skips up to the specified count, and returns the remaining elements.
    skip(count: number): IQueryable<T>;

    //Takes up to the specified count, omitting the remaining elements.
    take(count: number): IQueryable<T>;

    //Returns the item at the specified index.
    at(index: number): T;

    //Concatenates this query with the other query.
    concat(other: IEnumerable<T>): IQueryable<T>;

    //Returns whether the queryable has any items in it.
    hasAny(predicate?: (item: T) => boolean): boolean;

    //Returns whether the queryable is empty.
    hasNone(predicate?: (item: T) => boolean): boolean;

    //Returns the distinct elements of a sequence.
    distinct(): IQueryable<T>;

    //Reverses the order of the sequence.
    reverse(): IQueryable<T>;

    //Returns a dictionary with the specified keys and values selected from the sequence.
    dictionary<TKey, TValue>(
        keySelector: (item: T) => TKey,
        valueSelector: (item: T) => TValue):
        Classical.Collections.Dictionary<TKey, TValue>;

    //Returns an executed version of the query which can be passed around without risk of redundant calculation.
    execute(): IQueryable<T>;

    //Return the result of executing the query, as a basi JavaScript array.
    result(): Array<T>;

    //#region IEnumerable Members
    //Remove when interface inheritance is bug free

    ////Enumerates the elements of the sequence, calling the enumerator for each.
    //getEnumerator(): IEnumerator<T>;

    ////Returns an IEnumerable implementation that is queryable.
    //query(): IQueryable<T>;

    ////Returns a JavaScript array.
    //array(): T[];

    ////Counts the number of elements in a sequence.
    //count(): number;

    //#endregion IEnumerable Members
}

//#endregion IQueryable

//#region Array

/**
 The core JavaScript array.
 @remarks 
    Array implements IObject, ICollection<T> and IEnumerable<T>.
    All Objects implement IHashable so arrays can be used as keys in Dictionaries.
 @seealso IObject, ICollection<T> and IEnumerable<T>, IHashable, Classical.Collections.Dictionary
*/
interface Array<T> extends ICollection<T>, IEnumerable<T> { }

//#endregion Array

/**
 The core set of collections defined in Classical.
*/
module Classical.Collections {

    //#region Imports

    import u = Classical.Utilities;
    import r = Classical.Reflection;
    import ce = Classical.Collections.Enumerable;

    //#endregion Imports

    //#region Native Extensions

    //#region Array

    var ArrayPrototype: any = Array.prototype;

    //Implements IEnumerable<T>.getEnumerator
    ArrayPrototype.getEnumerator = function () {
        return new _ArrayEnumerator<any>(<any[]>this);
    };

    //Implements IEnumerable<T>.array
    ArrayPrototype.array = function () {
        return this;
    };

    //Implements IEnumerable<T>.query
    ArrayPrototype.query = function () {
        return new Queryable<any>(<IEnumerable<any>>this);
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
        if (Utilities.isNullOrUndefined(type))
            return true;

        return this.getType().isAssignableTo(typeOf(type));
    }

    //Implements object.getType
    ArrayPrototype.getType = function () {
        if (this._type == null) {
            this._type = r.Type.getType((<any>this).constructor);
        }

        return this._type;
    }

    //Implements object.getHashCode
    ArrayPrototype.getHashCode = function () {
        if (this._hashCode == undefined)
            this._hashCode = Hash.forNumber(Math.random());

        return this._hashCode;
    }

    //#endregion Array

    //#region ArrayEnumerator

    class _ArrayEnumerator<T>
        implements IEnumerator<T> {

        _index = -1;
        _array: T[];

        constructor(array: T[]) {
            Assert.isDefined(array);
            this._array = array;
        }

        get current(): T {
            return this._array[this._index];
        }

        moveNext(): boolean {
            this._index++;
            return this._index < this._array.length;
        }
    }

    //#endregion ArrayEnumerator

    //#endregion Native Extensions

    //#region ImmutableCollection

    /**
     An accessible collection that is immutable.
     @typeparam [T] Type parameter of the class
    */
    export class ImmutableCollection<T> implements IAccessibleCollection<T> {

        //#region Fields

        private _get: (element: Element, index?: number) => any;

        //#endregion Fields

        //#region Constructor

        constructor(elements: IEnumerable<T>) {
            Assert.isDefined(elements, 'The elements of the ImmutableCollection are not defined.');

            var elementsCopy = copy(elements);
            this._get = (element, index?) => {
                switch (element) {
                    case Element.Copy: return <any>copy(elementsCopy);
                    case Element.Count: return <any>elementsCopy.length;
                    case Element.Item: return <any>elementsCopy[index];
                    default: return null;
                }
            }
		}

        //#endregion Constructor

        //#region IAccessible

        //Returns the element at the specified index.
        get(index: number): T {
            return this._get(Element.Item, index);
        }

        //#endregion IAccessible

        //#region IEnumerable

        //Enumerates the elements of the sequence, calling the enumerator for each.
        getEnumerator(): IEnumerator<T> {
            return this._get(Element.Copy).getEnumerator();
        }

        //Returns an IEnumerable implementation that is queryable.
        query(): IQueryable<T> {
            return this._get(Element.Copy).query();
        }

        //Enumerates the collection
        forEach(operation: (item: T) => void): void {
            ce.forEach(this, operation);
        }

        //Returns a JavaScript array.
        array(): Array<T> {
            return this._get(Element.Copy).array();
        }

        //Counts the number of elements in a sequence.
        count(): number {
            return this._get(Element.Count);
        }

        //#endregion IEnumerable
    }

    //#region Resources

    enum Element { Copy, Count, Item }

    function copy<T>(elements: IEnumerable<T>): Array<T> {
        var result: Array<T>;
        if (u.isArray(elements))
            result = (<Array<T>>elements).slice(0);
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
    export class Queryable<T>
        implements IQueryable<T> {

        //#region Fields

        //The wrapped IEnumerable.
        _enumerable: IEnumerable<T>;

        //#endregion Fields

        //#region Constructor

        constructor(enumerable: IEnumerable<T>) {
            Assert.isDefined(enumerable);
            this._enumerable = enumerable;
        }

        //#endregion Constructor

        //#region IObject Members

        toString() {
            return this.array().toString();
        }

        //#endregion IObject Members

        //#region IEnumerable Members

        getEnumerator(): IEnumerator<T> {
            return this._enumerable.getEnumerator();
        }

        //Returns an IEnumerable implementation that is queryable.
        query(): Queryable<T> {
            return this;
        }

        //Returns a JavaScript array.
        array(): T[]{
            var result = new Array<T>(),
                enumerator = this.getEnumerator();
            while (enumerator.moveNext()) {
                result.push(enumerator.current);
            }
            return result;
        }

        //Returns the number of elements in the query.
        count(): number {
            var result: number = 0,
                enumerator = this.getEnumerator();
            while (enumerator.moveNext()) {
                result++;
            }
            return result;
        }

        //#endregion IEnumerable Members

        //#region IQueryable Members

        //#region forEach

        forEach(operation: (item?: T) => void): void;
        forEach(operation: (item: T) => void): IQueryable<T>;
        forEach(operation: Function): any {
            var enumerator = this.getEnumerator(),
                current: T;

            while (enumerator.moveNext()) {
                var current = enumerator.current;
                operation.bind(current)(current);
            }

            return this;
        }

        //#endregion forEach

        //#region cast

        cast<TElement>(): IQueryable<TElement> {
            return <IQueryable<TElement>><any>this;
        }

        //#endregion cast

        //#region where

        //Returns a queryable containing the items that satisfy the predicate.
        where(predicate: (item: T) => boolean): IQueryable<T> {
            return new _WhereQueryable<T>(this, predicate);
        }

        //#endregion where

        //#region select

        //Returns a queryable containing the items selected by the selector.
        select<TSelected>(selector: (item: T) => TSelected): IQueryable<TSelected> {
            return <IQueryable<TSelected>><any>
                new _SelectQueryable<T, TSelected>(this, selector);
        }

        //#endregion select

        //#region selectMany

        //Returns a queryable containing the concatenation of all sequences selected by the selector.
        selectMany<TSelected>(selector: (item: T) => IEnumerable<TSelected>): IQueryable<TSelected> {
            return new _ConcatQueryable<TSelected>(
                this.select<IEnumerable<TSelected>>(selector));
        }

        //#endregion selectMany

        //#region orderBy

        //Returns a queryable ordered by the selected item.
        //This only works well for number and string.
        orderBy<TSelected>(selector: (item: T) => TSelected, comparison?: (first: TSelected, second: TSelected) => number): IQueryable<T> {
            Assert.isDefined(selector);
            var result = this.array();
            if (result.length == 0)
                return result.query();

            var comparer =
                <(first: T, second: T) => number>
                getComparer(result, selector, comparison, true);

            if (comparer)
                return result.sort(comparer).query();
            else
                return result.query();
        }

        //#endregion orderBy

        //#region orderByDescending

        //Returns a queryable ordered by the selected item in descending order.
        //This only works well for number and string.
        //TODO: Make this more efficient.
        orderByDescending<TSelected>(selector: (item: T) => TSelected, comparison?: (first: TSelected, second: TSelected) => number): IQueryable<T> {
            var ordered = this.orderBy(selector, comparison);
            return ordered.where(i => u.isDefined(i)).reverse()
                .concat(ordered.where(i => !u.isDefined(i)));
        }

        //#endregion orderByDescending

        //#region aggregate

        //Returns the accumulation of the elements in the sequence, starting with a seed.
        aggregate<TAccumulate>(accumulator: (first: TAccumulate, second: T) => TAccumulate, seed?: TAccumulate): TAccumulate {
            Assert.isDefined(accumulator, 'No accumulator was specified.');
            var result = seed,
                skipFirst = false;

            if (arguments.length == 1) {
                skipFirst = true;
                result = <TAccumulate><any>this.firstOrDefault();
                if (result === null && this.hasNone())
                    result = undefined;
            }

            var firstPass = true;
            this.forEach(item => {
                if (skipFirst && firstPass) {
                    firstPass = false;
                    return;
                }

                result = accumulator(result, item);
            });

            return result;
        }

        //#endregion aggregate

        //#region sum

        //Sums the selected values from the sequence.
        //If the array is empty, undefined is returned.
        sum(selector?: (item: T) => number): number {
            if (this.hasNone())
                return undefined;
            if (!selector)
                selector = item => <number><any>item;

            return this.aggregate<number>((first, second) => first + selector(second), 0);
        }

        //#endregion sum

        //#region max

        //Returns the max of the values in the array.
        //If the array is empty, undefined is returned.
        max(selector?: (item: T) => number): number {
            if (this.hasNone())
                return undefined;
            if (!selector)
                selector = item => <number><any>item;

            var result = this.aggregate<number>((first, second) => {
                var secondValue = selector(second);
                if (first > secondValue)
                    return first;
                return secondValue;
            }, -Infinity);

            if (u.isInfinity(result) &&
                this.hasNone(i => selector(i) === result)) {
                return undefined;
            }

            return result;
        }

        //#endregion max

        //#region min

        //Sums the selected values from the sequence.
        //If the array is empty, undefined is returned.
        min(selector?: (item: T) => number): number {
            if (this.hasNone())
                return undefined;
            if (!selector)
                selector = item => <number><any>item;

            var result = this.aggregate<number>((first, second) => {
                var secondValue = selector(second);
                if (first < secondValue)
                    return first;
                return secondValue;
            }, Infinity);

            if (u.isInfinity(result) &&
                this.hasNone(i => selector(i) === result)) {
                    return undefined;
            }

            return result;
        }

        //#endregion min

        //#region hasNone

        //Returns whether the queryable is empty.
        hasNone(predicate?: (item: T) => boolean): boolean {
            return !this.hasAny(predicate);
        }

        //#endregion hasNone

        //#region hasAny

        //Returns whether the queryable has any items in it.
        hasAny(predicate?: (item: T) => boolean): boolean {
            predicate = this.coalescePredicate(predicate);
            return new
                _WhereQueryable<T>(this._enumerable, predicate)
                .getEnumerator()
                .moveNext();
        }

        //#endregion hasAny

        //#region first

        //Returns the first element satisfying the predicate.
        //Throws an exception if empty.
        first(predicate?: (item: T) => boolean): T {
            predicate = this.coalescePredicate(predicate);
            var result = this.where(predicate),
                enumerator = result.getEnumerator();

            Assert.isTrue(enumerator.moveNext(),
                'The sequence does not have a first element.');

            return enumerator.current;
        }

        //#endregion first

        //#region firstOrDefault

        //Returns the first element satisfying the predicate, or null if empty.
        firstOrDefault(predicate?: (item: T) => boolean): T {
            predicate = this.coalescePredicate(predicate);
            var result = this.where(predicate),
                enumerator = result.getEnumerator();

            if (!enumerator.moveNext())
                return null;

            return enumerator.current;
        }

        //#endregion firstOrDefault

        //#region last

        //Returns the last element satisfying the predicate.
        //Throws an exception if empty.
        last(predicate?: (item: T) => boolean): T {
            return this.reverse().first(predicate);
        }

        //#endregion last

        //#region lastOrDefault

        //Returns the last element satisfying the predicate, or null if empty.
        lastOrDefault(predicate?: (item: T) => boolean): T {
            return this.reverse().firstOrDefault(predicate);
        }

        //#endregion lastOrDefault

        //#region single

        //Returns the only element satisfying the predicate.
        //Throws an exception if more then one satisfy the predicate.
        single(predicate?: (item: T) => boolean): T {
            predicate = this.coalescePredicate(predicate);
            var result = this.where(predicate),
                enumerator = result.getEnumerator();

            Assert.isTrue(enumerator.moveNext(),
                'The sequence does not have any matching elements.');

            var current = enumerator.current;
            Assert.isFalse(enumerator.moveNext(),
                'The sequence has more than one matching element.');

            return current;
        }

        //#endregion single

        //#region singleOrDefault

        //Returns the only element satisfying the predicate, or null if empty.
        //Throws an exception if more then one satisfy the predicate.
        singleOrDefault(predicate?: (item: T) => boolean): T {
            predicate = this.coalescePredicate(predicate);
            var result = this.where(predicate),
                enumerator = result.getEnumerator();

            if (!enumerator.moveNext())
                return null;

            var current = enumerator.current;
            Assert.isFalse(enumerator.moveNext(),
                'The sequence has more than one matching element.');

            return current;
        }

        //#endregion singleOrDefault

        //#region skip

        //Skips up to the specified count, and returns the remaining elements.
        skip(count: number): IQueryable<T> {
            return new _SkipQueryable<T>(this, count);
        }

        //#endregion skip

        //#region take

        //Takes up to the specified count, omitting the remaining elements.
        take(count: number): IQueryable<T> {
            return new _TakeQueryable<T>(this, count);
        }

        //#endregion take

        //#region at

        //Returns the item at the specified index.
        at(index: number): T {
            Assert.isTrue(u.isDefined(index) && index >= 0,
                'The index must be a positive integer.');

            var rest = this.skip(index);
            Assert.isTrue(rest.hasAny(),
                'The index is out of range.');

            return rest.first();
        }

        //#endregion at

        //#region concat

        //Concatenates this query with the other query.
        concat(other: IEnumerable<T>): IQueryable<T> {
            var enumerables = [this, other].query();
            return new _ConcatQueryable<T>(enumerables);
        }

        //#endregion take

        //#region distinct

        //Returns the distinct elements of a sequence.
        distinct(): IQueryable<T> {
            var map = new Dictionary<T, boolean>(),
                enumerator = this.getEnumerator();
            while (enumerator.moveNext()) {
                map.add(enumerator.current, true);
            }

            return map.keys.query();
        }

        //#endregion distinct

        //#region reverse

        //Reverses the order of the sequence.
        reverse(): IQueryable<T> {
            return this.array().reverse().query();
        }

        //#endregion reverse

        //#region dictionary

        //Returns a dictionary with the specified keys and values selected from the sequence.
        dictionary<TKey, TValue>(
            keySelector: (item: T) => TKey,
            valueSelector: (item: T) => TValue):
            Dictionary<TKey, TValue> {
            var array = this.array(),
                length = array.length,
                result = new Dictionary<TKey, TValue>(length),
                current: T,
                key: TKey,
                value: TValue;

            for (var i = 0; i < length; i++) {
                current = array[i];
                key = keySelector(current);
                value = valueSelector(current);
                result.add(key, value);
            }

            return result;
        }

        //#endregion dictionary

        //#region execute

        //Returns an executed version of the query which can be passed around without risk of redundant calculation.
        execute(): IQueryable<T> {
            return this.result().query();
        }

        //#endregion execute

        //#region result

        //Return the result of executing the query, as a basi JavaScript array.
        result(): Array<T> {
            return this.array();
        }

        //#endregion result

        //#endregion IQueryable Members

        //#region Utilities

        private coalescePredicate(predicate: (item: T) => boolean): (item: T) => boolean {
            return u.coalesce(predicate, (item: T) => true);
        }

        //#endregion Utilities
    }

    //#endregion IQueryable

    //#region QueryableEnumerator

    class _QueryableEnumerator<T, TSelected>
        implements IEnumerator<TSelected> {

        _enumerator: IEnumerator<T>;
        _iterator: (enumerator: IEnumerator<T>) => boolean;
        _selector: (item: T) => TSelected;

        constructor(
            enumerator: IEnumerator<T>,
            iterator: (enumerator: IEnumerator<T>) => boolean,
            selector: (item: T) => TSelected) {
            this._enumerator = enumerator;
            this._iterator = iterator;
            this._selector = selector;
        }

        get current(): TSelected {
            return this._selector(this._enumerator.current);
        }

        moveNext(): boolean {
            return this._iterator(this._enumerator);
        }
    }

    //#endregion QueryableEnumerator

    //#region WhereQueryable

    class _WhereQueryable<T>
        extends Queryable<T> {

        _predicate: (item: T) => boolean;
        
        constructor(enumerable: IEnumerable<T>, predicate: (item: T) => boolean) {
            super(enumerable);
            this._predicate = predicate;
        }

        getEnumerator(): IEnumerator<T> {
            var predicate = this._predicate,
                enumerator = this._enumerable.getEnumerator();
            
            return new _QueryableEnumerator<T, T>(
                enumerator,
                (enumerator) => {
                    do {
                        var hasNext = enumerator.moveNext();
                    } while (hasNext && !predicate(enumerator.current));
                    return hasNext;
                },
                item => item);
        }
    }

    //#endregion WhereQueryable
    
    //#region SelectQueryable

    class _SelectQueryable<T, TSelected>
        extends Queryable<TSelected> {

        _selector: (item: T) => TSelected;
        _selectedEnumerable: IEnumerable<T>;

        constructor(enumerable: IEnumerable<T>, selector: (item: T) => TSelected) {
            super(new Array<TSelected>());
            this._selector = selector;
            this._selectedEnumerable = enumerable;
        }

        getEnumerator(): IEnumerator<TSelected> {
            return new _QueryableEnumerator<T, TSelected>(
                this._selectedEnumerable.getEnumerator(),
                (enumerator) => enumerator.moveNext(),
                this._selector);
        }
    }

    //#endregion SelectQueryable

    //#region SkipQueryable

    class _SkipQueryable<T>
        extends Queryable<T> {

        _count: number;

        constructor(enumerable: IEnumerable<T>, count: number) {
            super(enumerable);
            Assert.isFalse(count < 0,
                'The number of elements to skip must be greater than zero.');

            this._count = count;
        }

        getEnumerator(): IEnumerator<T> {
            var count = this._count,
                currentCount = 0;
            return new _QueryableEnumerator<T, T>(
                this._enumerable.getEnumerator(),
                (enumerator) => {
                    do {
                        var hasNext = enumerator.moveNext();
                        currentCount++;

                    } while (hasNext && currentCount <= count);
                    return hasNext;
                },
                item => item);
        }
    }

    //#endregion SkipQueryable

    //#region TakeQueryable

    class _TakeQueryable<T>
        extends Queryable<T> {

        _count: number;

        constructor(enumerable: IEnumerable<T>, count: number) {
            super(enumerable);
            Assert.isFalse(count < 0,
                'The number of elements to take must be greater than zero.');

            this._count = count;
        }

        getEnumerator(): IEnumerator<T> {
            var count = this._count,
                currentCount = 0;
            return new _QueryableEnumerator<T, T>(
                this._enumerable.getEnumerator(),
                (enumerator) => {
                    do {
                        var hasNext = enumerator.moveNext();
                        currentCount++;

                    } while (hasNext && count < currentCount);
                    return hasNext;
                } ,
                item => item);
        }
    }

    //#endregion TakeQueryable

    //#region ConcatQueryable

    class _ConcatQueryable<T>
        extends Queryable<T> {

        _enumerables: IEnumerable<IEnumerable<T>>;

        constructor(enumerables: IEnumerable<IEnumerable<T>>) {
            super(this);
            this._enumerables = enumerables;
        }

        getEnumerator(): IEnumerator<T> {
            var enumerators =
                this._enumerables.query()
                .where(e => u.isDefined(e))
                .select(e => e.getEnumerator());

            return new _ConcatQueryableEnumerator<T>(
                <IQueryable<IEnumerator<T>>><any>
                enumerators);
        }
    }

    //#endregion ConcatQueryable

    //#region ConcatQueryableEnumerator

    class _ConcatQueryableEnumerator<T>
        implements IEnumerator<T> {

        _enumerator: IEnumerator<T>;
        _outerEnumerator: IEnumerator<IEnumerator<T>>;

        constructor(enumerators: IQueryable<IEnumerator<T>>) {
            this._outerEnumerator = enumerators.getEnumerator();
            if (this._outerEnumerator.moveNext())
                this._enumerator = this._outerEnumerator.current;
        }

        get current(): T {
            return this._enumerator.current;
        }

        moveNext(): boolean {
            var outerEnumerator = this._outerEnumerator,
                enumerator = this._enumerator;

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
        }
    }

    //#endregion ConcatQueryableEnumerator

    //#region Enumerable

    /**
     A collection of utilities for working with objects that implement IEnumerable<T>
     @seealso IEnumerable<T>
    */
    export module Enumerable {

        //#region empty

        export function empty<T>(): IEnumerable<T> {
            return [];
        }

        //#endregion empty

        //#region range

        //Returns numbers from 0, incremented by 1 or -1, to the end number.
        export function range(end: number): IEnumerable<number>;

        //Returns numbers from the start number, incremented by 1 or -1, to the end number.
        export function range(start: number, end: number): IEnumerable<number>;

        //Returns numbers from the start number, incrememted by the increment number, to the end number.
        export function range(start: number, increment: number, end: number): IEnumerable<number>;

        //Returns numbers from the start number, incrememted by the increment number, to the end number.
        export function range(start: number, increment?: number, end?: number): IEnumerable<number> {
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
                return <IEnumerable<number>><any>[start];

            Assert.isFalse(increment == 0,
                'The increment cannot be equal to zero.');
            Assert.isFalse(start < end && increment < 0,
                'The increment must be positive for increasing ranges.');
            Assert.isFalse(end < start && increment > 0,
                'The increment must be negative for decreasing ranges.');

            var result: number[] = [],
                current = start,
                adjustmentFactor = start < end ? 1 : -1,
                adjustedEnd = end * adjustmentFactor;

            while (current * adjustmentFactor <= adjustedEnd) {
                result.push(current);
                current += increment;
            }

            return result;
        }

        //#endregion range

        //#region forEach

        export function forEach<T>(items: IEnumerable<T>, operation: (item?: T) => void) {
            var enumerator = items.getEnumerator(),
                current: T;

            while (enumerator.moveNext()) {
                var current = enumerator.current;
                operation.bind(current)(current);
            }
        }

        //#endregion forEach
    }

//#endregion Enumerable

    //#region Utilities

    function getComparer(array: Array<any>, selector: Function, comparison: Function, ascending: boolean): Function {
        if (!selector)
            selector = item => item;

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
                comparison = <any>compareNumbers;
            else if (u.isString(firstElement))
                comparison = <any>compareStrings;
            else if (firstElement instanceof Date)
                comparison = <any>compareDates;
            else if (u.isBoolean(firstElement))
                comparison = <any>compareBooleans;
            else
                Assert.isInvalid('The sequence cannot be ordered without a comparison.');
        }

        if (ascending) {
            return (first, second) => {
                return comparison(selector(first), selector(second));
            };
        }

        return (first, second) => {
            return -comparison(selector(first), selector(second));
        };
    }

    function compareNumbers(first: number, second: number): number {
        var value = compareUndefined(first, second);
        if (u.isDefined(value))
            return value;

        return first - second;
    }

    function compareStrings(first: string, second: string): number {
        var value = compareUndefined(first, second);
        if (u.isDefined(value))
            return value;

        if (first < second)
            return -1;
        if (first > second)
            return 1;
        return 0;
    }

    function compareBooleans(first: string, second: string): number {
        var value = compareUndefined(first, second);
        if (u.isDefined(value))
            return value;

        if (first < second)
            return -1;
        if (first > second)
            return 1;
        return 0;
    }

    function compareDates(first: Date, second: Date): number {
        var value = compareUndefined(first, second);
        if (u.isDefined(value))
            return value;

        return <any>first - <any>second;
    }

    function compareUndefined(first: any, second: any): number {
        var firstIsDefined = u.isDefined(first);
        var secondIsDefined = u.isDefined(second)
        if (!firstIsDefined && !secondIsDefined)
            return 0;
        if (!secondIsDefined)
            return -Infinity;
        if (!firstIsDefined)
            return Infinity;

        return null;
    }

    //#endregion Utilities
}