
module Classical.Collections.Spec {
    describe('Classical', () => {
        describe('Collections', () => {

            //#region forall

            describe('forall', () => {
                it('Should enumerate an enumerable', () => {
                    var numbers = Enumerable.range(10);
                    var index = 0;
                    numbers.forEach(n => {
                        expect(n).toBe(index++);
                    });
                    });
                });

            //#endregion forall

            //#region Array

            var nativeArray: any = (<any>window).Array;

            describe('Array', () => {

                //#region equals

                describe('equals', () => {
                    it('should describe an object as equal to itself', () => {
                        var instance: any = [];
                        expect(instance.equals(instance)).toBe(true);
                        });

                    it('should describe two instances of the same type as different', () => {
                        var firstInstance: any = [],
                            secondInstance: any = [];

                        expect(firstInstance.equals(secondInstance)).toBe(false);
                        expect(secondInstance.equals(firstInstance)).toBe(false);
                        });

                    it('should describe two instances of different types as different', () => {
                        var firstInstance: any = [],
                            secondInstance = {};

                        expect(firstInstance.equals(secondInstance)).toBe(false);
                        expect(secondInstance.equals(firstInstance)).toBe(false);
                        });
                    });

                //#endregion Array

                //#region getType

                describe('getType', () => {
                    it('should return a type with the appropriate name.', () => {
                        var array: any = [];

                        expect(array.getType().name).toBe('Array');
                    });

                    it('should return a type that contains the constructor of the type.', () => {
                        var array: any = [];

                        expect(array.getType().constructorFunction === nativeArray).toBe(true);
                    });
                });

                //#endregion getType

                //#region is

                describe('is', () => {
                    it('should return True when comparing an object with its own type.', () => {
                        var obj: any = [];

                        expect(obj.is(nativeArray)).toBe(true);
                });
                    });

                //#endregion is

                //#region getEnumerator

                describe('getEnumerator', () => {
                    it('should return an enumerator that enumerates its elements.', () => {
                        var emptyArray: any = [],
                            emptyEnumerator: IEnumerator<number> = emptyArray.getEnumerator(),
                            array: any = [1, 2, 3],
                            enumerator: IEnumerator<number> = array.getEnumerator();

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

                describe('array', () => {
                    it('should return itself.', () => {
                        var emptyArray: any = [],
                            array: any = [1, 2, 3];

                        expect(emptyArray.array()).toBe(emptyArray);
                        expect(array.array()).toBe(array);
                        });
                    });

                ///#endregion array

                //#region query

                describe('query', () => {
                    it('should not be equal to the original array.', () => {
                        var emptyArray: any = [],
                            array: any = [1, 2, 3];

                        expect(emptyArray.query()).not.toBe(emptyArray);
                        expect(array.query()).not.toBe(array);
                        });
                    it('should return an enumerable with the same elements.', () => {
                        var emptyArray: any = [],
                            array: any = [1, 2, 3];

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

            describe('Dictionary', () => {

                //#region add

                describe('add', () => {
                    it('should add a key value pair to the dictionary for IObjects.', () => {
                        var map = new Dictionary<Object, number>(),
                            first = {},
                            second = {},
                            third = {};

                        map
                        .add(first, 1)
                        .add(second, 2)
                        .add(third, 3);

                        expect(map.getValue(first)).toBe(1);
                        expect(map.getValue(second)).toBe(2);
                        expect(map.getValue(third)).toBe(3);
                        });
                    it('should add a key value pair to the dictionary for primitives.', () => {
                        var map = new Dictionary<number, string>();

                        map
                        .add(0, '0')
                        .add(1, '1')
                        .add(2, '2');

                        expect(map.getValue(0)).toBe('0');
                        expect(map.getValue(1)).toBe('1');
                        expect(map.getValue(2)).toBe('2');
                        });
                    it('should rebalance correctly.', () => {
                        var map = new Dictionary<number, string>();

                        for (var i = 0; i < 100; i++) {
                            map.add(i, i.toString());
                        }

                        for (var i = 0; i < 100; i++) {
                            expect(map.getValue(i)).toBe(i.toString());
                        }

                        expect((<any>map)._bucketIndex).toBe(4);
                        });
                    });

                //#endregion add

                //#region remove

                describe('remove', () => {
                    it('should remove a key that is already in the dictionary.', () => {
                        var map = new Dictionary<Object, number>(),
                            first = {},
                            second = {},
                            third = {};

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
                    it('should do nothing if a key is not in the dictionary.', () => {
                        var map = new Dictionary<Object, number>(),
                            first = {},
                            second = {},
                            notAKey = {};

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

                describe('containsKey', () => {
                    it('should return True if a key is in the dictionary.', () => {
                        var map = new Dictionary<Object, number>(),
                            first = {},
                            second = {},
                            third = {};

                        map
                        .add(first, 1)
                        .add(second, 2)
                        .add(third, 3);

                        expect(map.containsKey(first)).toBe(true);
                        });
                    it('should return false if a key is not in the dictionary.', () => {
                        var map = new Dictionary<Object, number>(),
                            first = {},
                            second = {},
                            notAKey = {};

                        map
                        .add(first, 1)
                        .add(second, 2);

                        expect(map.containsKey(notAKey)).toBe(false);
                        });
                    });

                //#endregion containsKey

                //#region clear

                describe('clear', () => {
                    it('should have not effect on the count of the empty dictionary', () => {
                        var dictionary = new Dictionary<number, string>();
                        expect(dictionary.count()).toBe(0);

                        dictionary.clear();
                        expect(dictionary.count()).toBe(0);
                    });
                    it('should enumerate the keys of a dictionary', () => {
                        var dictionary =
                            new Dictionary<string, number>()
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

                describe('count', () => {
                    it('should return the number of elements in the dictionary', () => {
                        var map = new Dictionary<number, string>();

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

                describe('keys', () => {
                    it('should return no elements for the empty dictionary', () => {
                        var dictionary = new Dictionary<number, string>();
                        expect(dictionary.keys.count()).toBe(0);
                    });
                    it('should enumerate the keys of a dictionary', () => {
                        var dictionary =
                            new Dictionary<string, number>()
                                .add('0', 0)
                                .add('1', 1)
                                .add('2', 2);

                        var count = 0;
                        dictionary.keys.forEach(key => {
                            count++;
                            expect(key).toBe(dictionary.getValue(key).toString());
                        });

                        expect(count).toBe(3);
                    });
                });

                //#endregion keys

                //#region values

                describe('values', () => {
                    it('should return no elements for the empty dictionary', () => {
                        var dictionary = new Dictionary<number, string>();
                        expect(dictionary.values.count()).toBe(0);
                    });
                    it('should enumerate the values of a dictionary', () => {
                        var dictionary =
                            new Dictionary<string, number>()
                                .add('0', 0)
                                .add('1', 1)
                                .add('2', 2);

                        var count = 0;
                        dictionary.values.forEach(value => {
                            count++;
                            expect(value).toBe(dictionary.getValue(value.toString()));
                        });

                        expect(count).toBe(3);
                    });
                });

                //#endregion values

                //#region getEnumerator

                describe('getEnumerator', () => {
                    it('should enumerate no elements in the empty dictionary', () => {
                        var dictionary = new Dictionary<number, string>();
                        expect(dictionary.getEnumerator().moveNext()).toBe(false);
                        });
                    it('should enumerate the elements of a dictionary', () => {
                        var dictionary =
                            new Dictionary<string, number>()
                            .add('0', 0)
                            .add('1', 1)
                            .add('2', 2);

                        var count = 0;
                        dictionary.forEach(value => {
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

            describe("ImmutableCollection", () => {

                //#region get

                describe('get', () => {
                    it('should get the specified element', () => {
                        var elements = new ImmutableCollection([5, 7]);
                        expect(elements.get(0)).toBe(5);
                        expect(elements.get(1)).toBe(7);
                    });
                });

                //#endregion get

                //#region getEnumerator

                describe('getEnumerator', () => {
                    it('should return an enumerator that enumerates the collection', () => {
                        var elements = new ImmutableCollection([5, 7]);

                        var enumerator = elements.getEnumerator();
                        enumerator.moveNext();
                        expect(enumerator.current).toBe(5);

                        enumerator.moveNext();
                        expect(enumerator.current).toBe(7);
                    });
                    
                });

                //#endregion getEnumerator

                //#region query

                describe('query', () => {
                    it('should return a queryable object', () => {
                        var elements = new ImmutableCollection([5, 7]);

                        elements.query().getType() === typeOf(Queryable);
                        expect(elements.query().count()).toBe(2);
                    });
                });

                //#endregion query

                //#region array

                describe('array', () => {
                    it('should return an array copy', () => {
                        var elements = new ImmutableCollection([5, 7]);

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

                describe('count', () => {
                    it('should return an count copy', () => {
                        var elements = new ImmutableCollection([5, 7]);
                        expect(elements.count()).toBe(2);
                    });
                });

                //#endregion count
            });

            //#endregion ImmutableCollection

            //#region Queryable

            describe('Queryable', () => {
            
                //#region where

                describe('where', () => {
                    it('should return the empty array from the empty array', () => {
                        var result =
                            [].query()
                            .where(item => true)
                            .array();

                        expect(result.length).toBe(0);
                
                        });
                    it('should return the values which satisfy the predicate', () => {
                        var result =
                            [1, 2, 3, 4, 5, 6].query()
                            .where(item => <number>item % 2 === 0)
                            .array();

                        expect(result.length).toBe(3);
                        expect(result[0]).toBe(2);
                        expect(result[1]).toBe(4);
                        expect(result[2]).toBe(6);
                });
                    });

                //#endregion where

                //#region select

                describe('select', () => {
                    it('should return the empty array from the empty array', () => {
                        var result =
                            [].query()
                            .select(item => true)
                            .array();

                        expect(result.length).toBe(0);

                        });
                    it('should return the values which satisfy the predicate', () => {
                        var result =
                            [{ value: 0 }, { value: 1 }, { value: 2 }].query()
                            .select(item => item.value)
                            .array();

                        expect(result.length).toBe(3);
                        expect(result[0]).toBe(0);
                        expect(result[1]).toBe(1);
                        expect(result[2]).toBe(2);
                        });
                    });

                //#endregion select

                //#region selectMany

                describe('selectMany', () => {
                    it('should return empty when selecting many empty sequences', () => {
                        var result =
                            [{ items: [] }].query()
                            .selectMany(item => item.items)
                            .array();

                        expect(result.length).toBe(0);

                        result =
                            [{ items: [] }, { items: [] }, { items: [] }].query()
                            .selectMany(item => item.items)
                            .array();

                        expect(result.length).toBe(0);

                    });
                    it('should return the concatenated values of all selected collections', () => {
                        var result =
                            [{ items: [0, 1] }, { items: [2] }, { items: [3, 4] }].query()
                            .selectMany(item => item.items)
                            .array();

                        expect(result.length).toBe(5);
                        expect(result[0]).toBe(0);
                        expect(result[1]).toBe(1);
                        expect(result[2]).toBe(2);
                        expect(result[3]).toBe(3);
                        expect(result[4]).toBe(4);
                    });
                    it('should ignore undefined sequences', () => {
                        var result =
                            [
                                { items: null },
                                { items: [0, 1] },
                                { items: undefined },
                                { items: [2] },
                                { items: null },
                                { items: [3, 4] },
                                { items: undefined }
                            ].query()
                            .selectMany(item => item.items)
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

                describe('orderBy', () => {
                    it('should return the empty array from the empty array', () => {
                        var result =
                            [].query()
                            .orderBy(item => (<any>item).property)
                            .array();

                        expect(result.length).toBe(0);

                    });
                    it('should order the values of a string property', () => {
                        var result =
                            [{ property: 'c' }, { property: 'a' }, { property: 'b' }].query()
                            .orderBy(item => (<any>item).property)
                            .array();

                        expect(result.length).toBe(3);
                        expect(result[0].property).toBe('a');
                        expect(result[1].property).toBe('b');
                        expect(result[2].property).toBe('c');
                    });
                    it('should order the values of a number property', () => {
                        var result =
                            [{ property: 2 }, { property: 0 }, { property: 1 }].query()
                            .orderBy(item => item.property)
                            .array();

                        expect(result.length).toBe(3);
                        expect(result[0].property).toBe(0);
                        expect(result[1].property).toBe(1);
                        expect(result[2].property).toBe(2);
                    });
                    it('should place null values at the end', () => {
                        var result =
                            [2, null, 3, null, 1].query()
                                .orderBy(item => item)
                                .array();

                        expect(result.length).toBe(5);
                        expect(result[0]).toBe(1);
                        expect(result[1]).toBe(2);
                        expect(result[2]).toBe(3);
                        expect(result[3]).toBe(null);
                        expect(result[4]).toBe(null);
                    });
                    it('should place undefined values at the end', () => {
                        var result =
                            [2, undefined, 3, undefined, 1].query()
                                .orderBy(item => item)
                                .array();

                        expect(result.length).toBe(5);
                        expect(result[0]).toBe(1);
                        expect(result[1]).toBe(2);
                        expect(result[2]).toBe(3);
                        expect(result[3]).toBe(undefined);
                        expect(result[4]).toBe(undefined);
                    });
                    it('should place null and undefined values at the end', () => {
                        var result =
                            [2, undefined, 3, null, 1].query()
                                .orderBy(item => item)
                                .array();

                        expect(result.length).toBe(5);
                        expect(result[0]).toBe(1);
                        expect(result[1]).toBe(2);
                        expect(result[2]).toBe(3);
                        expect(Utilities.isDefined(result[3])).toBe(false);
                        expect(Utilities.isDefined(result[4])).toBe(false);
                    });
                });

                //#endregion orderBy

                //#region orderByDescending

                describe('orderByDescending', () => {
                    it('should return the empty array from the empty array', () => {
                        var result =
                            [].query()
                            .orderByDescending(item => (<any>item).property)
                            .array();

                        expect(result.length).toBe(0);

                    });
                    it('should order the values of a string property', () => {
                        var result =
                            [{ property: 'c' }, { property: 'a' }, { property: 'b' }].query()
                            .orderByDescending(item => (<any>item).property)
                            .array();

                        expect(result.length).toBe(3);
                        expect(result[0].property).toBe('c');
                        expect(result[1].property).toBe('b');
                        expect(result[2].property).toBe('a');
                    });
                    it('should order the values of a number property', () => {
                        var result =
                            [{ property: 2 }, { property: 0 }, { property: 1 }].query()
                            .orderByDescending(item => item.property)
                            .array();

                        expect(result.length).toBe(3);
                        expect(result[0].property).toBe(2);
                        expect(result[1].property).toBe(1);
                        expect(result[2].property).toBe(0);
                    });
                    it('should place null values at the end', () => {
                        var result =
                            [2, null, 3, null, 1].query()
                                .orderByDescending(item => item)
                                .array();

                        expect(result.length).toBe(5);
                        expect(result[4]).toBe(null);
                        expect(result[3]).toBe(null);
                        expect(result[2]).toBe(1);
                        expect(result[1]).toBe(2);
                        expect(result[0]).toBe(3);
                    });
                    it('should place undefined values at the end', () => {
                        var result =
                            [2, undefined, 3, undefined, 1].query()
                                .orderByDescending(item => item)
                                .array();

                        expect(result.length).toBe(5);
                        expect(result[4]).toBe(undefined);
                        expect(result[3]).toBe(undefined);
                        expect(result[2]).toBe(1);
                        expect(result[1]).toBe(2);
                        expect(result[0]).toBe(3);
                    });
                    it('should place null and undefined values at the end', () => {
                        var result =
                            [2, undefined, 3, null, 1].query()
                                .orderByDescending(item => item)
                                .array();

                        expect(result.length).toBe(5);
                        expect(Utilities.isDefined(result[4])).toBe(false);
                        expect(Utilities.isDefined(result[3])).toBe(false);
                        expect(result[2]).toBe(1);
                        expect(result[1]).toBe(2);
                        expect(result[0]).toBe(3);
                    });
                });

                //#endregion orderByDescending

                //#region aggregate

                describe('aggregate', () => {
                    it('should return undefined from an empty sequence.', () => {
                        var result = [].query().aggregate((first, second) => first);
                        expect(result).toBe(undefined);
                    });
                    it('should return the seed from an empty sequence when a seed is specified.', () => {
                        var result = [].query().aggregate((first, second) => first, 1);
                        expect(result).toBe(1);
                    });
                    it('should sum the elements of a number array with the addition accumulator.', () => {
                        var result = [1, 2, 3, 4].query().aggregate<number>((first, second) => first + second);
                        expect(result).toBe(10);
                    });
                    it('should sum the elements of a number array and the seed with the addition accumulator.', () => {
                        var result = [1, 2, 3, 4].query().aggregate<number>((first, second) => first + second, 5);
                        expect(result).toBe(15);
                    });
                    it('should sum the property values of elements of a number array with the addition accumulator.', () => {
                        var result = [
                            { p: 1 },
                            { p: 2 },
                            { p: 3 },
                            { p: 4 }
                        ].query()
                        .aggregate<number>((first, second) => first + second.p, 0);
                        expect(result).toBe(10);
                    });
                });

                //#endregion aggregate

                //#region sum

                describe('sum', () => {
                    it('should return the undefined from an empty sequence.', () => {
                        var result = [].query().sum();
                        expect(result).toBe(undefined);
                    });
                    it('should sum the elements of a number array.', () => {
                        var result = [1, 2, 3, 4].query().sum();
                        expect(result).toBe(10);
                    });
                    it('should sum the elements of an object array with a numeric selector.', () => {
                        var result = [
                            { p: 1 },
                            { p: 2 },
                            { p: 3 },
                            { p: 4 }
                        ].query()
                        .sum(item => item.p);

                        expect(result).toBe(10);
                    });
                });

                //#endregion sum

                //#region max

                describe('max', () => {
                    it('should return the undefined from an empty sequence.', () => {
                        var result = [].query().max();
                        expect(result).toBe(undefined);
                    });
                    it('should return the largest element in a number array.', () => {
                        var result = [4, 2, 3, 4].query().max();
                        expect(result).toBe(4);
                    });
                    it('should return the largest value in an object array with a numeric selector.', () => {
                        var result = [
                            { p: 1 },
                            { p: 4 },
                            { p: 3 },
                            { p: 2 }
                        ].query()
                        .max(item => item.p);

                        expect(result).toBe(4);
                    });
                });

                //#endregion max

                //#region min

                describe('min', () => {
                    it('should return the undefined from an empty sequence.', () => {
                        var result = [].query().min();
                        expect(result).toBe(undefined);
                    });
                    it('should return the largest element in a number array.', () => {
                        var result = [4, 2, 1, 3].query().min();
                        expect(result).toBe(1);
                    });
                    it('should return the largest value in an object array with a numeric selector.', () => {
                        var result = [
                            { p: 1 },
                            { p: 4 },
                            { p: 3 },
                            { p: 2 }
                        ].query()
                            .min(item => item.p);

                        expect(result).toBe(1);
                    });
                });

                //#endregion min

                //#region hasAny

                describe('hasAny', () => {
                    it('should return whether the sequence contains any elements', () => {
                        expect([].query().hasAny()).toBe(false);
                        expect([1, 2, 3].query().hasAny(item => false)).toBe(false);
                        expect([1, 2, 3].query().hasAny()).toBe(true);
                        expect([1, 2, 3].query().hasAny(item => true)).toBe(true);
                    });
                });

                //#endregion hasAny

                //#region hasNone

                describe('hasNone', () => {
                    it('should return whether the sequence does not contain any elements', () => {
                        expect([].query().hasNone()).toBe(true);
                        expect([1, 2, 3].query().hasNone(item => false)).toBe(true);
                        expect([1, 2, 3].query().hasNone()).toBe(false);
                        expect([1, 2, 3].query().hasNone(item => true)).toBe(false);
                        });
                    });

                //#endregion hasNone

                //#region first

                describe('first', () => {
                    it('should return the first element of a non-empty sequence', () => {
                        expect([1].query().first()).toBe(1);
                        expect([1, 2, 3].query().first(item => item === 2)).toBe(2);
                        expect(['a', 'b'].query().first()).toBe('a');
                        });
                    it('should throw an exception for the empty sequence', () => {
                        expect(() => [].query().first()).toThrow();
                        expect(() => [1, 2, 3].query().first(item => false)).toThrow();
                        });
                });

                //#endregion first

                //#region firstOrDefault

                describe('firstOrDefault', () => {
                    it('should return the first element of a non-empty sequence', () => {
                        expect([1].query().firstOrDefault()).toBe(1);
                        expect([1, 2, 3].query().firstOrDefault(item => item === 2)).toBe(2);
                        expect(['a', 'b'].query().firstOrDefault()).toBe('a');
                        });
                    it('should return null for the empty sequence', () => {
                        expect([].query().firstOrDefault()).toBe(null);
                        expect([1, 2, 3].query().firstOrDefault(item => false)).toBe(null);
                    });
                });

                //#endregion firstOrDefault

                //#region last

                describe('last', () => {
                    it('should return the last element of a non-empty sequence', () => {
                        expect([1].query().last()).toBe(1);
                        expect([1, 2, 3].query().last(item => item === 2)).toBe(2);
                        expect(['a', 'b'].query().last()).toBe('b');
                    });
                    it('should throw an exception for the empty sequence', () => {
                        expect(() => [].query().last()).toThrow();
                        expect(() => [1, 2, 3].query().last(item => false)).toThrow();
                    });
                });

                //#endregion last

                //#region lastOrDefault

                describe('lastOrDefault', () => {
                    it('should return the last element of a non-empty sequence', () => {
                        expect([1].query().lastOrDefault()).toBe(1);
                        expect([1, 2, 3].query().lastOrDefault(item => item === 2)).toBe(2);
                        expect(['a', 'b'].query().lastOrDefault()).toBe('b');
                    });
                    it('should return null for the empty sequence', () => {
                        expect([].query().lastOrDefault()).toBe(null);
                        expect([1, 2, 3].query().lastOrDefault(item => false)).toBe(null);
                    });
                });

                //#endregion lastOrDefault

                //#region single

                describe('single', () => {
                    it('should return the only element of a unitary sequence', () => {
                        expect([1].query().single()).toBe(1);
                        expect([1, 2, 3].query().single(item => item === 2)).toBe(2);
                        expect(['a'].query().single()).toBe('a');
                    });
                    it('should throw an exception for the empty sequence', () => {
                        expect(() => [].query().single()).toThrow();
                        expect(() => [1, 2, 3].query().single(item => false)).toThrow();
                        });
                    it('should throw an exception for sequences with more than one element', () => {
                        expect(() => [1, 2].query().single()).toThrow();
                        expect(() => [1, 2, 3].query().single(item => item !== 3)).toThrow();
                        });
                });

                //#endregion single

                //#region singleOrDefault

                describe('singleOrDefault', () => {
                    it('should return the only element of a unitary sequence', () => {
                        expect([1].query().singleOrDefault()).toBe(1);
                        expect([1, 2, 3].query().singleOrDefault(item => item === 2)).toBe(2);
                        expect(['a'].query().singleOrDefault()).toBe('a');
                        });
                    it('should return null for the empty sequence', () => {
                        expect([].query().singleOrDefault()).toBe(null);
                        expect([1, 2, 3].query().singleOrDefault(item => false)).toBe(null);
                        });
                    it('should throw an exception for sequences with more than one element', () => {
                        expect(() => [1, 2].query().singleOrDefault()).toThrow();
                        expect(() => [1, 2, 3].query().singleOrDefault(item => item !== 3)).toThrow();
                        });
                    });

                //#endregion singleOrDefault

                //#region skip

                describe('skip', () => {
                    it('should return the empty array from the empty array', () => {
                        expect([].query().skip(5).count()).toBe(0);
                        expect([1, 2, 3].query().where(item => false).skip(1).count()).toBe(0);
                        expect([].query().skip(0).count()).toBe(0);

                        });
                    it('should skip the specified number of elements and return the rest', () => {
                        var result = [-2, -1, 0, 1].query().skip(2).array();
                        expect(result.count()).toBe(2);
                        expect(result[0]).toBe(0);
                        expect(result[1]).toBe(1);
                    });
                    it('should be empty if the sequence has less elements than the number to skip', () => {
                        expect([1].query().skip(2).count()).toBe(0);
                        expect([1, 2, 3].query().skip(12).count()).toBe(0);
                    });
                    it('should throw an exception if the count is less than zero', () => {
                        expect(() => [].query().skip(-1)).toThrow();
                    });
                    });

                //#endregion skip

                //#region take

                describe('take', () => {
                    it('should return the empty array from the empty array', () => {
                        expect([].query().take(5).count()).toBe(0);
                        expect([1, 2, 3].query().where(item => false).take(1).count()).toBe(0);
                        expect([].query().take(0).count()).toBe(0);

                        });
                    it('should return the specified number of elements from the beginning of the sequence', () => {
                        var result = [0, 1, 2, 3].query().take(2).array();
                        expect(result.count()).toBe(2);
                        expect(result[0]).toBe(0);
                        expect(result[1]).toBe(1);

                        var result = [0, 1, 2, 3].query().take(2).array();
                        expect([0, 1, 2].query().take(0).count()).toBe(0);
                    });
                    it('should return the whole sequence if the number to take is larger than the sequence', () => {
                        var result = [0].query().take(2).array();
                        expect(result.count()).toBe(1);
                        expect(result[0]).toBe(0);

                        var result = [0, 1, 2].query().take(10).array();
                        expect(result.count()).toBe(3);
                        expect(result[0]).toBe(0);
                        expect(result[1]).toBe(1);
                        expect(result[2]).toBe(2);
                    });
                    it('should throw an exception if the count is less than zero', () => {
                        expect(() => [].query().take(-1)).toThrow();
                    });
                    });

                //#endregion take

                //#region at

                describe('at', () => {
                    it('should return the element at the specified index.', () => {
                            var items = [1, 2, 3, 4].query();
                        expect(items.at(0)).toBe(1);
                        expect(items.at(1)).toBe(2);
                        expect(items.at(2)).toBe(3);
                        expect(items.at(3)).toBe(4);
                    });
                });

                //#endregion at

                //#region concat

                describe('concat', () => {
                    it('should return empty when concatenating two empty sequences', () => {
                        expect([].query().concat([]).count()).toBe(0);
                    });
                    it('should return the non-empty sequence when the other sequence is empty', () => {
                        var result =
                            [0, 1, 2].query()
                            .concat((<number[]>[]))
                            .array();

                        expect(result.count()).toBe(3);
                        expect(result[0]).toBe(0);
                        expect(result[1]).toBe(1);
                        expect(result[2]).toBe(2);

                        result =
                            (<number[]>[]).query()
                            .concat([0, 1, 2])
                            .array();

                        expect(result.count()).toBe(3);
                        expect(result[0]).toBe(0);
                        expect(result[1]).toBe(1);
                        expect(result[2]).toBe(2);
                        });
                    it('should concatenate two non-empty sequences', () => {
                        var result =
                            [0, 1].query()
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

                describe('distinct', () => {
                    it('should return the empty array from the empty array', () => {
                        var result =
                            [].query()
                            .distinct()
                            .array();

                        expect(result.length).toBe(0);

                        });
                    it('should return the distinct values of the collection', () => {
                        var result =
                            [0, 1, 2, 2, 1, 0].query()
                            .distinct()
                            .array()
                            .sort((first, second) => first - second);

                        expect(result.length).toBe(3);
                        expect(result[0]).toBe(0);
                        expect(result[1]).toBe(1);
                        expect(result[2]).toBe(2);
                        });
                    });

                //#endregion distinct

                //#region reverse

                describe('reverse', () => {
                    it('should return the empty array from the empty array', () => {
                        var result =
                            [].query()
                                .reverse()
                                .array();

                        expect(result.length).toBe(0);

                        });
                    it('should return the values in reverse order', () => {
                        var result =
                            [1, 2, 3].query()
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

                describe('dictionary', () => {
                    it('should return the empty dictionary from the empty array', () => {
                        expect([]
                            .query()
                            .dictionary(
                                item => item,
                                item => item)
                            .count())
                        .toBe(0);
                    });
                    it('should return a dictionary with the specified keys and values', () => {
                        var result = [
                            { key: 0, value: '0' },
                            { key: 1, value: '1' }
                        ].query()
                        .dictionary(
                            item => <number>item.key,
                            item => <string>item.value);

                        expect(result.count()).toBe(2);
                        expect(result.getValue(0)).toBe('0');
                        expect(result.getValue(1)).toBe('1');
                        });
                    });

                //#endregion dictionary

                //#region execute

                describe('execute', () => {
                    it('should return a queryable that has already been executed.', () => {
                        var counter = 0,
                            query = [0].query()
                                .select(x => ++counter);

                        expect(counter).toBe(0);
                        query = query.execute();
                        expect(counter).toBe(1);

                        query.array();
                        expect(counter).toBe(1);
                    });
                });

                //#endregion execute

                //#region result

                describe('result', () => {
                    it('should return the result of executing a query and converting the value into an array.', () => {
                        var counter = 0,
                            query = [0].query()
                                .select(x => ++counter);

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

            describe('Enumerable', () => {

                //#region range

                describe('range', () => {
                    it('should return increasing numbers for a single positive input', () => {
                        var values = Enumerable.range(2).array();
                        expect(values[0]).toBe(0);
                        expect(values[1]).toBe(1);
                        expect(values[2]).toBe(2);
                    });
                    it('should return decreasing numbers for a single negative input', () => {
                        var values = Enumerable.range(-2).array();
                        expect(values[0]).toBe(0);
                        expect(values[1]).toBe(-1);
                        expect(values[2]).toBe(-2);
                    });
                    it('should return numbers in the specified range with each entry incremented by one', () => {
                        var values = Enumerable.range(1, 3).array();
                        expect(values[0]).toBe(1);
                        expect(values[1]).toBe(2);
                        expect(values[2]).toBe(3);

                        values = Enumerable.range(3, 1).array();
                        expect(values[0]).toBe(3);
                        expect(values[1]).toBe(2);
                        expect(values[2]).toBe(1);
                    });
                    it('should return numbers in the specified range with each entry incremented by the specified value', () => {
                        var values = Enumerable.range(1, .5, 2).array();
                        expect(values[0]).toBe(1);
                        expect(values[1]).toBe(1.5);
                        expect(values[2]).toBe(2);

                        values = Enumerable.range(2, -.5, 1).array();
                        expect(values[0]).toBe(2);
                        expect(values[1]).toBe(1.5);
                        expect(values[2]).toBe(1);
                    });
                    it('should return numbers within the range when the upperbound is not in the result', () => {
                        var values = Enumerable.range(1, .5, 2.1).array();
                        expect(values[0]).toBe(1);
                        expect(values[1]).toBe(1.5);
                        expect(values[2]).toBe(2);

                        values = Enumerable.range(2, -.5, .9).array();
                        expect(values[0]).toBe(2);
                        expect(values[1]).toBe(1.5);
                        expect(values[2]).toBe(1);
                    });
                });

                //#endregion range

                //#region forEach

                describe('forEach', () => {
                    it('should enumerate the members of the sequence.', () => {
                        forEachTest([]);
                        forEachTest([null]);
                        forEachTest([null, undefined, 1, 2, 3]);
                    });
                });

                function forEachTest<T>(collection: IEnumerable<T>) {
                    var count = 0;
                    collection.forEach(item => {
                        expect(item).toBe(collection.array()[count++]);
                    })
                    expect(count).toBe(collection.count());
                }

                //#endregion forEach
            });

            //#endregion Enumerable
        });
    });
}