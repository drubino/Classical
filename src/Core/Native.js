//#region global
if (!global)
    global = window;
//#endregion global
/**
 The module that performs manipulation of native JavaScript objects.
 @remarks This is the first module of Classical to be initialized.
 @seealso Object, String, Number, Boolean, Array
 @private
*/
var Classical;
(function (Classical) {
    var _Native;
    (function (_Native) {
        //#region Variables
        var StringPrototype = String.prototype;
        var NumberPrototype = Number.prototype;
        var BooleanPrototype = Boolean.prototype;
        var ObjectPrototype = Object.prototype;
        var ArrayPrototype = Array.prototype;
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
        //#endregion Object
        //#region String
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
                return Classical.Hash.forNumber(this + 0);
            },
            enumerable: false,
            configurable: true,
            writable: true
        });
        //#endregion Number
        //#region Boolean
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
        ArrayPrototype.addRange = function (items) {
            var _this = this;
            Classical.Assert.isDefined(items);
            items.forEach(function (item) { return _this.add(item); });
            return this;
        };
        //Removes the first item in the array equal to the item.
        //The array is returned for chaining.
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
        //Removes the element at the specified index.
        //The array is returned for chaining.
        ArrayPrototype.removeAt = function (index) {
            Classical.Assert.isTrue(index >= 0 && index < this.length, 'The index is out of range.');
            this.splice(index, 1);
            return this;
        };
        //Clears all elements from the collection.
        ArrayPrototype.clear = function () {
            this.length = 0;
            return this;
        };
        //Returns the element at the specified index.
        ArrayPrototype.get = function (index) {
            Classical.Assert.isTrue(index >= 0 && index < this.length, 'The index is out of range.');
            return this[index];
        };
        //Returns the element at the specified index.
        ArrayPrototype.set = function (index, item) {
            Classical.Assert.isTrue(index >= 0, 'The index must be greater than or equal to zero.');
            this[index] = item;
            return this;
        };
    })(_Native = Classical._Native || (Classical._Native = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Native.js.map