
module Classical.Spec {
    
    //#region Imports

    import c = Classical.Collections;
    import u = Classical.Utilities;

    //#endregion Imports

    describe('Classical', () => {

        //#region Object

        describe('Object', () => {

            //#region equals

            describe('equals', () => {
                it('should describe an object as equal to itself', () => {
                    var instance = {};
                    expect(instance.equals(instance)).toEqual(true);
                } );

                it('should describe two instances of the same type as different', () => {
                    var firstInstance = {},
                        secondInstance = {};

                    expect(firstInstance.equals(secondInstance)).toEqual(false);
                    expect(secondInstance.equals(firstInstance)).toEqual(false);
                } );

                it('should describe two instances of different types as different', () => {
                    var firstInstance = {},
                        secondInstance = new DerivedType();

                    expect(firstInstance.equals(secondInstance)).toEqual(false);
                    expect(secondInstance.equals(firstInstance)).toEqual(false);
                } );

                it('can be overridden', () => {
                    var differentType = new DifferentType(),
                        firstSameByType = new SameByType(),
                        secondSameByType = new SameByType();

                    expect(firstSameByType.equals(differentType)).toEqual(false);
                    expect(firstSameByType.equals(firstSameByType)).toEqual(true);
                    expect(firstSameByType.equals(secondSameByType)).toEqual(true);
                } );
            } );

            //#endregion equals

            //#region getType

            describe('getType', () => {
                it('should return a type with the appropriate name.', () => {
                    var obj = {},
                        test = new Test();

                    expect(obj.getType().name).toBe('Object');
                    expect(test.getType().name).toBe('Test');
                });

                it('should return a type that contains the constructor of the type.', () => {
                    var obj = {},
                        test = new Test();

                    expect(obj.getType().constructorFunction === Object).toBe(true);
                    expect(test.getType().constructorFunction === Test).toBe(true);
                });
            });

            //#endregion getType

            //#region is

            describe('is', () => {
                it('should return True when comparing an object with its own type.', () => {
                    var obj = {},
                        derived = new DerivedType();

                    expect(obj.is(Object)).toBe(true);
                    expect(derived.is(DerivedType)).toBe(true);
                } );

                it('should return True when comparing an object with types on its ancestor chain.', () => {
                    var derived = new DerivedType(),
                        moreDerived = new MoreDerivedType();

                    expect(derived.is(Object)).toBe(true);
                    expect(moreDerived.is(Object)).toBe(true);
                    expect(moreDerived.is(DerivedType)).toBe(true);
                } );
            });

            //#endregion is
        });

        //#endregion Object

    });

    //#region Test Classes

    class SameByType {
        equals(other: any): boolean {
            if (Classical.Utilities.isNullOrUndefined(other) || !other.getType)
                return false;

            return this.is(other.getType().constructorFunction);
        }
    }

    class DifferentType { }

    class Test { }

    class ReflectionTest {
        private _name: string;
        private _getSetProperty: string;
        private _setProperty: string;

        public get name(): string {
            return this._name;
        }

        public get getSetProperty(): string {
            return this._getSetProperty;
        }

        public set getSetProperty(value: string) {
            this._getSetProperty = value;
        }

        public set setProperty(value: string) {
            this._setProperty = value;
        }

        returnNumber(): number {
            return 42;
        }

        returnParameter(something: string): string {
            return something;
        }
    }

    class DerivedReflectionTest extends ReflectionTest {
        private _derivedProperty: string

        public get derivedProperty(): string {
            return this._derivedProperty;
        }
    }

    class DerivedType { }

    class MoreDerivedType extends DerivedType { }

    //#endregion Test Classes
}