
module Classical._Native.Spec {
    describe('Classical', () => {
        describe('Native', () => {

            //#region String

            describe('String', () => {
                describe('equals', () => {
                    it('should return true if two equivalent values are equal', () => {
                        expect(''.equals('')).toBe(true);
                        expect('abc'.equals('abc')).toBe(true);
                    });
                    it('should return false if two equivalent values are unequal', () => {
                        expect(''.equals('abc')).toBe(false);
                        expect('abc'.equals('')).toBe(false);
                    });
                });
                describe('getHashCode', () => {
                    it('should return equal hash codes for equal values', () => {
                        expect(''.getHashCode()).toBe(''.getHashCode());
                        expect('abc'.getHashCode()).toBe('abc'.getHashCode());
                    });
                    it('should return unequal hash codes for some unequal values', () => {
                        expect(''.getHashCode()).not.toBe('abc'.getHashCode());
                        expect('abc'.getHashCode()).not.toBe('def'.getHashCode());
                    });
                })
            });

            //#endregion String

            //#region Number

            describe('Number', () => {
                describe('equals', () => {
                    it('should return true if two equivalent values are equal', () => {
                        expect(Number('5').equals(5)).toBe(true);
                        expect(Number('0').equals(0)).toBe(true);
                    });
                    it('should return false if two equivalent values are unequal', () => {
                        expect(Number('0').equals(5)).toBe(false);
                        expect(Number('5').equals(-5)).toBe(false);
                    });
                });
                describe('getHashCode', () => {
                    it('should return equal hash codes for equal values', () => {
                        expect(Number('5').getHashCode()).toBe(Number('5').getHashCode());
                        expect(Number('0').getHashCode()).toBe(Number('0').getHashCode());
                    });
                    it('should return unequal hash codes for some unequal values', () => {
                        expect(Number('0').getHashCode()).not.toBe(Number('5').getHashCode());
                        expect(Number('5').getHashCode()).not.toBe(Number('-5').getHashCode());
                    });
                })
            });

            //#endregion Number

            //#region Boolean

            describe('Boolean', () => {
                describe('equals', () => {
                    it('should return true if two equivalent values are equal', () => {
                        expect(true.equals(true)).toBe(true);
                        expect(false.equals(false)).toBe(true);
                    });
                    it('should return false if two equivalent values are unequal', () => {
                        expect(true.equals(false)).toBe(false);
                    });
                });
                describe('getHashCode', () => {
                    it('should return equal hash codes for equal values', () => {
                        expect(true.getHashCode()).toBe(true.getHashCode());
                        expect(false.getHashCode()).toBe(false.getHashCode());
                    });
                    it('should return unequal hash codes for unequal values', () => {
                        expect(true.getHashCode()).not.toBe(false.getHashCode());
                    });
                })
            });

            //#endregion Boolean

            //#region Object

            describe('Object', () => {
                describe('equals', () => {
                    it('should return true if two equivalent values are equal', () => {
                        var value1 = {},
                            value2 = new Date(),
                            value3 = function () { },
                            value4 = [];

                        expect(value1.equals(value1)).toBe(true);
                        expect(value2.equals(value2)).toBe(true);
                        expect(value3.equals(value3)).toBe(true);
                        expect(value4.equals(value4)).toBe(true);
                    });
                    it('should return false if two equivalent values are unequal', () => {
                        var value1 = {},
                            value2 = new Date(),
                            value3 = function () { },
                            value4 = [];

                        expect(value1.equals(value2)).toBe(false);
                        expect(value2.equals(value3)).toBe(false);
                        expect(value3.equals(value4)).toBe(false);
                        expect(value4.equals(value1)).toBe(false);
                    });
                    it('should not be enumerable', () => {
                        for (var property in {}) {
                            expect(property).not.toBe('equals');
                        }
                    });
                });
                describe('getHashCode', () => {
                    it('should return equal hash codes for equal values', () => {
                        var value1 = {},
                            value2 = new Date(),
                            value3 = function () { },
                            value4 = [];

                        expect(value1.getHashCode()).toBe(value1.getHashCode());
                        expect(value2.getHashCode()).toBe(value2.getHashCode());
                        expect(value3.getHashCode()).toBe(value3.getHashCode());
                        expect(value4.getHashCode()).toBe(value4.getHashCode());
                    });
                    it('should not be enumerable', () => {
                        for (var property in {}) {
                            expect(property).not.toBe('getHashCode');
                        }
                    });
                });
                describe('_hashCode', () => {
                    it('should not be enumerable', () => {
                        var value: any = {};
                        value.getHashCode();
                        expect(Utilities.isNumber(value._hashCode)).toBe(true);

                        for (var property in {}) {
                            expect(property).not.toBe('_hashCode');
                        }
                    });
                })
            });

            //#endregion Object

            //#region Array

            describe('Array', () => {

                //#region add

                describe('add', () => {
                    it('should add an element to the end of an array', () => {
                        var array: number[] = [];
                        array.add(0).add(1);

                        expect(array.length).toBe(2);
                        expect(array[0]).toBe(0);
                        expect(array[1]).toBe(1);
                    });

                } );

                //#endregion add

                //#region addRange

                describe('addRange', () => {
                    it('should add a sequence of elements to the end of an array', () => {
                        var array: number[] = [];
                        array.addRange([0, 1]);

                        expect(array.length).toBe(2);
                        expect(array[0]).toBe(0);
                        expect(array[1]).toBe(1);
                    });

                } );

                //#endregion add

                //#region remove

                describe('remove', () => {
                    it('should remove all elements in the array that match the specified element', () => {
                        var array = [0, 2, 1, 2];
                        array.remove(2);

                        expect(array.length).toBe(2);
                        expect(array[0]).toBe(0);
                        expect(array[1]).toBe(1);
                    } );
                    it('should not remove any elements when the element is not found in the array', () => {
                        var array = [0, 1];
                        array.remove(3);

                        expect(array.length).toBe(2);
                        expect(array[0]).toBe(0);
                        expect(array[1]).toBe(1);
                    } );
                } );

                //#endregion remove

                //#region removeAt

                describe('removeAt', () => {
                    it('should remove the element at the specified index', () => {
                        var array = [0, 5, 1];
                        array.removeAt(1);

                        expect(array.length).toBe(2);
                        expect(array[0]).toBe(0);
                        expect(array[1]).toBe(1);
                    } );
                    it('should throw an exception when the index is out of bounds', () => {
                        var array = [0, 1];
                        expect(() => array.removeAt(-1)).toThrow();
                        expect(() => array.removeAt(3)).toThrow();
                    } );
                } );

                //#endregion removeAt

                //#region clear

                describe('clear', () => {
                    it('should remove all elements from the array', () => {
                        var array = [0, 1, 2];
                        array.clear();

                        expect(array.length).toBe(0);
                    });
                });

                //#endregion clear

                //#region get

                describe('get', () => {
                    it('should get the element from the specified index', () => {
                        var array = [0, 1, 2];

                        expect(array.get(0)).toBe(0);
                        expect(array.get(1)).toBe(1);
                        expect(array.get(2)).toBe(2);
                    });
                });

                //#endregion get

                //#region set

                describe('set', () => {
                    it('should set the element at the specified index to the specified value', () => {
                        var array = [0, 1, 2];
                        array
                            .set(0, 2)
                            .set(1, 1)
                            .set(2, 0);

                        expect(array.get(0)).toBe(2);
                        expect(array.get(1)).toBe(1);
                        expect(array.get(2)).toBe(0);
                    });
                });

                //#endregion set
            });

            //#endregion Array
        });
    });
}