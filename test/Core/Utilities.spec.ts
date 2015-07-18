
module Classical.Utilities.Spec {

    //#region Imports

    import cc = Classical.Collections;
    import r = Classical.Reflection;
    import Assert = Classical.Assert;

    //#endregion Imports

    //#region Classical.Utilities

    describe('Classical',() => {
        describe('Utilities',() => {

            //#region areEqual

            describe('areEqual',() => {
                it('should use built in equality for primitives',() => {
                    var instance: any = {};
                    expect(areEqual(instance, instance)).toEqual(true);
                    expect(areEqual({}, {})).toEqual(false);
                    expect(areEqual(0, 0)).toEqual(true);
                    expect(areEqual(0, 1)).toEqual(false);
                    expect(areEqual('abc', 'abc')).toEqual(true);
                    expect(areEqual('', 'abc')).toEqual(false);
                });

                it('should use object.equals for objects',() => {
                    var firstInstance = new SameByType(),
                        secondInstance = new SameByType(),
                        differentInstance = new DifferentType();

                    expect(areEqual(firstInstance, secondInstance)).toEqual(true);
                    expect(areEqual(firstInstance, firstInstance)).toEqual(true);
                    expect(areEqual(firstInstance, differentInstance)).toEqual(false);
                    expect(areEqual(firstInstance, '')).toEqual(false);
                });
            });

            //#endregion areEqual

            //#region argumentsToArray

            describe('argumentsToArray', () => {
                it('should convert the arguments of a function to an array', function() {
                    expect(isArray(arguments)).toBe(false);
                    expect(isArray(argumentsToArray(arguments))).toBe(true);
                    expect(argumentsToArray(arguments).length).toBe(0);
                });
            });

            //#endregion argumentsToArray

            //#region coalesce 

            describe('coalesce', () => {
                it('should return the first value when it is defined.',() => {
                    expect(coalesce(0, 1)).toBe(0);
                });
                it('should return the second value when the first is null or undefined.',() => {
                    expect(coalesce(null, 1)).toBe(1);
                    expect(coalesce(undefined, 1)).toBe(1);
                });
            });

            //#endregion coalesce

            //#region extend

            describe('extend',() => {
                it('should not change the destination with an empty source.',() => {
                    var destination: any = {};
                    extend(destination, {});
                    expect(equalByProperty(destination, {})).toBe(true);

                    destination = { x: "a", y: 0 };
                    extend(destination, {});
                    expect(equalByProperty(destination, { x: "a", y: 0 })).toBe(true);
                });
                it('should overwrite existing properties on the destination with values from the source.',() => {
                    var destination: any = { x: "a", y: 0 };
                    extend(destination, { x: "b" });
                    expect(equalByProperty(destination, { x: "b", y: 0 })).toBe(true);
                });
                it('should add properties from the source that are missing on the destination.',() => {
                    var destination: any = {};
                    extend(destination, { x: "a" });
                    expect(equalByProperty(destination, { x: "a" })).toBe(true);

                    destination = { x: "a", y: 0 };
                    extend(destination, { z: 1 });
                    expect(equalByProperty(destination, { x: "a", y: 0, z: 1 })).toBe(true);
                });

                function equalByProperty(first: any, second: any): boolean {
                    for (var property in first) {
                        if (first[property] !== second[property])
                            return false;
                    }

                    return true;
                }
            })

            //#endregion extend

                    expect(titleCase('if I only had a brain', 'if', 'had', 'a')).toBe('If I Only had a Brain');
                    expect(titleCase('what is wrong with kids these days?', 'what', 'kids', 'these', 'is', 'with')).toBe('What is Wrong with kids these Days?');
                });
                it('should lowercase all letters in the middle of words', () => {
                    expect(titleCase('rEVERSE cASE')).toBe('Reverse Case');
                });
            });

            //#endregion titleCase

            //#region sentenceCase

            describe('sentenceCase', () => {
                it('should not change a string that is null, undefined or empty', () => {
                    expect(sentenceCase(null)).toBe(null);
                    expect(sentenceCase(undefined)).toBe(undefined);
                    expect(sentenceCase('')).toBe('');
                });
                it('should not change proper sentences', () => {
                    expect(sentenceCase('Everyone was looking.')).toBe('Everyone was looking.');
                    expect(sentenceCase('It\'s a hard knock life.')).toBe('It\'s a hard knock life.');
                });
                it('should uppercase the first word of a sentence when it starts with a letter.', () => {
                    expect(sentenceCase('the.')).toBe('The.');
                    expect(sentenceCase('the boy and his 1st cat.')).toBe('The boy and his 1st cat.');
                });
                it('should ignore excluded words.', () => {
                    expect(sentenceCase('if only Tom understood Sandy.', 'Tom', 'Sandy')).toBe('If only Tom understood Sandy.');
                });
                it('should capitalize excluded words at the beginning of a sentence.', () => {
                    expect(sentenceCase('john is silly.', 'john')).toBe('John is silly.');
                });
                it('should add periods at the end of sentences with words.', () => {
                    expect(sentenceCase('The')).toBe('The.');
                    expect(sentenceCase('rEVERSE cASE')).toBe('Reverse case.');
                });
            });

            //#endregion sentenceCase

            //#region isNull

            describe('isNull', () => {
                it('should only return True for the null value', () => {
                    expect(isNull(null)).toBe(true);
                    expect(isNull(undefined)).toBe(false);
                    expect(isNull(0)).toBe(false);
                    expect(isNull('')).toBe(false);
                    expect(isNull(false)).toBe(false);
                });
            });

            //#endregion isNull

            //#region isUndefined

            describe('isUndefined', () => {
                it('should only return True for the undefined value', () => {
                    expect(isUndefined(null)).toBe(false);
                    expect(isUndefined(undefined)).toBe(true);
                    expect(isUndefined(0)).toBe(false);
                    expect(isUndefined('')).toBe(false);
                    expect(isUndefined(false)).toBe(false);
                });
            });

            //#endregion isUndefined

            //#region isNullOrUndefined

            describe('isNullOrUndefined', () => {
                it('should only return True for null and undefined values.', () => {
                    expect(isNullOrUndefined(null)).toBe(true);
                    expect(isNullOrUndefined(undefined)).toBe(true);
                    expect(isNullOrUndefined({})).toBe(false);
                    expect(isNullOrUndefined([])).toBe(false);
                    expect(isNullOrUndefined(1)).toBe(false);
                });
            });

            //#endregion isNullOrUndefined

            //#region isDefined

            describe('isDefined', () => {
                it('should only return False for null and undefined values.', () => {
                    expect(isDefined(null)).toBe(false);
                    expect(isDefined(undefined)).toBe(false);
                    expect(isDefined({})).toBe(true);
                    expect(isDefined([])).toBe(true);
                    expect(isDefined(1)).toBe(true);
                } );
            } );

            //#endregion isDefined

            //#region isNumber

            describe('isNumber', () => {
                it('should only return True for numbers', () => {
                    expect(isNumber(0)).toBe(true);
                    expect(isNumber(new Number(-1))).toBe(true);
                    expect(isNumber(1e10)).toBe(true);
                    expect(isNumber(NaN)).toBe(true);
                    expect(isNumber(Infinity)).toBe(true);
                    expect(isNumber(-Infinity)).toBe(true);
                    expect(isNumber(undefined)).toBe(false);
                    expect(isNumber(null)).toBe(false);
                    expect(isNumber('')).toBe(false);
                    expect(isNumber(false)).toBe(false);
                });
            });

            //#endregion isNumber

            //#region isNaN

            describe('isNaN', () => {
                it('should only return true for NaN', () => {
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

            describe('isInfinity', () => {
                it('should only return true for positive and negative infinity', () => {
                    expect(isInfinity(0)).toBe(false);
                    expect(isInfinity(-1)).toBe(false);
                    expect(isInfinity(1e10)).toBe(false);
                    expect(isInfinity(NaN)).toBe(false);
                    expect(isInfinity(Infinity)).toBe(true);
                    expect(isInfinity(-Infinity)).toBe(true);
                    expect(isInfinity(new Number(Infinity))).toBe(true);
                    expect(isInfinity(new Number(-Infinity))).toBe(true);
                    expect(isInfinity(undefined)).toBe(false);
                    expect(isInfinity(null)).toBe(false);
                    expect(isInfinity('')).toBe(false);
                    expect(isInfinity(false)).toBe(false);
                });
            });

            //#endregion isInfinity

            //#region isInteger

            describe('isInteger', () => {
                it('should return true for positive and negative integers', () => {
                    cc.Enumerable.range(-10, 1, 10).query()
                        .forEach(n => expect(isInteger(n)).toBe(true));
                });
                it('should return true for numbers with decimal values that are all zero', () => {
                    cc.Enumerable.range(-10.0, 1.000, 10.00).query()
                        .forEach(n => expect(isInteger(n)).toBe(true));
                });
                it('should return false for numbers with non-zero decimal values', () => {
                    cc.Enumerable.range(-10.1, 1, 10.1).query()
                        .forEach(n => expect(isInteger(n)).toBe(false));
                });
                it('should return false undefined, null, NaN, Infinity, -Infinity', () => {
                    [undefined, null, NaN, Infinity, -Infinity].query()
                        .forEach(n => expect(isInteger(n)).toBe(false));
                });
            });

            //#endregion isInteger

            //#region isString

            describe('isString', () => {
                it('should only return true for strings', () => {
                    expect(isString('')).toBe(true);
                    expect(isString('abc')).toBe(true);
                    expect(isString(new String('abc'))).toBe(true);
                    expect(isString(1)).toBe(false);
                    expect(isString(NaN)).toBe(false);
                    expect(isString(undefined)).toBe(false);
                    expect(isString(null)).toBe(false);
                    expect(isString(false)).toBe(false);
                });
            });

            //#endregion isString

            //#region isBoolean

            describe('isBoolean', () => {
                it('should only return true for boolean values', () => {
                    expect(isBoolean(true)).toBe(true);
                    expect(isBoolean(false)).toBe(true);
                    expect(isBoolean(new Boolean(true))).toBe(true);
                    expect(isBoolean(new Boolean(false))).toBe(true);
                    expect(isBoolean('')).toBe(false);
                    expect(isBoolean('abc')).toBe(false);
                    expect(isBoolean(new String('abc'))).toBe(false);
                    expect(isBoolean(1)).toBe(false);
                    expect(isBoolean(NaN)).toBe(false);
                    expect(isBoolean(undefined)).toBe(false);
                    expect(isBoolean(null)).toBe(false);
                });
            });

            //#endregion isBoolean

            //#region isTrue

            describe('isTrue', () => {
                it('should only return true for true or its object equivalent', () => {
                    expect(isTrue(true)).toBe(true);
                    expect(isTrue(false)).toBe(false);
                    expect(isTrue(new Boolean(true))).toBe(true);
                    expect(isTrue(new Boolean(false))).toBe(false);
                    expect(isTrue('')).toBe(false);
                    expect(isTrue('abc')).toBe(false);
                    expect(isTrue(new String('abc'))).toBe(false);
                    expect(isTrue(1)).toBe(false);
                    expect(isTrue(NaN)).toBe(false);
                    expect(isTrue(undefined)).toBe(false);
                    expect(isTrue(null)).toBe(false);
                });
            });

            //#endregion isTrue

            //#region isTruthy

            describe('isTruthy', () => {
                it('should only return true for values that can be coerced to true', () => {
                    expect(isTruthy(true)).toBe(true);
                    expect(isTruthy(false)).toBe(false);
                    expect(isTruthy(new Boolean(true))).toBe(true);
                    expect(isTruthy(new Boolean(false))).toBe(true);
                    expect(isTruthy('')).toBe(false);
                    expect(isTruthy('abc')).toBe(true);
                    expect(isTruthy({})).toBe(true);
                    expect(isTruthy(1)).toBe(true);
                    expect(isTruthy(NaN)).toBe(false);
                    expect(isTruthy(undefined)).toBe(false);
                    expect(isTruthy(null)).toBe(false);
                });
            });

            //#endregion isTruthy

            //#region isFalse

            describe('isFalse', () => {
                it('should only return true for false or its object equivalent', () => {
                    expect(isFalse(true)).toBe(false);
                    expect(isFalse(false)).toBe(true);
                    expect(isFalse(new Boolean(true))).toBe(false);
                    expect(isFalse(new Boolean(false))).toBe(true);
                    expect(isFalse('')).toBe(false);
                    expect(isFalse('abc')).toBe(false);
                    expect(isFalse(new String('abc'))).toBe(false);
                    expect(isFalse(1)).toBe(false);
                    expect(isFalse(NaN)).toBe(false);
                    expect(isFalse(undefined)).toBe(false);
                    expect(isFalse(null)).toBe(false);
                });
            });

            //#endregion isFalse

            //#region isFalsy

            describe('isFalsy', () => {
                it('should only return true for values that can be coerced to false', () => {
                    expect(isFalsy(true)).toBe(false);
                    expect(isFalsy(false)).toBe(true);
                    expect(isFalsy(new Boolean(true))).toBe(false);
                    expect(isFalsy(new Boolean(false))).toBe(false);
                    expect(isFalsy('')).toBe(true);
                    expect(isFalsy('abc')).toBe(false);
                    expect(isFalsy({})).toBe(false);
                    expect(isFalsy(1)).toBe(false);
                    expect(isFalsy(NaN)).toBe(true);
                    expect(isFalsy(undefined)).toBe(true);
                    expect(isFalsy(null)).toBe(true);
                });
            });

            //#endregion isFalsy

            //#region isObject

            describe('isObject', () => {
                it('should only return true for objects', () => {
                    expect(isObject({})).toBe(true);
                    expect(isObject(new Date())).toBe(true);
                    expect(isObject(new String('abc'))).toBe(true);
                    expect(isObject(1)).toBe(false);
                    expect(isObject(NaN)).toBe(false);
                    expect(isObject(undefined)).toBe(false);
                    expect(isObject(null)).toBe(false);
                    expect(isObject(false)).toBe(false);
                });
            });

            //#endregion isObject

            //#region isEmptyObject

            describe('isEmptyObject', () => {
                it('should only return true for empty objects', () => {
                    expect(isEmptyObject({})).toBe(true);
                    expect(isEmptyObject(new Object())).toBe(true);
                    expect(isEmptyObject((function () { }).prototype)).toBe(true);
                    expect(isEmptyObject(Object.getPrototypeOf(new Object()))).toBe(true);
                    expect(isEmptyObject(Object.getPrototypeOf((function () { }).prototype))).toBe(true);
                });
                it('should return false for values that are not objects', () => {
                    expect(isEmptyObject([])).toBe(false);
                    expect(isEmptyObject(new Date())).toBe(false);
                    expect(isEmptyObject('abc')).toBe(false);
                    expect(isEmptyObject(new String('abc'))).toBe(false);
                    expect(isEmptyObject(1)).toBe(false);
                    expect(isEmptyObject(NaN)).toBe(false);
                    expect(isEmptyObject(undefined)).toBe(false);
                    expect(isEmptyObject(null)).toBe(false);
                    expect(isEmptyObject(false)).toBe(false);
                });
                it('should return false for non-empty objects', () => {
                    expect(isEmptyObject({ property: 'value' })).toBe(false);
                });
                it('should return false for type constructors', () => {
                    expect(isEmptyObject(Number)).toBe(false);
                    expect(isEmptyObject(Boolean)).toBe(false);
                    expect(isEmptyObject(Date)).toBe(false);
                    expect(isEmptyObject(Object)).toBe(false);
                    expect(isEmptyObject(Array)).toBe(false);
                    expect(isEmptyObject(r.Type)).toBe(false);
                    expect(isEmptyObject(cc.Dictionary)).toBe(false);
                });
                it('should return false for the prototypes of primitive types', () => {
                    expect(isEmptyObject(Number.prototype)).toBe(false);
                    expect(isEmptyObject(Boolean.prototype)).toBe(false);
                    expect(isEmptyObject(Date.prototype)).toBe(false);
                    expect(isEmptyObject(Array.prototype)).toBe(false);
                });
                it('should return false for modules with exported members', () => {
                    expect(isEmptyObject(Classical)).toBe(false);
                    expect(isEmptyObject(Classical.Utilities)).toBe(false);
                    expect(isEmptyObject(Classical.Collections)).toBe(false);
                    expect(isEmptyObject(Classical.Binding)).toBe(false);
                });
            });

            //#endregion isEmptyObject

            //#region isArray

            describe('isArray', () => {
                it('should only return true for arrays', function () {
                    expect(isArray([])).toBe(true);
                    expect(isArray([[],[]])).toBe(true);
                    expect(isArray([1, 2, 3])).toBe(true);
                    expect(isArray(arguments)).toBe(false);
                    expect(isArray(1)).toBe(false);
                    expect(isArray(NaN)).toBe(false);
                    expect(isArray(undefined)).toBe(false);
                    expect(isArray(null)).toBe(false);
                    expect(isArray(false)).toBe(false);
                });
            });

            //#endregion isArray

            //#region isFunction

            describe('isFunction', () => {
                it('should only return true for arrays', () => {
                    expect(isFunction(function(){ })).toBe(true);
                    expect(isFunction(function f() { })).toBe(true);
                    expect(isFunction(alert)).toBe(true);
                    expect(isFunction([])).toBe(false);
                    expect(isFunction(1)).toBe(false);
                    expect(isFunction(NaN)).toBe(false);
                    expect(isFunction(undefined)).toBe(false);
                    expect(isFunction(null)).toBe(false);
                    expect(isFunction(false)).toBe(false);
                });
            });

            //#endregion isFunction

    //#region Test Classes

    class SameByType {
        equals(other: any): boolean {
            if (Classical.Utilities.isNullOrUndefined(other) || !other.getType)
                return false;

            return this.is(other.getType().constructorFunction);
        }
    }

    class DifferentType { }

    //#endregion Test Classes
}