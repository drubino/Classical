var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Classical;
(function (Classical) {
    var Spec;
    (function (Spec) {
        //#endregion Imports
        describe('Classical', function () {
            //#region Object
            describe('Object', function () {
                //#region equals
                describe('equals', function () {
                    it('should describe an object as equal to itself', function () {
                        var instance = {};
                        expect(instance.equals(instance)).toEqual(true);
                    });
                    it('should describe two instances of the same type as different', function () {
                        var firstInstance = {}, secondInstance = {};
                        expect(firstInstance.equals(secondInstance)).toEqual(false);
                        expect(secondInstance.equals(firstInstance)).toEqual(false);
                    });
                    it('should describe two instances of different types as different', function () {
                        var firstInstance = {}, secondInstance = new DerivedType();
                        expect(firstInstance.equals(secondInstance)).toEqual(false);
                        expect(secondInstance.equals(firstInstance)).toEqual(false);
                    });
                    it('can be overridden', function () {
                        var differentType = new DifferentType(), firstSameByType = new SameByType(), secondSameByType = new SameByType();
                        expect(firstSameByType.equals(differentType)).toEqual(false);
                        expect(firstSameByType.equals(firstSameByType)).toEqual(true);
                        expect(firstSameByType.equals(secondSameByType)).toEqual(true);
                    });
                });
                //#endregion equals
                //#region getType
                describe('getType', function () {
                    it('should return a type with the appropriate name.', function () {
                        var obj = {}, test = new Test();
                        expect(obj.getType().name).toBe('Object');
                        expect(test.getType().name).toBe('Test');
                    });
                    it('should return a type that contains the constructor of the type.', function () {
                        var obj = {}, test = new Test();
                        expect(obj.getType().constructorFunction === Object).toBe(true);
                        expect(test.getType().constructorFunction === Test).toBe(true);
                    });
                });
                //#endregion getType
                //#region is
                describe('is', function () {
                    it('should return True when comparing an object with its own type.', function () {
                        var obj = {}, derived = new DerivedType();
                        expect(obj.is(Object)).toBe(true);
                        expect(derived.is(DerivedType)).toBe(true);
                    });
                    it('should return True when comparing an object with types on its ancestor chain.', function () {
                        var derived = new DerivedType(), moreDerived = new MoreDerivedType();
                        expect(derived.is(Object)).toBe(true);
                        expect(moreDerived.is(Object)).toBe(true);
                        expect(moreDerived.is(DerivedType)).toBe(true);
                    });
                });
                //#endregion is
            });
            //#endregion Object
        });
        //#region Test Classes
        var SameByType = (function () {
            function SameByType() {
            }
            SameByType.prototype.equals = function (other) {
                if (Classical.Utilities.isNullOrUndefined(other) || !other.getType)
                    return false;
                return this.is(other.getType().constructorFunction);
            };
            return SameByType;
        })();
        var DifferentType = (function () {
            function DifferentType() {
            }
            return DifferentType;
        })();
        var Test = (function () {
            function Test() {
            }
            return Test;
        })();
        var ReflectionTest = (function () {
            function ReflectionTest() {
            }
            Object.defineProperty(ReflectionTest.prototype, "name", {
                get: function () {
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ReflectionTest.prototype, "getSetProperty", {
                get: function () {
                    return this._getSetProperty;
                },
                set: function (value) {
                    this._getSetProperty = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ReflectionTest.prototype, "setProperty", {
                set: function (value) {
                    this._setProperty = value;
                },
                enumerable: true,
                configurable: true
            });
            ReflectionTest.prototype.returnNumber = function () {
                return 42;
            };
            ReflectionTest.prototype.returnParameter = function (something) {
                return something;
            };
            return ReflectionTest;
        })();
        var DerivedReflectionTest = (function (_super) {
            __extends(DerivedReflectionTest, _super);
            function DerivedReflectionTest() {
                _super.apply(this, arguments);
            }
            Object.defineProperty(DerivedReflectionTest.prototype, "derivedProperty", {
                get: function () {
                    return this._derivedProperty;
                },
                enumerable: true,
                configurable: true
            });
            return DerivedReflectionTest;
        })(ReflectionTest);
        var DerivedType = (function () {
            function DerivedType() {
            }
            return DerivedType;
        })();
        var MoreDerivedType = (function (_super) {
            __extends(MoreDerivedType, _super);
            function MoreDerivedType() {
                _super.apply(this, arguments);
            }
            return MoreDerivedType;
        })(DerivedType);
    })(Spec = Classical.Spec || (Classical.Spec = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Core.spec.js.map