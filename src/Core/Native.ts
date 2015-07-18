
//#region global

declare var global;
if (!global) global = window;

//#endregion global

/**
 The module that performs manipulation of native JavaScript objects. 
 @remarks This is the first module of Classical to be initialized.
 @seealso Object, String, Number, Boolean, Array
 @private
*/
module Classical._Native {

    //#region Variables

    var StringPrototype: any = String.prototype;
    var NumberPrototype: any = Number.prototype;
    var BooleanPrototype: any = Boolean.prototype;
    var ObjectPrototype: any = Object.prototype;
    var ArrayPrototype: any = Array.prototype;

    //#endregion Variables

    //#region Object

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
            Assert.isFalse(Object.isFrozen(this) && !this._hashCode,
                'The object has been frozen before its hash code was generated. Consider calling getHashCode prior to freezing.');

            if (this._hashCode === undefined)
                Object.defineProperty(this, '_hashCode', {
                    value: Hash.forNumber(Math.random()),
                    enumerable: false
                });

            return this._hashCode;
        },
        enumerable: false,
        configurable: true,
        writable: true
    });

    var freeze = Object.freeze;
    Object.freeze = function (o: any) {
        if (o && o.getHashCode && !Object.isFrozen(o))
            o.getHashCode();
        freeze(o);
    }

    var stringify = JSON.stringify;
    JSON.stringify = function (value: any) {
        var hashCode = null;
        if (value && value._hashCode) {
            hashCode = value._hashCode;
            delete value._hashCode;
        }

        var result = stringify(value);

        if (hashCode)
            value._hashCode = hashCode;

        return result;

    }

    Object.defineProperty(ObjectPrototype, 'is', {
        value: function (type: Function) {
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
            return typeOf((<any>this).constructor);
        },
        enumerable: false,
        configurable: true,
        writable: true
    });

    //#endregion Object

    //#region String

    Object.defineProperty(StringPrototype, 'equals', {
        value: function (other) {
            if (!Utilities.isString(other))
                return false;

            return this.toString() === other.toString();
        },
        enumerable: false,
        configurable: true,
        writable: true
    });

    Object.defineProperty(StringPrototype, 'getHashCode', {
        value: function () {
            return Hash.forString(this);
        },
        enumerable: false,
        configurable: true,
        writable: true
    });

    //#endregion String

    //#region Number

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
            return Hash.forNumber(this + 0);
        },
        enumerable: false,
        configurable: true,
        writable: true
    });

    //#endregion Number

    //#region Boolean

    Object.defineProperty(BooleanPrototype, 'equals', {
        value: function (other) {
            if (!Utilities.isBoolean(other))
                return false;

            return this == other;
        },
        enumerable: false,
        configurable: true,
        writable: true
    });

    Object.defineProperty(BooleanPrototype, 'getHashCode', {
        value: function () {
            return Hash.forBoolean(this);
        },
        enumerable: false,
        configurable: true,
        writable: true
    });

    //#endregion Boolean

    //#region Array

    //Adds the item to the end of the array.
    //The array is returned for chaining.
    ArrayPrototype.add = function (item) {
        this.push(item);
        return this;
    };

    //Adds the items to the end of the array.
    //The array is returned for chaining.
    ArrayPrototype.addRange = function (items: IEnumerable<any>) {
        Assert.isDefined(items);
        items.forEach(item => this.add(item));

        return this;
    };

    //Removes the first item in the array equal to the item.
    //The array is returned for chaining.
    ArrayPrototype.remove = function (item) {
        var u = Classical.Utilities,
            array: any[] = this;

        for (var i = 0, length = this.length; i < length; i++) {
            if (u.areEqual(item, array[i])) {
                array.splice(i, 1);
                i--;
                length--;
            }
        }

        return this;
    };

    //Removes the element at the specified index.
    //The array is returned for chaining.
    ArrayPrototype.removeAt = function (index: number) {
        Assert.isTrue(index >= 0 && index < this.length,
            'The index is out of range.');
        this.splice(index, 1);
        return this;
    }

    //Clears all elements from the collection.
    ArrayPrototype.clear = function () {
        this.length = 0;
        return this;
    }

    //Returns the element at the specified index.
    ArrayPrototype.get = function (index: number) {
        Assert.isTrue(index >= 0 && index < this.length,
            'The index is out of range.');
        return this[index];
    }

    //Returns the element at the specified index.
    ArrayPrototype.set = function (index: number, item: any) {
        Assert.isTrue(index >= 0,
            'The index must be greater than or equal to zero.');

        this[index] = item;
        return this;
    }

    //#endregion Array
}