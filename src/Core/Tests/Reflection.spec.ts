
module Classical.Reflection.Spec {
    
    //#region Imports

    import c = Classical.Collections;
    import u = Classical.Utilities;
    import r = Classical.Reflection;

    //#endregion Imports

    describe('Classical', () => {
        describe('Reflection', () => {

            //#region isEnum

            describe('isEnum', () => {
                it('should return true if a Type is an Enum, false otherwise.', () => {
                    var enumeration = Classical.Binding.Collections.CollectionUpdateType;
                    var notEnumeration = Classical.Binding.Collections.Collection;

                    expect(Classical.Reflection.isEnum(enumeration)).toBe(true);
                    expect(Classical.Reflection.isEnum(notEnumeration)).toBe(false);
                });
            });

            //#endregion isEnum

            //#region findField

            describe('findField',() => {
                it("should go through the type's hierarchy and find the field with the specified name.",() => {
                    var dynamicType = <any>new DynamicType();
                    var nameField = r.findField(dynamicType, d => d.testField);
                    var noField = r.findField(dynamicType, d => d.fieldDoesNotExist);

                    expect(nameField).toBeDefined();
                    expect(noField).toBeNull();

                    dynamicType.fieldDoesNotExist = 'Field Exists';

                    noField = r.findField(dynamicType, d => d.fieldDoesNotExist);
                    expect(noField).toBeDefined();
                    expect(noField).toNotBe(null);

                    dynamicType.somethingField = 'Field Exists';

                    var somethingField = r.findField(dynamicType, d => d.somethingField);
                    expect(somethingField).toBeDefined();
                    expect(somethingField).toNotBe(null);
                });
            });

            //#endregion findField

            //#region findProperty

            describe('findProperty',() => {
                it("should go through the type's hierarchy and find the property with the specified name.",() => {
                    var dynamicType = <any>new DynamicType();
                    var nameProperty = r.findProperty(dynamicType, d => d.name);
                    var noProperty = r.findProperty(dynamicType, d => d.propertyDoesNotExist);

                    expect(nameProperty).toBeDefined();
                    expect(noProperty).toBeNull();

                    Object.defineProperty(dynamicType, "propertyDoesNotExist", {
                        get: function () {
                            return 'chris';
                        },
                        enumerable: true,
                        configurable: true
                    });

                    noProperty = r.findProperty(dynamicType, d => d.propertyDoesNotExist);
                    expect(noProperty).toBeDefined();
                    expect(noProperty).toNotBe(null);

                    Object.defineProperty(dynamicType, "somethingAdded", {
                        get: function () {
                            return 'something';
                        },
                        enumerable: true,
                        configurable: true
                    });

                    var somethingProperty = r.findProperty(dynamicType, d => d.somethingAdded);
                    expect(somethingProperty).toBeDefined();
                    expect(somethingProperty).toNotBe(null);
                });
            });

            //#endregion findProperty

            //#region findMethod

            describe('findMethod',() => {
                it("should go through the type's hierarchy and find the method with the specified name.",() => {
                    var dynamicType = <any>new DynamicType();
                    var nameProperty = r.findMethod(dynamicType, d => d.testMethod);
                    var noMethod = r.findMethod(dynamicType, d => d.methodDoesNotExist);

                    expect(nameProperty).toBeDefined();
                    expect(noMethod).toBeNull();

                    dynamicType.methodDoesNotExist = function () {
                        console.log('Method exists');
                    };

                    noMethod = r.findMethod(dynamicType, d => d.methodDoesNotExist);
                    expect(noMethod).toBeDefined();
                    expect(noMethod).toNotBe(null);

                    dynamicType.somethingMethod = function () {
                        console.log('Method exists');
                    };

                    var somethingMethod = r.findMethod(dynamicType, d => d.somethingMethod);
                    expect(somethingMethod).toBeDefined();
                    expect(somethingMethod).toNotBe(null);
                });
            });

            //#endregion findMethod

            //#region findVariable

            describe('findVariable', () => {
                it("should go through the module and find the variable with the specified name.",() => {
                    var testModule = <any>Classical.Reflection.Spec.TestModule;
                    var testVariable = r.findVariable(testModule, m => m.testVariable);
                    var noVariable = r.findVariable(testModule, m => m.noVariable);

                    expect(testVariable).toBeDefined();
                    expect(noVariable).toBeNull();

                    testModule.noVariable = 'Testing';
                    noVariable = r.findVariable(testModule, m => m.noVariable);

                    expect(noVariable).toNotBe(null);
                });
            });

            //#endregion findVariable

            //#region findFunction

            describe('findFunction',() => {
                it("should go through the module and find the function with the specified name.",() => {
                    var testModule = <any>Classical.Reflection.Spec.TestModule;
                    var testFunction = r.findFunction(testModule, m => m.TestFunction);
                    var noFunction = r.findFunction(testModule, m => m.noFunction);

                    expect(testFunction).toBeDefined();
                    expect(noFunction).toBeNull();

                    testModule.noFunction = function () {
                        console.log('Testing');
                    };
                    noFunction = r.findFunction(testModule, m => m.noFunction);

                    expect(noFunction).toNotBe(null);
                });
            });

            //#endregion findFunction

            //#region findStaticField

            describe('findStaticField',() => {
                it("should return a Type's field if it finds it",() => {
                    var staticField = r.findStaticField(DynamicType, d => d.staticField);
                    var noField = r.findStaticField(DynamicType, d => d.noField);

                    expect(staticField).toBeDefined();
                    expect(noField).toBeNull();

                    (<any>DynamicType).noField = 'Hello';
                    noField = r.findStaticField(DynamicType, d => d.noField);

                    expect(noField).toNotBe(null);
                });
            });

            //#endregion findStaticField

            //#region findStaticProperty

            describe('findStaticProperty',() => {
                it("should return a Type's property if it finds it",() => {
                    var staticProperty = r.findStaticProperty(DynamicType, d => d.staticProperty);
                    var noProperty = r.findStaticProperty(DynamicType, d => d.noProperty);

                    expect(staticProperty).toBeDefined();
                    expect(noProperty).toBeNull();

                    Object.defineProperty(DynamicType, "noProperty", {
                        get: function () {
                            return 'chris';
                        },
                        enumerable: true,
                        configurable: true
                    });

                    noProperty = r.findStaticProperty(DynamicType, d => d.noProperty);

                    expect(noProperty).toNotBe(null);
                });
            });

            //#endregion findStaticProperty

            //#region findStaticMethod

            describe('findStaticMethod',() => {
                it("should return a Type's method if it finds it",() => {
                    var staticMethod = r.findStaticMethod(DynamicType, d => d.staticMethod);
                    var noMethod = r.findStaticMethod(DynamicType, d => d.noMethod);

                    expect(staticMethod).toBeDefined();
                    expect(noMethod).toBeNull();

                    (<any>DynamicType).noMethod = function () {
                        return 'Something';
                    };

                    noMethod = r.findStaticMethod(DynamicType, d => d.noMethod);

                    expect(noMethod).toNotBe(null);
                });
            });

            //#endregion findStaticMethod

            //#region Module

            describe('Module', () => {
                describe('getFunctions', () => {
                    it('should return the functions of the module.', () => {
                        var testType = typeOf(TestModule.TestType);
                        var testModule = testType.declaringModule;
                        var functions = testModule.getFunctions();

                        expect(functions.count()).toBe(2);
                        expect(functions.hasAny(f => f.name == 'TestFunction')).toBe(true);
                        expect(functions.hasAny(f => f.name == 'TestParameteredFunction')).toBe(true);
                    });
                });

                describe('getVariables', () => {
                    it('should return the variables of the module.', () => {
                        var testType = typeOf(TestModule.TestType);
                        var testModule = testType.declaringModule;
                        var variables = testModule.getVariables();
                        
                        expect(variables.count()).toBe(1);
                        expect(variables.hasAny(f => f.name == 'testVariable')).toBe(true);
                    });
                });
            });

            //#endregion Module

            //#region Type

            describe('Type', () => {

                //#region toString

                describe('toString', () => {
                    it('should return the name of the Type', () => {
                        var obj = {},
                            derived = new DerivedType();

                        expect(obj.getType().toString())
                            .toBe('Object');
                        expect(derived.getType().toString())
                            .toBe('DerivedType');
                    });

                });

                //#endregion toString

                //#region equals

                describe('equals', () => {
                    it('should return True for the types of different instances of the same type', () => {
                        var firsobject = {},
                            seconobject = {},
                            firstDerived = new DerivedType(),
                            secondDerived = new DerivedType();

                        expect(
                            firsobject.getType().equals(
                                seconobject.getType()))
                            .toBe(true);
                        expect(
                            firstDerived.getType().equals(
                                secondDerived.getType()))
                            .toBe(true);
                    });

                    it('should return False for the types of instances of different types', () => {
                        var obj = {},
                            derived = new DerivedType();

                        expect(
                            obj.getType().equals(
                                derived.getType()))
                            .toBe(false);
                    });

                });

                //#endregion equals

                //#region getHashCode

                describe('getHashCode', () => {
                    it('should return the same hash code types of different instances of the same type', () => {
                        var firstObject = {},
                            secondObject = {},
                            firstDerived = new DerivedType(),
                            secondDerived = new DerivedType();

                        expect(firstObject.getType().getHashCode())
                            .toBe(secondObject.getType().getHashCode());
                        expect(firstDerived.getType().getHashCode())
                            .toBe(secondDerived.getType().getHashCode());
                    });

                    it('should return different hash codes for the types of instances of different types', () => {
                        var obj = {},
                            derived = new DerivedType();

                        expect(obj.getType().getHashCode())
                            .not.toBe(derived.getType().getHashCode());
                    });

                });

                //#endregion getHashCode

                //#region base

                describe('base', () => {
                    it('should be the same as the type of a parent Type', () => {
                        var obj = {},
                            derived = new DerivedType();

                        expect(
                            obj.getType().equals(
                                derived.getType().base))
                            .toBe(true);
                    });
                });

                //#endregion base

                //#region module

                describe('module', () => {
                    it('should return the module of the given type.', () => {
                        var r = Classical.Reflection;
                        var objectType = typeOf(Object);
                        var numberType = typeOf(Number);
                        var booleanType = typeOf(Boolean);
                        var methodType = typeOf(r.Method);

                        expect(objectType.declaringModule.fullName).toBe('Global');
                        expect(numberType.declaringModule.fullName).toBe('Global');
                        expect(booleanType.declaringModule.fullName).toBe('Global');
                        expect(methodType.declaringModule.fullName).toBe('Classical.Reflection');
                    });
                });

                //#endregion module

                //#region isPrimitive

                describe('isPrimitive', () => {
                    it('should return true if the type is one of JavaScript\'s primitive types.', () => {
                        var booleanType = typeOf(Boolean);
                        var stringType = typeOf(String);
                        var numberType = typeOf(Number);
                        var nonPrimitiveType = typeOf(DifferentType);

                        expect(booleanType.isPrimitive).toBe(true);
                        expect(stringType.isPrimitive).toBe(true);
                        expect(numberType.isPrimitive).toBe(true);
                        expect(nonPrimitiveType.isPrimitive).toBe(false);
                    });
                });

                //#endregion isPrimitive

                //#region isAssignableTo

                describe('isAssignableTo', () => {
                    it('should return True when comparing a Type with itself.', () => {
                        var type = {}.getType(),
                            derivedType = new DerivedType().getType();

                        expect(type.isAssignableTo(type)).toBe(true);
                        expect(derivedType.isAssignableTo(derivedType)).toBe(true);
                    });

                    it('should return True when comparing anobjects Type with types on its ancestor chain.', () => {
                        var type = {}.getType(),
                            derivedType = new DerivedType().getType(),
                            moreDerivedType = new MoreDerivedType().getType();

                        expect(derivedType.isAssignableTo(type)).toBe(true);
                        expect(moreDerivedType.isAssignableTo(type)).toBe(true);
                        expect(moreDerivedType.isAssignableTo(derivedType)).toBe(true);
                    });
                });

                //#endregion isAssignableFrom

                //#region isAssignableFrom

                describe('isAssignableFrom', () => {
                    it('should return True when comparing a Type with itself.', () => {
                        var type = {}.getType(),
                            derivedType = new DerivedType().getType();

                        expect(type.isAssignableFrom(type)).toBe(true);
                        expect(derivedType.isAssignableFrom(derivedType)).toBe(true);
                    });

                    it('should return True when comparing anobjects Type with types on its predecessor tree.', () => {
                        var type = {}.getType(),
                            derivedType = new DerivedType().getType(),
                            moreDerivedType = new MoreDerivedType().getType();

                        expect(type.isAssignableFrom(derivedType)).toBe(true);
                        expect(type.isAssignableFrom(moreDerivedType)).toBe(true);
                        expect(derivedType.isAssignableFrom(moreDerivedType)).toBe(true);
                    });
                });

                //#endregion isAssignableFrom

                //#region getFieldsOf

                describe('getFieldsOf', () => {
                    it('should return the fields of the given instance of a type.', () => {
                        var reflectionTestInstance = new ReflectionTest();
                        var reflectionTestType = typeOf(ReflectionTest);
                        var fields = reflectionTestType.getFieldsOf(reflectionTestInstance, Modifier.Private, Modifier.Instance);

                        expect(fields.hasAny(f => f.name == '_testAge')).toBe(true);
                        expect(fields.hasAny(f => f.name == '_testField')).toBe(true);
                    });
                });

                //#endregion getFieldsOf

                //#region getFieldOf

                describe('getFieldOf', () => {
                    it('should return the specified field of the given instance of a type.', () => {
                        var reflectionTestInstance = new ReflectionTest();
                        var reflectionTestType = typeOf(ReflectionTest);
                        var testAge = reflectionTestType.getFieldOf(reflectionTestInstance, '_testAge', Modifier.Private, Modifier.Instance);
                        var testField = reflectionTestType.getFieldOf(reflectionTestInstance, '_testField', Modifier.Private, Modifier.Instance);
                        var notExist = reflectionTestType.getFieldOf(reflectionTestInstance, 'asljdljkh', Modifier.Private, Modifier.Instance);

                        expect(testAge).toBeDefined();
                        expect(testField).toBeDefined();
                        expect(notExist).toBeNull();
                    });
                });

                //#endregion getFieldOf

                //#region getProperties

                describe('getProperties', () => {
                    it('should return the properties of the given type.', () => {
                        var propertyTest = new ReflectionTest(),
                            propertyTestType = propertyTest.getType(),
                            properties = propertyTestType.getProperties();

                        expect(properties.query().hasAny(p => p.name == 'name')).toBe(true);
                    });
                });

                //#endregion getProperties

                //#region getProperty

                describe('getProperty', () => {
                    it('should return the specified property of the given type.', () => {
                        var propertyTest = new ReflectionTest(),
                            propertyTestType = propertyTest.getType(),
                            properties = propertyTestType.getProperties(),
                            nameProperty = propertyTestType.getProperty('name');

                        expect(nameProperty).toBeDefined();
                        expect(nameProperty.name).toBe('name');

                    });
                    it('should return if the property can be get and set correctly.', () => {
                        var propertyTest = new ReflectionTest(),
                            propertyTestType = propertyTest.getType(),
                            properties = propertyTestType.getProperties(),
                            nameProperty = propertyTestType.getProperty('name'),
                            getSetProperty = propertyTestType.getProperty('getSetProperty'),
                            setProperty = propertyTestType.getProperty('setProperty');

                        expect(nameProperty).toBeDefined();
                        expect(nameProperty.name).toBe('name');
                        expect(nameProperty.canRead).toBe(true);
                        expect(nameProperty.canWrite).toBe(false);

                        expect(getSetProperty).toBeDefined();
                        expect(getSetProperty.name).toBe('getSetProperty');
                        expect(getSetProperty.canRead).toBe(true);
                        expect(getSetProperty.canWrite).toBe(true);

                        expect(setProperty).toBeDefined();
                        expect(setProperty.name).toBe('setProperty');
                        expect(setProperty.canRead).toBe(false);
                        expect(setProperty.canWrite).toBe(true);
                    });
                    it('should return null if the specified property does not exist.', () => {
                        var propertyTest = new ReflectionTest(),
                            propertyTestType = propertyTest.getType(),
                            properties = propertyTestType.getProperties(),
                            property = propertyTestType.getProperty('doesNotExist');

                        expect(u.isDefined(property)).toBe(false);
                    });
                    it('should return the same instance of Property when the same property is gotten from two different types of the same hierarchy.', () => {
                        var baseType = typeOf(BaseType);
                        var derivedType = typeOf(DerivedBaseType);
                        var secondDerivedType = typeOf(SecondDerivedType);

                        var baseProperty = baseType.getProperty('BaseProperty');
                        var derivedBaseProperty = derivedType.getProperty('BaseProperty');
                        var secondDerivedBaseProperty = secondDerivedType.getProperty('BaseProperty');

                        expect(baseProperty === derivedBaseProperty).toEqual(true);
                        expect(baseProperty === secondDerivedBaseProperty).toEqual(true);
                        expect(derivedBaseProperty === secondDerivedBaseProperty).toEqual(true);
                    });
                });

                //#endregion getProperty

                //#region getMethods

                describe('getMethods', () => {
                    it('should return the methods of the given type.', () => {
                        var reflectionTest = new ReflectionTest(),
                            reflectionTestType = reflectionTest.getType(),
                            methods = reflectionTestType.getMethods();

                        expect(methods.query().hasAny(p => p.name == 'returnNumber')).toBe(true);
                    });
                    it('should return public and private methods correctly.', () => {
                        var reflectionTest = new ReflectionTest(),
                            reflectionTestType = reflectionTest.getType(),
                            privateMethods = reflectionTestType.getMethods(Modifier.Private),
                            publicMethods = reflectionTestType.getMethods(Modifier.Public);

                        expect(privateMethods.hasAny(m => m.name === '_firstPrivateMethod')).toBe(true);
                        expect(privateMethods.hasAny(m => m.name === '_secondPrivateMethod')).toBe(true);
                        expect(privateMethods.hasNone(m => m.name === 'returnNumber')).toBe(true);

                        expect(publicMethods.hasAny(m => m.name === 'returnNumber')).toBe(true);
                        expect(publicMethods.hasAny(m => m.name === 'returnParameter')).toBe(true);
                        expect(publicMethods.hasNone(m => m.name === '_secondPrivateMethod')).toBe(true);
                        
                    });
                    it('should return static and instance methods correctly.', () => {
                        var reflectionTest = new ReflectionTest(),
                            reflectionTestType = reflectionTest.getType(),
                            publicStaticMethods = reflectionTestType.getMethods(Modifier.Public, Modifier.Static),
                            publicInstanceMethods = reflectionTestType.getMethods(Modifier.Public, Modifier.Instance),
                            privateStaticMethods = reflectionTestType.getMethods(Modifier.Private, Modifier.Static);

                        expect(publicStaticMethods.hasAny(m => m.name === 'staticMethod')).toBe(true);
                        expect(publicStaticMethods.hasNone(m => m.name === 'returnNumber')).toBe(true);
                        expect(publicStaticMethods.hasNone(m => m.name === 'returnParameter')).toBe(true);

                        expect(publicInstanceMethods.hasAny(m => m.name === 'returnNumber')).toBe(true);
                        expect(publicInstanceMethods.hasAny(m => m.name === 'returnParameter')).toBe(true);
                        expect(publicInstanceMethods.hasNone(m => m.name === 'staticMethod')).toBe(true);

                        expect(privateStaticMethods.hasAny(m => m.name === '_privateStaticMethod')).toBe(true);
                        expect(privateStaticMethods.hasNone(m => m.name === '_firstPrivateMethod')).toBe(true);
                        expect(privateStaticMethods.hasNone(m => m.name === '_secondPrivateMethod')).toBe(true);
                    });
                });

                //#endregion getMethods

                //#region getMethod

                describe('getMethod', () => {
                    it('should return the specified method of the given type.', () => {
                        var reflectionTest = new ReflectionTest(),
                            reflectionTestType = reflectionTest.getType(),
                            method = reflectionTestType.getMethod('returnNumber');

                        expect(method).toBeDefined();
                        expect(method.name).toBe('returnNumber');
                    });
                });

                //#endregion getMethod
            });

            //#endregion Type

            //#region Null

            describe('Null', () => {
                it('Should return the Null Type correctly and return the correct values for all methods.', () => {
                    var nullType = typeOf(Null);
                    expect(nullType).toBe(Type.null);
                    expect(nullType.getFieldsOf(null).count()).toBe(0);
                    expect(nullType.getProperties().count()).toBe(0);
                    expect(nullType.getMethods().count()).toBe(0);
                    expect(nullType.name).toBe('Null');
                    expect(nullType.fullName).toBe('Null');
                    expect(nullType.create()).toBe(null);
                    expect(() => typeOf(null)).toThrow();
                });
            });

            //#endregion Null

            //#region Undefined

            describe('Undefined', () => {
                it('Should return the Undefined Type correctly and return the correct values for all methods.', () => {
                    var undefinedType = typeOf(Undefined);
                    expect(undefinedType).toBe(Type.undefined);
                    expect(undefinedType.getFieldsOf(undefined).count()).toBe(0);
                    expect(undefinedType.getProperties().count()).toBe(0);
                    expect(undefinedType.getMethods().count()).toBe(0);
                    expect(undefinedType.name).toBe('Undefined');
                    expect(undefinedType.fullName).toBe('Undefined');
                    expect(undefinedType.create()).toBe(undefined);
                    expect(() => typeOf(undefined)).toThrow();
                });
            });

            //#endregion Undefined

            //#region Property

            describe('Property', () => {

                //#region exists

                describe('exists',() => {
                    it('should return true if the property of the selector exists on the Type, false otherwise.',() => {
                        var reflectionTest = new ReflectionTest();
                        var anyReflectionTest = <any> new ReflectionTest();

                        expect(r.Property.exists(reflectionTest, rt => rt.name)).toBe(true);
                        expect(r.Property.exists(reflectionTest, rt => rt.getSetProperty)).toBe(true);

                        expect(r.Property.exists(anyReflectionTest, rt => rt.getSetProperty)).toBe(true);
                        expect(r.Property.exists(anyReflectionTest, rt => rt.thisPropertyShouldNotExist)).toBe(false);
                        expect(r.Property.exists(anyReflectionTest, rt => rt.thisPropertyShouldAlsoNotExist)).toBe(false);
                    });
                });

                //#endregion exists

                //#region declaringType

                describe('declaringType', () => {
                    it('should return the declaring type of the property.', () => {
                        var baseType = typeOf(BaseType);
                        var derivedType = typeOf(DerivedBaseType);
                        var secondDerivedType = typeOf(SecondDerivedType);

                        var overriddenProperty = derivedType.getProperty('OverriddenProperty');
                        var secondOverriddenProperty = secondDerivedType.getProperty('SecondOverriddenProperty');
                        var overriddenDerivedProperty = secondDerivedType.getProperty('OverriddenDerivedProperty');
                        var derivedProperty = derivedType.getProperty('DerivedProperty');
                        var baseProperty = derivedType.getProperty('BaseProperty');

                        expect(baseProperty.declaringType).toBe(baseType);
                        expect(overriddenProperty.declaringType).toBe(baseType);
                        expect(secondOverriddenProperty.declaringType).toBe(baseType);
                        expect(overriddenDerivedProperty.declaringType).toBe(derivedType);
                        expect(derivedProperty.declaringType).toBe(derivedType);
                    });
                });

                //#endregion declaringType

                //#region isMethod

                describe('isMethod', () => {
                    it('should return a boolean result describing if the property is a method or not.', () => {
                        var baseType = typeOf(BaseType);
                        var derivedType = typeOf(DerivedBaseType);

                        var overriddenProperty = derivedType.getProperty('OverriddenProperty');
                        var baseMethod = baseType.getMethod('BaseMethod');

                        expect(overriddenProperty.isMethod).toBe(false);
                        expect(baseMethod.isMethod).toBe(true);
                    });
                });

                //#endregion isMethod

                //#region getValue

                describe('getValue', () => {
                    it('should get the value of the provided property.', () => {
                        var propertyTestInstance = new ReflectionTest(),
                            propertyTestType = propertyTestInstance.getType(),
                            derivedType = typeOf(DerivedReflectionTest),
                            firstNameProperty = propertyTestType.getProperty('getSetProperty'),
                            derivedProperty = derivedType.getProperty('derivedProperty');

                        propertyTestInstance.getSetProperty = 'Chris';

                        var value = firstNameProperty.getValue(propertyTestInstance);

                        expect(value).toBe(propertyTestInstance.getSetProperty);

                        try {
                            derivedProperty.getValue(propertyTestInstance);
                            throw 'the property cannot be gotten if it does not exist on the current type.';
                        }
                        catch (error) {
                        }
                    });
                    it('should get the value of the provided property, calling the correct overridden version given the specified type of the instance.', () => {
                        var baseType = typeOf(BaseType);
                        var derivedType = typeOf(DerivedBaseType);
                        var secondDerivedType = typeOf(SecondDerivedType);

                        var overriddenProperty = derivedType.getProperty('OverriddenProperty');
                        var secondOverriddenProperty = secondDerivedType.getProperty('SecondOverriddenProperty');
                        var overriddenDerivedProperty = secondDerivedType.getProperty('OverriddenDerivedProperty');
                        var derivedProperty = derivedType.getProperty('DerivedProperty');
                        var baseProperty = derivedType.getProperty('BaseProperty');

                        var baseInstance = new BaseType();
                        var derivedInstance = new DerivedBaseType();
                        var secondDerivedInstance = new SecondDerivedType();

                        expect(baseProperty.getValue(derivedInstance)).toBe(baseInstance.BaseProperty);
                        expect(baseProperty.getValue(secondDerivedInstance)).toBe(baseInstance.BaseProperty);

                        expect(overriddenProperty.getValue(baseInstance)).toBe(baseInstance.OverriddenProperty);
                        expect(overriddenProperty.getValue(derivedInstance)).toBe(derivedInstance.OverriddenProperty);

                        expect(secondOverriddenProperty.getValue(baseInstance)).toBe(baseInstance.SecondOverriddenProperty);
                        expect(secondOverriddenProperty.getValue(secondDerivedInstance)).toBe(secondDerivedInstance.SecondOverriddenProperty);
                    });
                });

                //#endregion getValue

                //#region setValue

                describe('setValue', () => {
                    it('should set the value of the provided property.', () => {
                        var propertyTestInstance = new ReflectionTest(),
                            propertyTestType = propertyTestInstance.getType(),
                            derivedType = typeOf(DerivedReflectionTest),
                            firstNameProperty = propertyTestType.getProperty('getSetProperty'),
                            derivedProperty = derivedType.getProperty('derivedProperty');

                        var changedValue = 'Chris';

                        firstNameProperty.setValue(propertyTestInstance, changedValue);

                        expect(propertyTestInstance.getSetProperty).toBe(changedValue);

                        try {
                            derivedProperty.setValue(propertyTestInstance, 'Christopher')

                        throw 'the property cannot be set if it does not exist on the current type.';
                        }
                        catch (error) {
                        }
                    });
                    it('should set the value of the provided property, calling the correct overridden version given the specified type of the instance.', () => {
                        var baseType = typeOf(BaseType);
                        var derivedType = typeOf(DerivedBaseType);
                        var secondDerivedType = typeOf(SecondDerivedType);

                        var baseSetterProperty = derivedType.getProperty('BaseSetter');

                        var baseInstance = new BaseType();
                        var derivedInstance = new DerivedBaseType();
                        var secondDerivedInstance = new SecondDerivedType();
                        var valueToSet = 6;

                        baseSetterProperty.setValue(baseInstance, valueToSet);
                        expect(baseInstance.secretNumber).toBe(valueToSet);

                        baseSetterProperty.setValue(derivedInstance, valueToSet);
                        expect(derivedInstance.secretNumber).toBe(valueToSet + 1);

                        baseSetterProperty.setValue(secondDerivedInstance, valueToSet);
                        expect(secondDerivedInstance.secretNumber).toBe(valueToSet + 2);
                    });
                });

                //#endregion setValue
            });

            //#endregion Property

            //#region Method

            describe('Method', () => {
                describe('invoke', () => {
                    it('should invoke the specified method, returning the correct value.', () => {
                        var reflectionTest = new ReflectionTest(),
                            reflectionTestType = reflectionTest.getType(),
                            method = reflectionTestType.getMethod('returnNumber');

                        var result = method.invoke(reflectionTest);

                        expect(result).toBe(reflectionTest.returnNumber());
                    });
                    it('should invoke the specified method with parameters, returning the correct value.', () => {
                        var reflectionTest = new ReflectionTest(),
                            reflectionTestType = reflectionTest.getType(),
                            method = reflectionTestType.getMethod('returnParameter');

                        var parameterValue = 'TestParameter';
                        var result = method.invoke(reflectionTest, parameterValue);

                        expect(result).toBe(reflectionTest.returnParameter(parameterValue));

                        parameterValue = 'SecondTestParameter';
                        result = method.invoke(reflectionTest, parameterValue);

                        expect(result).toBe(reflectionTest.returnParameter(parameterValue));
                    });
                });
                describe('getParameters', () => {
                    it('should return the correct number of parameters in the correct position.', () => {
                        var testType = typeOf(TestModule.TestType);
                        var testModule = testType.declaringModule;
                        var functions = testModule.getFunctions();
                        var parameteredFunction = functions.single(f => f.name === 'TestParameteredFunction');
                        var parameters = parameteredFunction.getParameters().array();

                        expect(parameters.length).toBe(2);

                        var firstParameter = parameters[0];
                        var secondParameter = parameters[1];

                        expect(firstParameter.name).toBe('first');
                        expect(firstParameter.position).toBe(0);
                        expect(firstParameter.declaringMethod).toBe(parameteredFunction);
                        expect(secondParameter.name).toBe('second');
                        expect(secondParameter.position).toBe(1);
                        expect(secondParameter.declaringMethod).toBe(parameteredFunction);
                    });
                });
            });

            //#endregion Method
        })
    });

    //#region Test Classes

    enum TestEnum {
        First,
        Second,
        Third
    }

    class DynamicType {
        public testField = 'Hello';

        public get name(): string {
            return 'name';
        }

        testMethod(): void {
            console.log('something');
        }

        static staticField: string = 'Chris';

        static get staticProperty(): string {
            return 'Something';
        }

        static get staticMethod(): string {
            return 'Something';
        }
    }

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
        private _testField: string = 'Chris';
        private _testAge: number = 5;

        public testField: string = 'Chris';

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

        private _firstPrivateMethod(): void {
        }

        private _secondPrivateMethod(): void {
        }

        public static staticMethod() {
        }

        private static _privateStaticMethod() {
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

    class BaseType {

        public secretNumber = 5;

        public get OverriddenProperty(): string {
            return 'Hello';
        }

        public get SecondOverriddenProperty(): string {
            return 'Hello';
        }

        public get BaseProperty(): string {
            return 'SomethingElse';
        }

        public set BaseSetter(value: number) {
            this.secretNumber = value;
        }

        BaseMethod(): void {
        }
    }

    class DerivedBaseType extends BaseType {
        public get OverriddenProperty(): string {
            return 'Bye';
        }

        public get OverriddenDerivedProperty(): string {
            return 'OverriddenDerivedProperty';
        }

        public get DerivedProperty(): string {
            return 'DerivedProperty';
        }

        public set BaseSetter(value: number) {
            this.secretNumber = value + 1;
        }
    }

    class SecondDerivedType extends DerivedBaseType {
        public get OverriddenDerivedProperty(): string {
            return 'OverriddenDerivedProperty2';
        }

        public get SecondOverriddenProperty(): string {
            return 'Hello3';
        }

        public set BaseSetter(value: number) {
            this.secretNumber = value + 2;
        }
    }

    //#endregion Test Classes

    //#region Test Modules

    export module TestModule {
        export class TestType {
            get testProp(): number {
                return 42;
            }
        }

        export function TestFunction() {

        }

        export function TestParameteredFunction(first: string, second: number) {
        }

        export var testVariable: string = 'This is a test';
    }

    //#endregion Test Modules

}