var Classical;
(function (Classical) {
    var Collections;
    (function (Collections) {
        var Spec;
        (function (Spec) {
            describe('Classical', function () {
                describe('Collections', function () {
                    //#region forall
                    describe('forall', function () {
                        it('Should enumerate an enumerable', function () {
                            var numbers = Collections.Enumerable.range(10);
                            var index = 0;
                            numbers.forEach(function (n) {
                                expect(n).toBe(index++);
                            });
                        });
                    });
                    //#endregion forall
                    //#region Array
                    var nativeArray = window.Array;
                    describe('Array', function () {
                        //#region equals
                        describe('equals', function () {
                            it('should describe an object as equal to itself', function () {
                                var instance = [];
                                expect(instance.equals(instance)).toBe(true);
                            });
                            it('should describe two instances of the same type as different', function () {
                                var firstInstance = [], secondInstance = [];
                                expect(firstInstance.equals(secondInstance)).toBe(false);
                                expect(secondInstance.equals(firstInstance)).toBe(false);
                            });
                            it('should describe two instances of different types as different', function () {
                                var firstInstance = [], secondInstance = {};
                                expect(firstInstance.equals(secondInstance)).toBe(false);
                                expect(secondInstance.equals(firstInstance)).toBe(false);
                            });
                        });
                        //#endregion Array
                        //#region getType
                        describe('getType', function () {
                            it('should return a type with the appropriate name.', function () {
                                var array = [];
                                expect(array.getType().name).toBe('Array');
                            });
                            it('should return a type that contains the constructor of the type.', function () {
                                var array = [];
                                expect(array.getType().constructorFunction === nativeArray).toBe(true);
                            });
                        });
                        //#endregion getType
                        //#region is
                        describe('is', function () {
                            it('should return True when comparing an object with its own type.', function () {
                                var obj = [];
                                expect(obj.is(nativeArray)).toBe(true);
                            });
                        });
                        //#endregion is
                        //#region getEnumerator
                        describe('getEnumerator', function () {
                            it('should return an enumerator that enumerates its elements.', function () {
                                var emptyArray = [], emptyEnumerator = emptyArray.getEnumerator(), array = [1, 2, 3], enumerator = array.getEnumerator();
                                expect(emptyEnumerator.moveNext()).toBe(false);
                                expect(enumerator.moveNext()).toBe(true);
                                expect(enumerator.current).toBe(1);
                                expect(enumerator.moveNext()).toBe(true);
                                expect(enumerator.current).toBe(2);
                                expect(enumerator.moveNext()).toBe(true);
                                expect(enumerator.current).toBe(3);
                                expect(enumerator.moveNext()).toBe(false);
                            });
                        });
                        ///#endregion getEnumerator
                        //#region array
                        describe('array', function () {
                            it('should return itself.', function () {
                                var emptyArray = [], array = [1, 2, 3];
                                expect(emptyArray.array()).toBe(emptyArray);
                                expect(array.array()).toBe(array);
                            });
                        });
                        ///#endregion array
                        //#region query
                        describe('query', function () {
                            it('should not be equal to the original array.', function () {
                                var emptyArray = [], array = [1, 2, 3];
                                expect(emptyArray.query()).not.toBe(emptyArray);
                                expect(array.query()).not.toBe(array);
                            });
                            it('should return an enumerable with the same elements.', function () {
                                var emptyArray = [], array = [1, 2, 3];
                                expect(emptyArray.query().array().length).toBe(0);
                                expect(array.query().array().length).toBe(3);
                                expect(array.query().array()[0]).toBe(1);
                                expect(array.query().array()[1]).toBe(2);
                                expect(array.query().array()[2]).toBe(3);
                            });
                        });
                        ///#endregion query
                    });
                    //#endregion Array
                    //#region Dictionary
                    describe('Dictionary', function () {
                        //#region add
                        describe('add', function () {
                            it('should add a key value pair to the dictionary for IObjects.', function () {
                                var map = new Collections.Dictionary(), first = {}, second = {}, third = {};
                                map
                                    .add(first, 1)
                                    .add(second, 2)
                                    .add(third, 3);
                                expect(map.getValue(first)).toBe(1);
                                expect(map.getValue(second)).toBe(2);
                                expect(map.getValue(third)).toBe(3);
                            });
                            it('should add a key value pair to the dictionary for primitives.', function () {
                                var map = new Collections.Dictionary();
                                map
                                    .add(0, '0')
                                    .add(1, '1')
                                    .add(2, '2');
                                expect(map.getValue(0)).toBe('0');
                                expect(map.getValue(1)).toBe('1');
                                expect(map.getValue(2)).toBe('2');
                            });
                            it('should rebalance correctly.', function () {
                                var map = new Collections.Dictionary();
                                for (var i = 0; i < 100; i++) {
                                    map.add(i, i.toString());
                                }
                                for (var i = 0; i < 100; i++) {
                                    expect(map.getValue(i)).toBe(i.toString());
                                }
                                expect(map._bucketIndex).toBe(4);
                            });
                        });
                        //#endregion add
                        //#region remove
                        describe('remove', function () {
                            it('should remove a key that is already in the dictionary.', function () {
                                var map = new Collections.Dictionary(), first = {}, second = {}, third = {};
                                map
                                    .add(first, 1)
                                    .add(second, 2)
                                    .add(third, 3);
                                expect(map.count()).toBe(3);
                                expect(map.getValue(first)).toBe(1);
                                map.remove(first);
                                expect(map.count()).toBe(2);
                                expect(map.getValue(first)).toBe(undefined);
                            });
                            it('should do nothing if a key is not in the dictionary.', function () {
                                var map = new Collections.Dictionary(), first = {}, second = {}, notAKey = {};
                                map
                                    .add(first, 1)
                                    .add(second, 2);
                                expect(map.getValue(notAKey)).toBe(undefined);
                                map.remove(notAKey);
                                expect(map.getValue(notAKey)).toBe(undefined);
                            });
                        });
                        //#endregion remove
                        //#region containsKey
                        describe('containsKey', function () {
                            it('should return True if a key is in the dictionary.', function () {
                                var map = new Collections.Dictionary(), first = {}, second = {}, third = {};
                                map
                                    .add(first, 1)
                                    .add(second, 2)
                                    .add(third, 3);
                                expect(map.containsKey(first)).toBe(true);
                            });
                            it('should return false if a key is not in the dictionary.', function () {
                                var map = new Collections.Dictionary(), first = {}, second = {}, notAKey = {};
                                map
                                    .add(first, 1)
                                    .add(second, 2);
                                expect(map.containsKey(notAKey)).toBe(false);
                            });
                        });
                        //#endregion containsKey
                        //#region clear
                        describe('clear', function () {
                            it('should have not effect on the count of the empty dictionary', function () {
                                var dictionary = new Collections.Dictionary();
                                expect(dictionary.count()).toBe(0);
                                dictionary.clear();
                                expect(dictionary.count()).toBe(0);
                            });
                            it('should enumerate the keys of a dictionary', function () {
                                var dictionary = new Collections.Dictionary()
                                    .add('0', 0)
                                    .add('1', 1)
                                    .add('2', 2);
                                expect(dictionary.count()).toBe(3);
                                dictionary.clear();
                                expect(dictionary.count()).toBe(0);
                            });
                        });
                        //#endregion keys
                        //#region count
                        describe('count', function () {
                            it('should return the number of elements in the dictionary', function () {
                                var map = new Collections.Dictionary();
                                expect(map.count()).toBe(0);
                                var numberOfElements = 100;
                                for (var i = 0; i < numberOfElements; i++) {
                                    map.add(i, i.toString());
                                }
                                expect(map.count()).toBe(numberOfElements);
                            });
                        });
                        //#endregion count
                        //#region keys
                        describe('keys', function () {
                            it('should return no elements for the empty dictionary', function () {
                                var dictionary = new Collections.Dictionary();
                                expect(dictionary.keys.count()).toBe(0);
                            });
                            it('should enumerate the keys of a dictionary', function () {
                                var dictionary = new Collections.Dictionary()
                                    .add('0', 0)
                                    .add('1', 1)
                                    .add('2', 2);
                                var count = 0;
                                dictionary.keys.forEach(function (key) {
                                    count++;
                                    expect(key).toBe(dictionary.getValue(key).toString());
                                });
                                expect(count).toBe(3);
                            });
                        });
                        //#endregion keys
                        //#region values
                        describe('values', function () {
                            it('should return no elements for the empty dictionary', function () {
                                var dictionary = new Collections.Dictionary();
                                expect(dictionary.values.count()).toBe(0);
                            });
                            it('should enumerate the values of a dictionary', function () {
                                var dictionary = new Collections.Dictionary()
                                    .add('0', 0)
                                    .add('1', 1)
                                    .add('2', 2);
                                var count = 0;
                                dictionary.values.forEach(function (value) {
                                    count++;
                                    expect(value).toBe(dictionary.getValue(value.toString()));
                                });
                                expect(count).toBe(3);
                            });
                        });
                        //#endregion values
                        //#region getEnumerator
                        describe('getEnumerator', function () {
                            it('should enumerate no elements in the empty dictionary', function () {
                                var dictionary = new Collections.Dictionary();
                                expect(dictionary.getEnumerator().moveNext()).toBe(false);
                            });
                            it('should enumerate the elements of a dictionary', function () {
                                var dictionary = new Collections.Dictionary()
                                    .add('0', 0)
                                    .add('1', 1)
                                    .add('2', 2);
                                var count = 0;
                                dictionary.forEach(function (value) {
                                    count++;
                                    expect(value.key).toBe(value.value.toString());
                                });
                                expect(count).toBe(3);
                            });
                        });
                        //#endregion getEnumerator
                    });
                    //#endregion Dictionary
                    //#region ImmutableCollection
                    describe("ImmutableCollection", function () {
                        //#region get
                        describe('get', function () {
                            it('should get the specified element', function () {
                                var elements = new Collections.ImmutableCollection([5, 7]);
                                expect(elements.get(0)).toBe(5);
                                expect(elements.get(1)).toBe(7);
                            });
                        });
                        //#endregion get
                        //#region getEnumerator
                        describe('getEnumerator', function () {
                            it('should return an enumerator that enumerates the collection', function () {
                                var elements = new Collections.ImmutableCollection([5, 7]);
                                var enumerator = elements.getEnumerator();
                                enumerator.moveNext();
                                expect(enumerator.current).toBe(5);
                                enumerator.moveNext();
                                expect(enumerator.current).toBe(7);
                            });
                        });
                        //#endregion getEnumerator
                        //#region query
                        describe('query', function () {
                            it('should return a queryable object', function () {
                                var elements = new Collections.ImmutableCollection([5, 7]);
                                elements.query().getType() === typeOf(Collections.Queryable);
                                expect(elements.query().count()).toBe(2);
                            });
                        });
                        //#endregion query
                        //#region array
                        describe('array', function () {
                            it('should return an array copy', function () {
                                var elements = new Collections.ImmutableCollection([5, 7]);
                                var array = elements.array();
                                expect(array[0]).toBe(5);
                                expect(array[1]).toBe(7);
                                array[0] = 8;
                                array = elements.array();
                                expect(array[0]).toBe(5);
                            });
                        });
                        //#endregion array
                        //#region count
                        describe('count', function () {
                            it('should return an count copy', function () {
                                var elements = new Collections.ImmutableCollection([5, 7]);
                                expect(elements.count()).toBe(2);
                            });
                        });
                        //#endregion count
                    });
                    //#endregion ImmutableCollection
                    //#region Queryable
                    describe('Queryable', function () {
                        //#region where
                        describe('where', function () {
                            it('should return the empty array from the empty array', function () {
                                var result = [].query()
                                    .where(function (item) { return true; })
                                    .array();
                                expect(result.length).toBe(0);
                            });
                            it('should return the values which satisfy the predicate', function () {
                                var result = [1, 2, 3, 4, 5, 6].query()
                                    .where(function (item) { return item % 2 === 0; })
                                    .array();
                                expect(result.length).toBe(3);
                                expect(result[0]).toBe(2);
                                expect(result[1]).toBe(4);
                                expect(result[2]).toBe(6);
                            });
                        });
                        //#endregion where
                        //#region select
                        describe('select', function () {
                            it('should return the empty array from the empty array', function () {
                                var result = [].query()
                                    .select(function (item) { return true; })
                                    .array();
                                expect(result.length).toBe(0);
                            });
                            it('should return the values which satisfy the predicate', function () {
                                var result = [{ value: 0 }, { value: 1 }, { value: 2 }].query()
                                    .select(function (item) { return item.value; })
                                    .array();
                                expect(result.length).toBe(3);
                                expect(result[0]).toBe(0);
                                expect(result[1]).toBe(1);
                                expect(result[2]).toBe(2);
                            });
                        });
                        //#endregion select
                        //#region selectMany
                        describe('selectMany', function () {
                            it('should return empty when selecting many empty sequences', function () {
                                var result = [{ items: [] }].query()
                                    .selectMany(function (item) { return item.items; })
                                    .array();
                                expect(result.length).toBe(0);
                                result =
                                    [{ items: [] }, { items: [] }, { items: [] }].query()
                                        .selectMany(function (item) { return item.items; })
                                        .array();
                                expect(result.length).toBe(0);
                            });
                            it('should return the concatenated values of all selected collections', function () {
                                var result = [{ items: [0, 1] }, { items: [2] }, { items: [3, 4] }].query()
                                    .selectMany(function (item) { return item.items; })
                                    .array();
                                expect(result.length).toBe(5);
                                expect(result[0]).toBe(0);
                                expect(result[1]).toBe(1);
                                expect(result[2]).toBe(2);
                                expect(result[3]).toBe(3);
                                expect(result[4]).toBe(4);
                            });
                            it('should ignore undefined sequences', function () {
                                var result = [
                                    { items: null },
                                    { items: [0, 1] },
                                    { items: undefined },
                                    { items: [2] },
                                    { items: null },
                                    { items: [3, 4] },
                                    { items: undefined }
                                ].query()
                                    .selectMany(function (item) { return item.items; })
                                    .array();
                                expect(result.length).toBe(5);
                                expect(result[0]).toBe(0);
                                expect(result[1]).toBe(1);
                                expect(result[2]).toBe(2);
                                expect(result[3]).toBe(3);
                                expect(result[4]).toBe(4);
                            });
                        });
                        //#endregion selectMany
                        //#region orderBy
                        describe('orderBy', function () {
                            it('should return the empty array from the empty array', function () {
                                var result = [].query()
                                    .orderBy(function (item) { return item.property; })
                                    .array();
                                expect(result.length).toBe(0);
                            });
                            it('should order the values of a string property', function () {
                                var result = [{ property: 'c' }, { property: 'a' }, { property: 'b' }].query()
                                    .orderBy(function (item) { return item.property; })
                                    .array();
                                expect(result.length).toBe(3);
                                expect(result[0].property).toBe('a');
                                expect(result[1].property).toBe('b');
                                expect(result[2].property).toBe('c');
                            });
                            it('should order the values of a number property', function () {
                                var result = [{ property: 2 }, { property: 0 }, { property: 1 }].query()
                                    .orderBy(function (item) { return item.property; })
                                    .array();
                                expect(result.length).toBe(3);
                                expect(result[0].property).toBe(0);
                                expect(result[1].property).toBe(1);
                                expect(result[2].property).toBe(2);
                            });
                            it('should place null values at the end', function () {
                                var result = [2, null, 3, null, 1].query()
                                    .orderBy(function (item) { return item; })
                                    .array();
                                expect(result.length).toBe(5);
                                expect(result[0]).toBe(1);
                                expect(result[1]).toBe(2);
                                expect(result[2]).toBe(3);
                                expect(result[3]).toBe(null);
                                expect(result[4]).toBe(null);
                            });
                            it('should place undefined values at the end', function () {
                                var result = [2, undefined, 3, undefined, 1].query()
                                    .orderBy(function (item) { return item; })
                                    .array();
                                expect(result.length).toBe(5);
                                expect(result[0]).toBe(1);
                                expect(result[1]).toBe(2);
                                expect(result[2]).toBe(3);
                                expect(result[3]).toBe(undefined);
                                expect(result[4]).toBe(undefined);
                            });
                            it('should place null and undefined values at the end', function () {
                                var result = [2, undefined, 3, null, 1].query()
                                    .orderBy(function (item) { return item; })
                                    .array();
                                expect(result.length).toBe(5);
                                expect(result[0]).toBe(1);
                                expect(result[1]).toBe(2);
                                expect(result[2]).toBe(3);
                                expect(Classical.Utilities.isDefined(result[3])).toBe(false);
                                expect(Classical.Utilities.isDefined(result[4])).toBe(false);
                            });
                        });
                        //#endregion orderBy
                        //#region orderByDescending
                        describe('orderByDescending', function () {
                            it('should return the empty array from the empty array', function () {
                                var result = [].query()
                                    .orderByDescending(function (item) { return item.property; })
                                    .array();
                                expect(result.length).toBe(0);
                            });
                            it('should order the values of a string property', function () {
                                var result = [{ property: 'c' }, { property: 'a' }, { property: 'b' }].query()
                                    .orderByDescending(function (item) { return item.property; })
                                    .array();
                                expect(result.length).toBe(3);
                                expect(result[0].property).toBe('c');
                                expect(result[1].property).toBe('b');
                                expect(result[2].property).toBe('a');
                            });
                            it('should order the values of a number property', function () {
                                var result = [{ property: 2 }, { property: 0 }, { property: 1 }].query()
                                    .orderByDescending(function (item) { return item.property; })
                                    .array();
                                expect(result.length).toBe(3);
                                expect(result[0].property).toBe(2);
                                expect(result[1].property).toBe(1);
                                expect(result[2].property).toBe(0);
                            });
                            it('should place null values at the end', function () {
                                var result = [2, null, 3, null, 1].query()
                                    .orderByDescending(function (item) { return item; })
                                    .array();
                                expect(result.length).toBe(5);
                                expect(result[4]).toBe(null);
                                expect(result[3]).toBe(null);
                                expect(result[2]).toBe(1);
                                expect(result[1]).toBe(2);
                                expect(result[0]).toBe(3);
                            });
                            it('should place undefined values at the end', function () {
                                var result = [2, undefined, 3, undefined, 1].query()
                                    .orderByDescending(function (item) { return item; })
                                    .array();
                                expect(result.length).toBe(5);
                                expect(result[4]).toBe(undefined);
                                expect(result[3]).toBe(undefined);
                                expect(result[2]).toBe(1);
                                expect(result[1]).toBe(2);
                                expect(result[0]).toBe(3);
                            });
                            it('should place null and undefined values at the end', function () {
                                var result = [2, undefined, 3, null, 1].query()
                                    .orderByDescending(function (item) { return item; })
                                    .array();
                                expect(result.length).toBe(5);
                                expect(Classical.Utilities.isDefined(result[4])).toBe(false);
                                expect(Classical.Utilities.isDefined(result[3])).toBe(false);
                                expect(result[2]).toBe(1);
                                expect(result[1]).toBe(2);
                                expect(result[0]).toBe(3);
                            });
                        });
                        //#endregion orderByDescending
                        //#region aggregate
                        describe('aggregate', function () {
                            it('should return undefined from an empty sequence.', function () {
                                var result = [].query().aggregate(function (first, second) { return first; });
                                expect(result).toBe(undefined);
                            });
                            it('should return the seed from an empty sequence when a seed is specified.', function () {
                                var result = [].query().aggregate(function (first, second) { return first; }, 1);
                                expect(result).toBe(1);
                            });
                            it('should sum the elements of a number array with the addition accumulator.', function () {
                                var result = [1, 2, 3, 4].query().aggregate(function (first, second) { return first + second; });
                                expect(result).toBe(10);
                            });
                            it('should sum the elements of a number array and the seed with the addition accumulator.', function () {
                                var result = [1, 2, 3, 4].query().aggregate(function (first, second) { return first + second; }, 5);
                                expect(result).toBe(15);
                            });
                            it('should sum the property values of elements of a number array with the addition accumulator.', function () {
                                var result = [
                                    { p: 1 },
                                    { p: 2 },
                                    { p: 3 },
                                    { p: 4 }
                                ].query()
                                    .aggregate(function (first, second) { return first + second.p; }, 0);
                                expect(result).toBe(10);
                            });
                        });
                        //#endregion aggregate
                        //#region sum
                        describe('sum', function () {
                            it('should return the undefined from an empty sequence.', function () {
                                var result = [].query().sum();
                                expect(result).toBe(undefined);
                            });
                            it('should sum the elements of a number array.', function () {
                                var result = [1, 2, 3, 4].query().sum();
                                expect(result).toBe(10);
                            });
                            it('should sum the elements of an object array with a numeric selector.', function () {
                                var result = [
                                    { p: 1 },
                                    { p: 2 },
                                    { p: 3 },
                                    { p: 4 }
                                ].query()
                                    .sum(function (item) { return item.p; });
                                expect(result).toBe(10);
                            });
                        });
                        //#endregion sum
                        //#region max
                        describe('max', function () {
                            it('should return the undefined from an empty sequence.', function () {
                                var result = [].query().max();
                                expect(result).toBe(undefined);
                            });
                            it('should return the largest element in a number array.', function () {
                                var result = [4, 2, 3, 4].query().max();
                                expect(result).toBe(4);
                            });
                            it('should return the largest value in an object array with a numeric selector.', function () {
                                var result = [
                                    { p: 1 },
                                    { p: 4 },
                                    { p: 3 },
                                    { p: 2 }
                                ].query()
                                    .max(function (item) { return item.p; });
                                expect(result).toBe(4);
                            });
                        });
                        //#endregion max
                        //#region min
                        describe('min', function () {
                            it('should return the undefined from an empty sequence.', function () {
                                var result = [].query().min();
                                expect(result).toBe(undefined);
                            });
                            it('should return the largest element in a number array.', function () {
                                var result = [4, 2, 1, 3].query().min();
                                expect(result).toBe(1);
                            });
                            it('should return the largest value in an object array with a numeric selector.', function () {
                                var result = [
                                    { p: 1 },
                                    { p: 4 },
                                    { p: 3 },
                                    { p: 2 }
                                ].query()
                                    .min(function (item) { return item.p; });
                                expect(result).toBe(1);
                            });
                        });
                        //#endregion min
                        //#region hasAny
                        describe('hasAny', function () {
                            it('should return whether the sequence contains any elements', function () {
                                expect([].query().hasAny()).toBe(false);
                                expect([1, 2, 3].query().hasAny(function (item) { return false; })).toBe(false);
                                expect([1, 2, 3].query().hasAny()).toBe(true);
                                expect([1, 2, 3].query().hasAny(function (item) { return true; })).toBe(true);
                            });
                        });
                        //#endregion hasAny
                        //#region hasNone
                        describe('hasNone', function () {
                            it('should return whether the sequence does not contain any elements', function () {
                                expect([].query().hasNone()).toBe(true);
                                expect([1, 2, 3].query().hasNone(function (item) { return false; })).toBe(true);
                                expect([1, 2, 3].query().hasNone()).toBe(false);
                                expect([1, 2, 3].query().hasNone(function (item) { return true; })).toBe(false);
                            });
                        });
                        //#endregion hasNone
                        //#region first
                        describe('first', function () {
                            it('should return the first element of a non-empty sequence', function () {
                                expect([1].query().first()).toBe(1);
                                expect([1, 2, 3].query().first(function (item) { return item === 2; })).toBe(2);
                                expect(['a', 'b'].query().first()).toBe('a');
                            });
                            it('should throw an exception for the empty sequence', function () {
                                expect(function () { return [].query().first(); }).toThrow();
                                expect(function () { return [1, 2, 3].query().first(function (item) { return false; }); }).toThrow();
                            });
                        });
                        //#endregion first
                        //#region firstOrDefault
                        describe('firstOrDefault', function () {
                            it('should return the first element of a non-empty sequence', function () {
                                expect([1].query().firstOrDefault()).toBe(1);
                                expect([1, 2, 3].query().firstOrDefault(function (item) { return item === 2; })).toBe(2);
                                expect(['a', 'b'].query().firstOrDefault()).toBe('a');
                            });
                            it('should return null for the empty sequence', function () {
                                expect([].query().firstOrDefault()).toBe(null);
                                expect([1, 2, 3].query().firstOrDefault(function (item) { return false; })).toBe(null);
                            });
                        });
                        //#endregion firstOrDefault
                        //#region last
                        describe('last', function () {
                            it('should return the last element of a non-empty sequence', function () {
                                expect([1].query().last()).toBe(1);
                                expect([1, 2, 3].query().last(function (item) { return item === 2; })).toBe(2);
                                expect(['a', 'b'].query().last()).toBe('b');
                            });
                            it('should throw an exception for the empty sequence', function () {
                                expect(function () { return [].query().last(); }).toThrow();
                                expect(function () { return [1, 2, 3].query().last(function (item) { return false; }); }).toThrow();
                            });
                        });
                        //#endregion last
                        //#region lastOrDefault
                        describe('lastOrDefault', function () {
                            it('should return the last element of a non-empty sequence', function () {
                                expect([1].query().lastOrDefault()).toBe(1);
                                expect([1, 2, 3].query().lastOrDefault(function (item) { return item === 2; })).toBe(2);
                                expect(['a', 'b'].query().lastOrDefault()).toBe('b');
                            });
                            it('should return null for the empty sequence', function () {
                                expect([].query().lastOrDefault()).toBe(null);
                                expect([1, 2, 3].query().lastOrDefault(function (item) { return false; })).toBe(null);
                            });
                        });
                        //#endregion lastOrDefault
                        //#region single
                        describe('single', function () {
                            it('should return the only element of a unitary sequence', function () {
                                expect([1].query().single()).toBe(1);
                                expect([1, 2, 3].query().single(function (item) { return item === 2; })).toBe(2);
                                expect(['a'].query().single()).toBe('a');
                            });
                            it('should throw an exception for the empty sequence', function () {
                                expect(function () { return [].query().single(); }).toThrow();
                                expect(function () { return [1, 2, 3].query().single(function (item) { return false; }); }).toThrow();
                            });
                            it('should throw an exception for sequences with more than one element', function () {
                                expect(function () { return [1, 2].query().single(); }).toThrow();
                                expect(function () { return [1, 2, 3].query().single(function (item) { return item !== 3; }); }).toThrow();
                            });
                        });
                        //#endregion single
                        //#region singleOrDefault
                        describe('singleOrDefault', function () {
                            it('should return the only element of a unitary sequence', function () {
                                expect([1].query().singleOrDefault()).toBe(1);
                                expect([1, 2, 3].query().singleOrDefault(function (item) { return item === 2; })).toBe(2);
                                expect(['a'].query().singleOrDefault()).toBe('a');
                            });
                            it('should return null for the empty sequence', function () {
                                expect([].query().singleOrDefault()).toBe(null);
                                expect([1, 2, 3].query().singleOrDefault(function (item) { return false; })).toBe(null);
                            });
                            it('should throw an exception for sequences with more than one element', function () {
                                expect(function () { return [1, 2].query().singleOrDefault(); }).toThrow();
                                expect(function () { return [1, 2, 3].query().singleOrDefault(function (item) { return item !== 3; }); }).toThrow();
                            });
                        });
                        //#endregion singleOrDefault
                        //#region skip
                        describe('skip', function () {
                            it('should return the empty array from the empty array', function () {
                                expect([].query().skip(5).count()).toBe(0);
                                expect([1, 2, 3].query().where(function (item) { return false; }).skip(1).count()).toBe(0);
                                expect([].query().skip(0).count()).toBe(0);
                            });
                            it('should skip the specified number of elements and return the rest', function () {
                                var result = [-2, -1, 0, 1].query().skip(2).array();
                                expect(result.count()).toBe(2);
                                expect(result[0]).toBe(0);
                                expect(result[1]).toBe(1);
                            });
                            it('should be empty if the sequence has less elements than the number to skip', function () {
                                expect([1].query().skip(2).count()).toBe(0);
                                expect([1, 2, 3].query().skip(12).count()).toBe(0);
                            });
                            it('should throw an exception if the count is less than zero', function () {
                                expect(function () { return [].query().skip(-1); }).toThrow();
                            });
                        });
                        //#endregion skip
                        //#region take
                        describe('take', function () {
                            it('should return the empty array from the empty array', function () {
                                expect([].query().take(5).count()).toBe(0);
                                expect([1, 2, 3].query().where(function (item) { return false; }).take(1).count()).toBe(0);
                                expect([].query().take(0).count()).toBe(0);
                            });
                            it('should return the specified number of elements from the beginning of the sequence', function () {
                                var result = [0, 1, 2, 3].query().take(2).array();
                                expect(result.count()).toBe(2);
                                expect(result[0]).toBe(0);
                                expect(result[1]).toBe(1);
                                var result = [0, 1, 2, 3].query().take(2).array();
                                expect([0, 1, 2].query().take(0).count()).toBe(0);
                            });
                            it('should return the whole sequence if the number to take is larger than the sequence', function () {
                                var result = [0].query().take(2).array();
                                expect(result.count()).toBe(1);
                                expect(result[0]).toBe(0);
                                var result = [0, 1, 2].query().take(10).array();
                                expect(result.count()).toBe(3);
                                expect(result[0]).toBe(0);
                                expect(result[1]).toBe(1);
                                expect(result[2]).toBe(2);
                            });
                            it('should throw an exception if the count is less than zero', function () {
                                expect(function () { return [].query().take(-1); }).toThrow();
                            });
                        });
                        //#endregion take
                        //#region at
                        describe('at', function () {
                            it('should return the element at the specified index.', function () {
                                var items = [1, 2, 3, 4].query();
                                expect(items.at(0)).toBe(1);
                                expect(items.at(1)).toBe(2);
                                expect(items.at(2)).toBe(3);
                                expect(items.at(3)).toBe(4);
                            });
                        });
                        //#endregion at
                        //#region concat
                        describe('concat', function () {
                            it('should return empty when concatenating two empty sequences', function () {
                                expect([].query().concat([]).count()).toBe(0);
                            });
                            it('should return the non-empty sequence when the other sequence is empty', function () {
                                var result = [0, 1, 2].query()
                                    .concat([])
                                    .array();
                                expect(result.count()).toBe(3);
                                expect(result[0]).toBe(0);
                                expect(result[1]).toBe(1);
                                expect(result[2]).toBe(2);
                                result =
                                    [].query()
                                        .concat([0, 1, 2])
                                        .array();
                                expect(result.count()).toBe(3);
                                expect(result[0]).toBe(0);
                                expect(result[1]).toBe(1);
                                expect(result[2]).toBe(2);
                            });
                            it('should concatenate two non-empty sequences', function () {
                                var result = [0, 1].query()
                                    .concat([2, 3])
                                    .array();
                                expect(result.count()).toBe(4);
                                expect(result[0]).toBe(0);
                                expect(result[1]).toBe(1);
                                expect(result[2]).toBe(2);
                                expect(result[3]).toBe(3);
                            });
                        });
                        //#endregion concat
                        //#region distinct
                        describe('distinct', function () {
                            it('should return the empty array from the empty array', function () {
                                var result = [].query()
                                    .distinct()
                                    .array();
                                expect(result.length).toBe(0);
                            });
                            it('should return the distinct values of the collection', function () {
                                var result = [0, 1, 2, 2, 1, 0].query()
                                    .distinct()
                                    .array()
                                    .sort(function (first, second) { return first - second; });
                                expect(result.length).toBe(3);
                                expect(result[0]).toBe(0);
                                expect(result[1]).toBe(1);
                                expect(result[2]).toBe(2);
                            });
                        });
                        //#endregion distinct
                        //#region reverse
                        describe('reverse', function () {
                            it('should return the empty array from the empty array', function () {
                                var result = [].query()
                                    .reverse()
                                    .array();
                                expect(result.length).toBe(0);
                            });
                            it('should return the values in reverse order', function () {
                                var result = [1, 2, 3].query()
                                    .reverse()
                                    .array();
                                expect(result.length).toBe(3);
                                expect(result[0]).toBe(3);
                                expect(result[1]).toBe(2);
                                expect(result[2]).toBe(1);
                            });
                        });
                        //#endregion where
                        //#region dictionary
                        describe('dictionary', function () {
                            it('should return the empty dictionary from the empty array', function () {
                                expect([]
                                    .query()
                                    .dictionary(function (item) { return item; }, function (item) { return item; })
                                    .count())
                                    .toBe(0);
                            });
                            it('should return a dictionary with the specified keys and values', function () {
                                var result = [
                                    { key: 0, value: '0' },
                                    { key: 1, value: '1' }
                                ].query()
                                    .dictionary(function (item) { return item.key; }, function (item) { return item.value; });
                                expect(result.count()).toBe(2);
                                expect(result.getValue(0)).toBe('0');
                                expect(result.getValue(1)).toBe('1');
                            });
                        });
                        //#endregion dictionary
                        //#region execute
                        describe('execute', function () {
                            it('should return a queryable that has already been executed.', function () {
                                var counter = 0, query = [0].query()
                                    .select(function (x) { return ++counter; });
                                expect(counter).toBe(0);
                                query = query.execute();
                                expect(counter).toBe(1);
                                query.array();
                                expect(counter).toBe(1);
                            });
                        });
                        //#endregion execute
                        //#region result
                        describe('result', function () {
                            it('should return the result of executing a query and converting the value into an array.', function () {
                                var counter = 0, query = [0].query()
                                    .select(function (x) { return ++counter; });
                                expect(counter).toBe(0);
                                var result = query.result();
                                expect(result.length).toBe(1);
                                expect(result[0]).toBe(1);
                            });
                        });
                        //#endregion result
                    });
                    //#endregion Queryable
                    //#region Enumerable
                    describe('Enumerable', function () {
                        //#region range
                        describe('range', function () {
                            it('should return increasing numbers for a single positive input', function () {
                                var values = Collections.Enumerable.range(2).array();
                                expect(values[0]).toBe(0);
                                expect(values[1]).toBe(1);
                                expect(values[2]).toBe(2);
                            });
                            it('should return decreasing numbers for a single negative input', function () {
                                var values = Collections.Enumerable.range(-2).array();
                                expect(values[0]).toBe(0);
                                expect(values[1]).toBe(-1);
                                expect(values[2]).toBe(-2);
                            });
                            it('should return numbers in the specified range with each entry incremented by one', function () {
                                var values = Collections.Enumerable.range(1, 3).array();
                                expect(values[0]).toBe(1);
                                expect(values[1]).toBe(2);
                                expect(values[2]).toBe(3);
                                values = Collections.Enumerable.range(3, 1).array();
                                expect(values[0]).toBe(3);
                                expect(values[1]).toBe(2);
                                expect(values[2]).toBe(1);
                            });
                            it('should return numbers in the specified range with each entry incremented by the specified value', function () {
                                var values = Collections.Enumerable.range(1, .5, 2).array();
                                expect(values[0]).toBe(1);
                                expect(values[1]).toBe(1.5);
                                expect(values[2]).toBe(2);
                                values = Collections.Enumerable.range(2, -.5, 1).array();
                                expect(values[0]).toBe(2);
                                expect(values[1]).toBe(1.5);
                                expect(values[2]).toBe(1);
                            });
                            it('should return numbers within the range when the upperbound is not in the result', function () {
                                var values = Collections.Enumerable.range(1, .5, 2.1).array();
                                expect(values[0]).toBe(1);
                                expect(values[1]).toBe(1.5);
                                expect(values[2]).toBe(2);
                                values = Collections.Enumerable.range(2, -.5, .9).array();
                                expect(values[0]).toBe(2);
                                expect(values[1]).toBe(1.5);
                                expect(values[2]).toBe(1);
                            });
                        });
                        //#endregion range
                        //#region forEach
                        describe('forEach', function () {
                            it('should enumerate the members of the sequence.', function () {
                                forEachTest([]);
                                forEachTest([null]);
                                forEachTest([null, undefined, 1, 2, 3]);
                            });
                        });
                        function forEachTest(collection) {
                            var count = 0;
                            collection.forEach(function (item) {
                                expect(item).toBe(collection.array()[count++]);
                            });
                            expect(count).toBe(collection.count());
                        }
                        //#endregion forEach
                    });
                    //#endregion Enumerable
                });
            });
        })(Spec = Collections.Spec || (Collections.Spec = {}));
    })(Collections = Classical.Collections || (Classical.Collections = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Collections.spec.js.map