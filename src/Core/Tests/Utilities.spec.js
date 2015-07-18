var Classical;
(function (Classical) {
    var Utilities;
    (function (Utilities) {
        var Spec;
        (function (Spec) {
            //#region Imports
            var cc = Classical.Collections;
            var r = Classical.Reflection;
            //#endregion Imports
            //#region Classical.Utilities
            describe('Classical', function () {
                describe('Utilities', function () {
                    //#region areEqual
                    describe('areEqual', function () {
                        it('should use built in equality for primitives', function () {
                            var instance = {};
                            expect(Utilities.areEqual(instance, instance)).toEqual(true);
                            expect(Utilities.areEqual({}, {})).toEqual(false);
                            expect(Utilities.areEqual(0, 0)).toEqual(true);
                            expect(Utilities.areEqual(0, 1)).toEqual(false);
                            expect(Utilities.areEqual('abc', 'abc')).toEqual(true);
                            expect(Utilities.areEqual('', 'abc')).toEqual(false);
                        });
                        it('should use object.equals for objects', function () {
                            var firstInstance = new SameByType(), secondInstance = new SameByType(), differentInstance = new DifferentType();
                            expect(Utilities.areEqual(firstInstance, secondInstance)).toEqual(true);
                            expect(Utilities.areEqual(firstInstance, firstInstance)).toEqual(true);
                            expect(Utilities.areEqual(firstInstance, differentInstance)).toEqual(false);
                            expect(Utilities.areEqual(firstInstance, '')).toEqual(false);
                        });
                    });
                    //#endregion areEqual
                    //#region argumentsToArray
                    describe('argumentsToArray', function () {
                        it('should convert the arguments of a function to an array', function () {
                            expect(Utilities.isArray(arguments)).toBe(false);
                            expect(Utilities.isArray(Utilities.argumentsToArray(arguments))).toBe(true);
                            expect(Utilities.argumentsToArray(arguments).length).toBe(0);
                        });
                    });
                    //#endregion argumentsToArray
                    //#region coalesce 
                    describe('coalesce', function () {
                        it('should return the first value when it is defined.', function () {
                            expect(Utilities.coalesce(0, 1)).toBe(0);
                        });
                        it('should return the second value when the first is null or undefined.', function () {
                            expect(Utilities.coalesce(null, 1)).toBe(1);
                            expect(Utilities.coalesce(undefined, 1)).toBe(1);
                        });
                    });
                    //#endregion coalesce
                    //#region extend
                    describe('extend', function () {
                        it('should not change the destination with an empty source.', function () {
                            var destination = {};
                            Utilities.extend(destination, {});
                            expect(equalByProperty(destination, {})).toBe(true);
                            destination = { x: "a", y: 0 };
                            Utilities.extend(destination, {});
                            expect(equalByProperty(destination, { x: "a", y: 0 })).toBe(true);
                        });
                        it('should overwrite existing properties on the destination with values from the source.', function () {
                            var destination = { x: "a", y: 0 };
                            Utilities.extend(destination, { x: "b" });
                            expect(equalByProperty(destination, { x: "b", y: 0 })).toBe(true);
                        });
                        it('should add properties from the source that are missing on the destination.', function () {
                            var destination = {};
                            Utilities.extend(destination, { x: "a" });
                            expect(equalByProperty(destination, { x: "a" })).toBe(true);
                            destination = { x: "a", y: 0 };
                            Utilities.extend(destination, { z: 1 });
                            expect(equalByProperty(destination, { x: "a", y: 0, z: 1 })).toBe(true);
                        });
                        function equalByProperty(first, second) {
                            for (var property in first) {
                                if (first[property] !== second[property])
                                    return false;
                            }
                            return true;
                        }
                    });
                    //#endregion extend
                    expect(Utilities.titleCase('if I only had a brain', 'if', 'had', 'a')).toBe('If I Only had a Brain');
                    expect(Utilities.titleCase('what is wrong with kids these days?', 'what', 'kids', 'these', 'is', 'with')).toBe('What is Wrong with kids these Days?');
                });
                it('should lowercase all letters in the middle of words', function () {
                    expect(Utilities.titleCase('rEVERSE cASE')).toBe('Reverse Case');
                });
            });
            //#endregion titleCase
            //#region sentenceCase
            describe('sentenceCase', function () {
                it('should not change a string that is null, undefined or empty', function () {
                    expect(Utilities.sentenceCase(null)).toBe(null);
                    expect(Utilities.sentenceCase(undefined)).toBe(undefined);
                    expect(Utilities.sentenceCase('')).toBe('');
                });
                it('should not change proper sentences', function () {
                    expect(Utilities.sentenceCase('Everyone was looking.')).toBe('Everyone was looking.');
                    expect(Utilities.sentenceCase('It\'s a hard knock life.')).toBe('It\'s a hard knock life.');
                });
                it('should uppercase the first word of a sentence when it starts with a letter.', function () {
                    expect(Utilities.sentenceCase('the.')).toBe('The.');
                    expect(Utilities.sentenceCase('the boy and his 1st cat.')).toBe('The boy and his 1st cat.');
                });
                it('should ignore excluded words.', function () {
                    expect(Utilities.sentenceCase('if only Tom understood Sandy.', 'Tom', 'Sandy')).toBe('If only Tom understood Sandy.');
                });
                it('should capitalize excluded words at the beginning of a sentence.', function () {
                    expect(Utilities.sentenceCase('john is silly.', 'john')).toBe('John is silly.');
                });
                it('should add periods at the end of sentences with words.', function () {
                    expect(Utilities.sentenceCase('The')).toBe('The.');
                    expect(Utilities.sentenceCase('rEVERSE cASE')).toBe('Reverse case.');
                });
            });
            //#endregion sentenceCase
            //#region isNull
            describe('isNull', function () {
                it('should only return True for the null value', function () {
                    expect(Utilities.isNull(null)).toBe(true);
                    expect(Utilities.isNull(undefined)).toBe(false);
                    expect(Utilities.isNull(0)).toBe(false);
                    expect(Utilities.isNull('')).toBe(false);
                    expect(Utilities.isNull(false)).toBe(false);
                });
            });
            //#endregion isNull
            //#region isUndefined
            describe('isUndefined', function () {
                it('should only return True for the undefined value', function () {
                    expect(Utilities.isUndefined(null)).toBe(false);
                    expect(Utilities.isUndefined(undefined)).toBe(true);
                    expect(Utilities.isUndefined(0)).toBe(false);
                    expect(Utilities.isUndefined('')).toBe(false);
                    expect(Utilities.isUndefined(false)).toBe(false);
                });
            });
            //#endregion isUndefined
            //#region isNullOrUndefined
            describe('isNullOrUndefined', function () {
                it('should only return True for null and undefined values.', function () {
                    expect(Utilities.isNullOrUndefined(null)).toBe(true);
                    expect(Utilities.isNullOrUndefined(undefined)).toBe(true);
                    expect(Utilities.isNullOrUndefined({})).toBe(false);
                    expect(Utilities.isNullOrUndefined([])).toBe(false);
                    expect(Utilities.isNullOrUndefined(1)).toBe(false);
                });
            });
            //#endregion isNullOrUndefined
            //#region isDefined
            describe('isDefined', function () {
                it('should only return False for null and undefined values.', function () {
                    expect(Utilities.isDefined(null)).toBe(false);
                    expect(Utilities.isDefined(undefined)).toBe(false);
                    expect(Utilities.isDefined({})).toBe(true);
                    expect(Utilities.isDefined([])).toBe(true);
                    expect(Utilities.isDefined(1)).toBe(true);
                });
            });
            //#endregion isDefined
            //#region isNumber
            describe('isNumber', function () {
                it('should only return True for numbers', function () {
                    expect(Utilities.isNumber(0)).toBe(true);
                    expect(Utilities.isNumber(new Number(-1))).toBe(true);
                    expect(Utilities.isNumber(1e10)).toBe(true);
                    expect(Utilities.isNumber(NaN)).toBe(true);
                    expect(Utilities.isNumber(Infinity)).toBe(true);
                    expect(Utilities.isNumber(-Infinity)).toBe(true);
                    expect(Utilities.isNumber(undefined)).toBe(false);
                    expect(Utilities.isNumber(null)).toBe(false);
                    expect(Utilities.isNumber('')).toBe(false);
                    expect(Utilities.isNumber(false)).toBe(false);
                });
            });
            //#endregion isNumber
            //#region isNaN
            describe('isNaN', function () {
                it('should only return true for NaN', function () {
                    expect(Utilities.isNaN(0)).toBe(false);
                    expect(Utilities.isNaN(-1)).toBe(false);
                    expect(Utilities.isNaN(1e10)).toBe(false);
                    expect(Utilities.isNaN(NaN)).toBe(true);
                    expect(Utilities.isNaN(new Number(NaN))).toBe(true);
                    expect(Utilities.isNaN(Infinity)).toBe(false);
                    expect(Utilities.isNaN(-Infinity)).toBe(false);
                    expect(Utilities.isNaN(undefined)).toBe(false);
                    expect(Utilities.isNaN(null)).toBe(false);
                    expect(Utilities.isNaN('')).toBe(false);
                    expect(Utilities.isNaN(false)).toBe(false);
                });
            });
            //#endregion isNaN
            //#region isInfinity
            describe('isInfinity', function () {
                it('should only return true for positive and negative infinity', function () {
                    expect(Utilities.isInfinity(0)).toBe(false);
                    expect(Utilities.isInfinity(-1)).toBe(false);
                    expect(Utilities.isInfinity(1e10)).toBe(false);
                    expect(Utilities.isInfinity(NaN)).toBe(false);
                    expect(Utilities.isInfinity(Infinity)).toBe(true);
                    expect(Utilities.isInfinity(-Infinity)).toBe(true);
                    expect(Utilities.isInfinity(new Number(Infinity))).toBe(true);
                    expect(Utilities.isInfinity(new Number(-Infinity))).toBe(true);
                    expect(Utilities.isInfinity(undefined)).toBe(false);
                    expect(Utilities.isInfinity(null)).toBe(false);
                    expect(Utilities.isInfinity('')).toBe(false);
                    expect(Utilities.isInfinity(false)).toBe(false);
                });
            });
            //#endregion isInfinity
            //#region isInteger
            describe('isInteger', function () {
                it('should return true for positive and negative integers', function () {
                    cc.Enumerable.range(-10, 1, 10).query()
                        .forEach(function (n) { return expect(Utilities.isInteger(n)).toBe(true); });
                });
                it('should return true for numbers with decimal values that are all zero', function () {
                    cc.Enumerable.range(-10.0, 1.000, 10.00).query()
                        .forEach(function (n) { return expect(Utilities.isInteger(n)).toBe(true); });
                });
                it('should return false for numbers with non-zero decimal values', function () {
                    cc.Enumerable.range(-10.1, 1, 10.1).query()
                        .forEach(function (n) { return expect(Utilities.isInteger(n)).toBe(false); });
                });
                it('should return false undefined, null, NaN, Infinity, -Infinity', function () {
                    [undefined, null, NaN, Infinity, -Infinity].query()
                        .forEach(function (n) { return expect(Utilities.isInteger(n)).toBe(false); });
                });
            });
            //#endregion isInteger
            //#region isString
            describe('isString', function () {
                it('should only return true for strings', function () {
                    expect(Utilities.isString('')).toBe(true);
                    expect(Utilities.isString('abc')).toBe(true);
                    expect(Utilities.isString(new String('abc'))).toBe(true);
                    expect(Utilities.isString(1)).toBe(false);
                    expect(Utilities.isString(NaN)).toBe(false);
                    expect(Utilities.isString(undefined)).toBe(false);
                    expect(Utilities.isString(null)).toBe(false);
                    expect(Utilities.isString(false)).toBe(false);
                });
            });
            //#endregion isString
            //#region isBoolean
            describe('isBoolean', function () {
                it('should only return true for boolean values', function () {
                    expect(Utilities.isBoolean(true)).toBe(true);
                    expect(Utilities.isBoolean(false)).toBe(true);
                    expect(Utilities.isBoolean(new Boolean(true))).toBe(true);
                    expect(Utilities.isBoolean(new Boolean(false))).toBe(true);
                    expect(Utilities.isBoolean('')).toBe(false);
                    expect(Utilities.isBoolean('abc')).toBe(false);
                    expect(Utilities.isBoolean(new String('abc'))).toBe(false);
                    expect(Utilities.isBoolean(1)).toBe(false);
                    expect(Utilities.isBoolean(NaN)).toBe(false);
                    expect(Utilities.isBoolean(undefined)).toBe(false);
                    expect(Utilities.isBoolean(null)).toBe(false);
                });
            });
            //#endregion isBoolean
            //#region isTrue
            describe('isTrue', function () {
                it('should only return true for true or its object equivalent', function () {
                    expect(Utilities.isTrue(true)).toBe(true);
                    expect(Utilities.isTrue(false)).toBe(false);
                    expect(Utilities.isTrue(new Boolean(true))).toBe(true);
                    expect(Utilities.isTrue(new Boolean(false))).toBe(false);
                    expect(Utilities.isTrue('')).toBe(false);
                    expect(Utilities.isTrue('abc')).toBe(false);
                    expect(Utilities.isTrue(new String('abc'))).toBe(false);
                    expect(Utilities.isTrue(1)).toBe(false);
                    expect(Utilities.isTrue(NaN)).toBe(false);
                    expect(Utilities.isTrue(undefined)).toBe(false);
                    expect(Utilities.isTrue(null)).toBe(false);
                });
            });
            //#endregion isTrue
            //#region isTruthy
            describe('isTruthy', function () {
                it('should only return true for values that can be coerced to true', function () {
                    expect(Utilities.isTruthy(true)).toBe(true);
                    expect(Utilities.isTruthy(false)).toBe(false);
                    expect(Utilities.isTruthy(new Boolean(true))).toBe(true);
                    expect(Utilities.isTruthy(new Boolean(false))).toBe(true);
                    expect(Utilities.isTruthy('')).toBe(false);
                    expect(Utilities.isTruthy('abc')).toBe(true);
                    expect(Utilities.isTruthy({})).toBe(true);
                    expect(Utilities.isTruthy(1)).toBe(true);
                    expect(Utilities.isTruthy(NaN)).toBe(false);
                    expect(Utilities.isTruthy(undefined)).toBe(false);
                    expect(Utilities.isTruthy(null)).toBe(false);
                });
            });
            //#endregion isTruthy
            //#region isFalse
            describe('isFalse', function () {
                it('should only return true for false or its object equivalent', function () {
                    expect(Utilities.isFalse(true)).toBe(false);
                    expect(Utilities.isFalse(false)).toBe(true);
                    expect(Utilities.isFalse(new Boolean(true))).toBe(false);
                    expect(Utilities.isFalse(new Boolean(false))).toBe(true);
                    expect(Utilities.isFalse('')).toBe(false);
                    expect(Utilities.isFalse('abc')).toBe(false);
                    expect(Utilities.isFalse(new String('abc'))).toBe(false);
                    expect(Utilities.isFalse(1)).toBe(false);
                    expect(Utilities.isFalse(NaN)).toBe(false);
                    expect(Utilities.isFalse(undefined)).toBe(false);
                    expect(Utilities.isFalse(null)).toBe(false);
                });
            });
            //#endregion isFalse
            //#region isFalsy
            describe('isFalsy', function () {
                it('should only return true for values that can be coerced to false', function () {
                    expect(Utilities.isFalsy(true)).toBe(false);
                    expect(Utilities.isFalsy(false)).toBe(true);
                    expect(Utilities.isFalsy(new Boolean(true))).toBe(false);
                    expect(Utilities.isFalsy(new Boolean(false))).toBe(false);
                    expect(Utilities.isFalsy('')).toBe(true);
                    expect(Utilities.isFalsy('abc')).toBe(false);
                    expect(Utilities.isFalsy({})).toBe(false);
                    expect(Utilities.isFalsy(1)).toBe(false);
                    expect(Utilities.isFalsy(NaN)).toBe(true);
                    expect(Utilities.isFalsy(undefined)).toBe(true);
                    expect(Utilities.isFalsy(null)).toBe(true);
                });
            });
            //#endregion isFalsy
            //#region isObject
            describe('isObject', function () {
                it('should only return true for objects', function () {
                    expect(Utilities.isObject({})).toBe(true);
                    expect(Utilities.isObject(new Date())).toBe(true);
                    expect(Utilities.isObject(new String('abc'))).toBe(true);
                    expect(Utilities.isObject(1)).toBe(false);
                    expect(Utilities.isObject(NaN)).toBe(false);
                    expect(Utilities.isObject(undefined)).toBe(false);
                    expect(Utilities.isObject(null)).toBe(false);
                    expect(Utilities.isObject(false)).toBe(false);
                });
            });
            //#endregion isObject
            //#region isEmptyObject
            describe('isEmptyObject', function () {
                it('should only return true for empty objects', function () {
                    expect(Utilities.isEmptyObject({})).toBe(true);
                    expect(Utilities.isEmptyObject(new Object())).toBe(true);
                    expect(Utilities.isEmptyObject((function () { }).prototype)).toBe(true);
                    expect(Utilities.isEmptyObject(Object.getPrototypeOf(new Object()))).toBe(true);
                    expect(Utilities.isEmptyObject(Object.getPrototypeOf((function () { }).prototype))).toBe(true);
                });
                it('should return false for values that are not objects', function () {
                    expect(Utilities.isEmptyObject([])).toBe(false);
                    expect(Utilities.isEmptyObject(new Date())).toBe(false);
                    expect(Utilities.isEmptyObject('abc')).toBe(false);
                    expect(Utilities.isEmptyObject(new String('abc'))).toBe(false);
                    expect(Utilities.isEmptyObject(1)).toBe(false);
                    expect(Utilities.isEmptyObject(NaN)).toBe(false);
                    expect(Utilities.isEmptyObject(undefined)).toBe(false);
                    expect(Utilities.isEmptyObject(null)).toBe(false);
                    expect(Utilities.isEmptyObject(false)).toBe(false);
                });
                it('should return false for non-empty objects', function () {
                    expect(Utilities.isEmptyObject({ property: 'value' })).toBe(false);
                });
                it('should return false for type constructors', function () {
                    expect(Utilities.isEmptyObject(Number)).toBe(false);
                    expect(Utilities.isEmptyObject(Boolean)).toBe(false);
                    expect(Utilities.isEmptyObject(Date)).toBe(false);
                    expect(Utilities.isEmptyObject(Object)).toBe(false);
                    expect(Utilities.isEmptyObject(Array)).toBe(false);
                    expect(Utilities.isEmptyObject(r.Type)).toBe(false);
                    expect(Utilities.isEmptyObject(cc.Dictionary)).toBe(false);
                });
                it('should return false for the prototypes of primitive types', function () {
                    expect(Utilities.isEmptyObject(Number.prototype)).toBe(false);
                    expect(Utilities.isEmptyObject(Boolean.prototype)).toBe(false);
                    expect(Utilities.isEmptyObject(Date.prototype)).toBe(false);
                    expect(Utilities.isEmptyObject(Array.prototype)).toBe(false);
                });
                it('should return false for modules with exported members', function () {
                    expect(Utilities.isEmptyObject(Classical)).toBe(false);
                    expect(Utilities.isEmptyObject(Classical.Utilities)).toBe(false);
                    expect(Utilities.isEmptyObject(Classical.Collections)).toBe(false);
                    expect(Utilities.isEmptyObject(Classical.Binding)).toBe(false);
                });
            });
            //#endregion isEmptyObject
            //#region isArray
            describe('isArray', function () {
                it('should only return true for arrays', function () {
                    expect(Utilities.isArray([])).toBe(true);
                    expect(Utilities.isArray([[], []])).toBe(true);
                    expect(Utilities.isArray([1, 2, 3])).toBe(true);
                    expect(Utilities.isArray(arguments)).toBe(false);
                    expect(Utilities.isArray(1)).toBe(false);
                    expect(Utilities.isArray(NaN)).toBe(false);
                    expect(Utilities.isArray(undefined)).toBe(false);
                    expect(Utilities.isArray(null)).toBe(false);
                    expect(Utilities.isArray(false)).toBe(false);
                });
            });
            //#endregion isArray
            //#region isFunction
            describe('isFunction', function () {
                it('should only return true for arrays', function () {
                    expect(Utilities.isFunction(function () { })).toBe(true);
                    expect(Utilities.isFunction(function f() { })).toBe(true);
                    expect(Utilities.isFunction(alert)).toBe(true);
                    expect(Utilities.isFunction([])).toBe(false);
                    expect(Utilities.isFunction(1)).toBe(false);
                    expect(Utilities.isFunction(NaN)).toBe(false);
                    expect(Utilities.isFunction(undefined)).toBe(false);
                    expect(Utilities.isFunction(null)).toBe(false);
                    expect(Utilities.isFunction(false)).toBe(false);
                });
            });
            //#endregion isFunction
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
        })(Spec = Utilities.Spec || (Utilities.Spec = {}));
    })(Utilities = Classical.Utilities || (Classical.Utilities = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Utilities.spec.js.map