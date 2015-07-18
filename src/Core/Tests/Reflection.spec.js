var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Classical;
(function (Classical) {
    var Reflection;
    (function (Reflection) {
        var Spec;
        (function (Spec) {
            var u = Classical.Utilities;
            var r = Classical.Reflection;
            //#endregion Imports
            describe('Classical', function () {
                describe('Reflection', function () {
                    //#region isEnum
                    describe('isEnum', function () {
                        it('should return true if a Type is an Enum, false otherwise.', function () {
                            var enumeration = Classical.Binding.Collections.CollectionUpdateType;
                            var notEnumeration = Classical.Binding.Collections.Collection;
                            expect(Classical.Reflection.isEnum(enumeration)).toBe(true);
                            expect(Classical.Reflection.isEnum(notEnumeration)).toBe(false);
                        });
                    });
                    //#endregion isEnum
                    //#region findField
                    describe('findField', function () {
                        it("should go through the type's hierarchy and find the field with the specified name.", function () {
                            var dynamicType = new DynamicType();
                            var nameField = r.findField(dynamicType, function (d) { return d.testField; });
                            var noField = r.findField(dynamicType, function (d) { return d.fieldDoesNotExist; });
                            expect(nameField).toBeDefined();
                            expect(noField).toBeNull();
                            dynamicType.fieldDoesNotExist = 'Field Exists';
                            noField = r.findField(dynamicType, function (d) { return d.fieldDoesNotExist; });
                            expect(noField).toBeDefined();
                            expect(noField).toNotBe(null);
                            dynamicType.somethingField = 'Field Exists';
                            var somethingField = r.findField(dynamicType, function (d) { return d.somethingField; });
                            expect(somethingField).toBeDefined();
                            expect(somethingField).toNotBe(null);
                        });
                    });
                    //#endregion findField
                    //#region findProperty
                    describe('findProperty', function () {
                        it("should go through the type's hierarchy and find the property with the specified name.", function () {
                            var dynamicType = new DynamicType();
                            var nameProperty = r.findProperty(dynamicType, function (d) { return d.name; });
                            var noProperty = r.findProperty(dynamicType, function (d) { return d.propertyDoesNotExist; });
                            expect(nameProperty).toBeDefined();
                            expect(noProperty).toBeNull();
                            Object.defineProperty(dynamicType, "propertyDoesNotExist", {
                                get: function () {
                                    return 'chris';
                                },
                                enumerable: true,
                                configurable: true
                            });
                            noProperty = r.findProperty(dynamicType, function (d) { return d.propertyDoesNotExist; });
                            expect(noProperty).toBeDefined();
                            expect(noProperty).toNotBe(null);
                            Object.defineProperty(dynamicType, "somethingAdded", {
                                get: function () {
                                    return 'something';
                                },
                                enumerable: true,
                                configurable: true
                            });
                            var somethingProperty = r.findProperty(dynamicType, function (d) { return d.somethingAdded; });
                            expect(somethingProperty).toBeDefined();
                            expect(somethingProperty).toNotBe(null);
                        });
                    });
                    //#endregion findProperty
                    //#region findMethod
                    describe('findMethod', function () {
                        it("should go through the type's hierarchy and find the method with the specified name.", function () {
                            var dynamicType = new DynamicType();
                            var nameProperty = r.findMethod(dynamicType, function (d) { return d.testMethod; });
                            var noMethod = r.findMethod(dynamicType, function (d) { return d.methodDoesNotExist; });
                            expect(nameProperty).toBeDefined();
                            expect(noMethod).toBeNull();
                            dynamicType.methodDoesNotExist = function () {
                                console.log('Method exists');
                            };
                            noMethod = r.findMethod(dynamicType, function (d) { return d.methodDoesNotExist; });
                            expect(noMethod).toBeDefined();
                            expect(noMethod).toNotBe(null);
                            dynamicType.somethingMethod = function () {
                                console.log('Method exists');
                            };
                            var somethingMethod = r.findMethod(dynamicType, function (d) { return d.somethingMethod; });
                            expect(somethingMethod).toBeDefined();
                            expect(somethingMethod).toNotBe(null);
                        });
                    });
                    //#endregion findMethod
                    //#region findVariable
                    describe('findVariable', function () {
                        it("should go through the module and find the variable with the specified name.", function () {
                            var testModule = Classical.Reflection.Spec.TestModule;
                            var testVariable = r.findVariable(testModule, function (m) { return m.testVariable; });
                            var noVariable = r.findVariable(testModule, function (m) { return m.noVariable; });
                            expect(testVariable).toBeDefined();
                            expect(noVariable).toBeNull();
                            testModule.noVariable = 'Testing';
                            noVariable = r.findVariable(testModule, function (m) { return m.noVariable; });
                            expect(noVariable).toNotBe(null);
                        });
                    });
                    //#endregion findVariable
                    //#region findFunction
                    describe('findFunction', function () {
                        it("should go through the module and find the function with the specified name.", function () {
                            var testModule = Classical.Reflection.Spec.TestModule;
                            var testFunction = r.findFunction(testModule, function (m) { return m.TestFunction; });
                            var noFunction = r.findFunction(testModule, function (m) { return m.noFunction; });
                            expect(testFunction).toBeDefined();
                            expect(noFunction).toBeNull();
                            testModule.noFunction = function () {
                                console.log('Testing');
                            };
                            noFunction = r.findFunction(testModule, function (m) { return m.noFunction; });
                            expect(noFunction).toNotBe(null);
                        });
                    });
                    //#endregion findFunction
                    //#region findStaticField
                    describe('findStaticField', function () {
                        it("should return a Type's field if it finds it", function () {
                            var staticField = r.findStaticField(DynamicType, function (d) { return d.staticField; });
                            var noField = r.findStaticField(DynamicType, function (d) { return d.noField; });
                            expect(staticField).toBeDefined();
                            expect(noField).toBeNull();
                            DynamicType.noField = 'Hello';
                            noField = r.findStaticField(DynamicType, function (d) { return d.noField; });
                            expect(noField).toNotBe(null);
                        });
                    });
                    //#endregion findStaticField
                    //#region findStaticProperty
                    describe('findStaticProperty', function () {
                        it("should return a Type's property if it finds it", function () {
                            var staticProperty = r.findStaticProperty(DynamicType, function (d) { return d.staticProperty; });
                            var noProperty = r.findStaticProperty(DynamicType, function (d) { return d.noProperty; });
                            expect(staticProperty).toBeDefined();
                            expect(noProperty).toBeNull();
                            Object.defineProperty(DynamicType, "noProperty", {
                                get: function () {
                                    return 'chris';
                                },
                                enumerable: true,
                                configurable: true
                            });
                            noProperty = r.findStaticProperty(DynamicType, function (d) { return d.noProperty; });
                            expect(noProperty).toNotBe(null);
                        });
                    });
                    //#endregion findStaticProperty
                    //#region findStaticMethod
                    describe('findStaticMethod', function () {
                        it("should return a Type's method if it finds it", function () {
                            var staticMethod = r.findStaticMethod(DynamicType, function (d) { return d.staticMethod; });
                            var noMethod = r.findStaticMethod(DynamicType, function (d) { return d.noMethod; });
                            expect(staticMethod).toBeDefined();
                            expect(noMethod).toBeNull();
                            DynamicType.noMethod = function () {
                                return 'Something';
                            };
                            noMethod = r.findStaticMethod(DynamicType, function (d) { return d.noMethod; });
                            expect(noMethod).toNotBe(null);
                        });
                    });
                    //#endregion findStaticMethod
                    //#region Module
                    describe('Module', function () {
                        describe('getFunctions', function () {
                            it('should return the functions of the module.', function () {
                                var testType = typeOf(TestModule.TestType);
                                var testModule = testType.declaringModule;
                                var functions = testModule.getFunctions();
                                expect(functions.count()).toBe(2);
                                expect(functions.hasAny(function (f) { return f.name == 'TestFunction'; })).toBe(true);
                                expect(functions.hasAny(function (f) { return f.name == 'TestParameteredFunction'; })).toBe(true);
                            });
                        });
                        describe('getVariables', function () {
                            it('should return the variables of the module.', function () {
                                var testType = typeOf(TestModule.TestType);
                                var testModule = testType.declaringModule;
                                var variables = testModule.getVariables();
                                expect(variables.count()).toBe(1);
                                expect(variables.hasAny(function (f) { return f.name == 'testVariable'; })).toBe(true);
                            });
                        });
                    });
                    //#endregion Module
                    //#region Type
                    describe('Type', function () {
                        //#region toString
                        describe('toString', function () {
                            it('should return the name of the Type', function () {
                                var obj = {}, derived = new DerivedType();
                                expect(obj.getType().toString())
                                    .toBe('Object');
                                expect(derived.getType().toString())
                                    .toBe('DerivedType');
                            });
                        });
                        //#endregion toString
                        //#region equals
                        describe('equals', function () {
                            it('should return True for the types of different instances of the same type', function () {
                                var firsobject = {}, seconobject = {}, firstDerived = new DerivedType(), secondDerived = new DerivedType();
                                expect(firsobject.getType().equals(seconobject.getType()))
                                    .toBe(true);
                                expect(firstDerived.getType().equals(secondDerived.getType()))
                                    .toBe(true);
                            });
                            it('should return False for the types of instances of different types', function () {
                                var obj = {}, derived = new DerivedType();
                                expect(obj.getType().equals(derived.getType()))
                                    .toBe(false);
                            });
                        });
                        //#endregion equals
                        //#region getHashCode
                        describe('getHashCode', function () {
                            it('should return the same hash code types of different instances of the same type', function () {
                                var firstObject = {}, secondObject = {}, firstDerived = new DerivedType(), secondDerived = new DerivedType();
                                expect(firstObject.getType().getHashCode())
                                    .toBe(secondObject.getType().getHashCode());
                                expect(firstDerived.getType().getHashCode())
                                    .toBe(secondDerived.getType().getHashCode());
                            });
                            it('should return different hash codes for the types of instances of different types', function () {
                                var obj = {}, derived = new DerivedType();
                                expect(obj.getType().getHashCode())
                                    .not.toBe(derived.getType().getHashCode());
                            });
                        });
                        //#endregion getHashCode
                        //#region base
                        describe('base', function () {
                            it('should be the same as the type of a parent Type', function () {
                                var obj = {}, derived = new DerivedType();
                                expect(obj.getType().equals(derived.getType().base))
                                    .toBe(true);
                            });
                        });
                        //#endregion base
                        //#region module
                        describe('module', function () {
                            it('should return the module of the given type.', function () {
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
                        describe('isPrimitive', function () {
                            it('should return true if the type is one of JavaScript\'s primitive types.', function () {
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
                        describe('isAssignableTo', function () {
                            it('should return True when comparing a Type with itself.', function () {
                                var type = {}.getType(), derivedType = new DerivedType().getType();
                                expect(type.isAssignableTo(type)).toBe(true);
                                expect(derivedType.isAssignableTo(derivedType)).toBe(true);
                            });
                            it('should return True when comparing anobjects Type with types on its ancestor chain.', function () {
                                var type = {}.getType(), derivedType = new DerivedType().getType(), moreDerivedType = new MoreDerivedType().getType();
                                expect(derivedType.isAssignableTo(type)).toBe(true);
                                expect(moreDerivedType.isAssignableTo(type)).toBe(true);
                                expect(moreDerivedType.isAssignableTo(derivedType)).toBe(true);
                            });
                        });
                        //#endregion isAssignableFrom
                        //#region isAssignableFrom
                        describe('isAssignableFrom', function () {
                            it('should return True when comparing a Type with itself.', function () {
                                var type = {}.getType(), derivedType = new DerivedType().getType();
                                expect(type.isAssignableFrom(type)).toBe(true);
                                expect(derivedType.isAssignableFrom(derivedType)).toBe(true);
                            });
                            it('should return True when comparing anobjects Type with types on its predecessor tree.', function () {
                                var type = {}.getType(), derivedType = new DerivedType().getType(), moreDerivedType = new MoreDerivedType().getType();
                                expect(type.isAssignableFrom(derivedType)).toBe(true);
                                expect(type.isAssignableFrom(moreDerivedType)).toBe(true);
                                expect(derivedType.isAssignableFrom(moreDerivedType)).toBe(true);
                            });
                        });
                        //#endregion isAssignableFrom
                        //#region getFieldsOf
                        describe('getFieldsOf', function () {
                            it('should return the fields of the given instance of a type.', function () {
                                var reflectionTestInstance = new ReflectionTest();
                                var reflectionTestType = typeOf(ReflectionTest);
                                var fields = reflectionTestType.getFieldsOf(reflectionTestInstance, Reflection.Modifier.Private, Reflection.Modifier.Instance);
                                expect(fields.hasAny(function (f) { return f.name == '_testAge'; })).toBe(true);
                                expect(fields.hasAny(function (f) { return f.name == '_testField'; })).toBe(true);
                            });
                        });
                        //#endregion getFieldsOf
                        //#region getFieldOf
                        describe('getFieldOf', function () {
                            it('should return the specified field of the given instance of a type.', function () {
                                var reflectionTestInstance = new ReflectionTest();
                                var reflectionTestType = typeOf(ReflectionTest);
                                var testAge = reflectionTestType.getFieldOf(reflectionTestInstance, '_testAge', Reflection.Modifier.Private, Reflection.Modifier.Instance);
                                var testField = reflectionTestType.getFieldOf(reflectionTestInstance, '_testField', Reflection.Modifier.Private, Reflection.Modifier.Instance);
                                var notExist = reflectionTestType.getFieldOf(reflectionTestInstance, 'asljdljkh', Reflection.Modifier.Private, Reflection.Modifier.Instance);
                                expect(testAge).toBeDefined();
                                expect(testField).toBeDefined();
                                expect(notExist).toBeNull();
                            });
                        });
                        //#endregion getFieldOf
                        //#region getProperties
                        describe('getProperties', function () {
                            it('should return the properties of the given type.', function () {
                                var propertyTest = new ReflectionTest(), propertyTestType = propertyTest.getType(), properties = propertyTestType.getProperties();
                                expect(properties.query().hasAny(function (p) { return p.name == 'name'; })).toBe(true);
                            });
                        });
                        //#endregion getProperties
                        //#region getProperty
                        describe('getProperty', function () {
                            it('should return the specified property of the given type.', function () {
                                var propertyTest = new ReflectionTest(), propertyTestType = propertyTest.getType(), properties = propertyTestType.getProperties(), nameProperty = propertyTestType.getProperty('name');
                                expect(nameProperty).toBeDefined();
                                expect(nameProperty.name).toBe('name');
                            });
                            it('should return if the property can be get and set correctly.', function () {
                                var propertyTest = new ReflectionTest(), propertyTestType = propertyTest.getType(), properties = propertyTestType.getProperties(), nameProperty = propertyTestType.getProperty('name'), getSetProperty = propertyTestType.getProperty('getSetProperty'), setProperty = propertyTestType.getProperty('setProperty');
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
                            it('should return null if the specified property does not exist.', function () {
                                var propertyTest = new ReflectionTest(), propertyTestType = propertyTest.getType(), properties = propertyTestType.getProperties(), property = propertyTestType.getProperty('doesNotExist');
                                expect(u.isDefined(property)).toBe(false);
                            });
                            it('should return the same instance of Property when the same property is gotten from two different types of the same hierarchy.', function () {
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
                        describe('getMethods', function () {
                            it('should return the methods of the given type.', function () {
                                var reflectionTest = new ReflectionTest(), reflectionTestType = reflectionTest.getType(), methods = reflectionTestType.getMethods();
                                expect(methods.query().hasAny(function (p) { return p.name == 'returnNumber'; })).toBe(true);
                            });
                            it('should return public and private methods correctly.', function () {
                                var reflectionTest = new ReflectionTest(), reflectionTestType = reflectionTest.getType(), privateMethods = reflectionTestType.getMethods(Reflection.Modifier.Private), publicMethods = reflectionTestType.getMethods(Reflection.Modifier.Public);
                                expect(privateMethods.hasAny(function (m) { return m.name === '_firstPrivateMethod'; })).toBe(true);
                                expect(privateMethods.hasAny(function (m) { return m.name === '_secondPrivateMethod'; })).toBe(true);
                                expect(privateMethods.hasNone(function (m) { return m.name === 'returnNumber'; })).toBe(true);
                                expect(publicMethods.hasAny(function (m) { return m.name === 'returnNumber'; })).toBe(true);
                                expect(publicMethods.hasAny(function (m) { return m.name === 'returnParameter'; })).toBe(true);
                                expect(publicMethods.hasNone(function (m) { return m.name === '_secondPrivateMethod'; })).toBe(true);
                            });
                            it('should return static and instance methods correctly.', function () {
                                var reflectionTest = new ReflectionTest(), reflectionTestType = reflectionTest.getType(), publicStaticMethods = reflectionTestType.getMethods(Reflection.Modifier.Public, Reflection.Modifier.Static), publicInstanceMethods = reflectionTestType.getMethods(Reflection.Modifier.Public, Reflection.Modifier.Instance), privateStaticMethods = reflectionTestType.getMethods(Reflection.Modifier.Private, Reflection.Modifier.Static);
                                expect(publicStaticMethods.hasAny(function (m) { return m.name === 'staticMethod'; })).toBe(true);
                                expect(publicStaticMethods.hasNone(function (m) { return m.name === 'returnNumber'; })).toBe(true);
                                expect(publicStaticMethods.hasNone(function (m) { return m.name === 'returnParameter'; })).toBe(true);
                                expect(publicInstanceMethods.hasAny(function (m) { return m.name === 'returnNumber'; })).toBe(true);
                                expect(publicInstanceMethods.hasAny(function (m) { return m.name === 'returnParameter'; })).toBe(true);
                                expect(publicInstanceMethods.hasNone(function (m) { return m.name === 'staticMethod'; })).toBe(true);
                                expect(privateStaticMethods.hasAny(function (m) { return m.name === '_privateStaticMethod'; })).toBe(true);
                                expect(privateStaticMethods.hasNone(function (m) { return m.name === '_firstPrivateMethod'; })).toBe(true);
                                expect(privateStaticMethods.hasNone(function (m) { return m.name === '_secondPrivateMethod'; })).toBe(true);
                            });
                        });
                        //#endregion getMethods
                        //#region getMethod
                        describe('getMethod', function () {
                            it('should return the specified method of the given type.', function () {
                                var reflectionTest = new ReflectionTest(), reflectionTestType = reflectionTest.getType(), method = reflectionTestType.getMethod('returnNumber');
                                expect(method).toBeDefined();
                                expect(method.name).toBe('returnNumber');
                            });
                        });
                        //#endregion getMethod
                    });
                    //#endregion Type
                    //#region Null
                    describe('Null', function () {
                        it('Should return the Null Type correctly and return the correct values for all methods.', function () {
                            var nullType = typeOf(Null);
                            expect(nullType).toBe(Reflection.Type.null);
                            expect(nullType.getFieldsOf(null).count()).toBe(0);
                            expect(nullType.getProperties().count()).toBe(0);
                            expect(nullType.getMethods().count()).toBe(0);
                            expect(nullType.name).toBe('Null');
                            expect(nullType.fullName).toBe('Null');
                            expect(nullType.create()).toBe(null);
                            expect(function () { return typeOf(null); }).toThrow();
                        });
                    });
                    //#endregion Null
                    //#region Undefined
                    describe('Undefined', function () {
                        it('Should return the Undefined Type correctly and return the correct values for all methods.', function () {
                            var undefinedType = typeOf(Undefined);
                            expect(undefinedType).toBe(Reflection.Type.undefined);
                            expect(undefinedType.getFieldsOf(undefined).count()).toBe(0);
                            expect(undefinedType.getProperties().count()).toBe(0);
                            expect(undefinedType.getMethods().count()).toBe(0);
                            expect(undefinedType.name).toBe('Undefined');
                            expect(undefinedType.fullName).toBe('Undefined');
                            expect(undefinedType.create()).toBe(undefined);
                            expect(function () { return typeOf(undefined); }).toThrow();
                        });
                    });
                    //#endregion Undefined
                    //#region Property
                    describe('Property', function () {
                        //#region exists
                        describe('exists', function () {
                            it('should return true if the property of the selector exists on the Type, false otherwise.', function () {
                                var reflectionTest = new ReflectionTest();
                                var anyReflectionTest = new ReflectionTest();
                                expect(r.Property.exists(reflectionTest, function (rt) { return rt.name; })).toBe(true);
                                expect(r.Property.exists(reflectionTest, function (rt) { return rt.getSetProperty; })).toBe(true);
                                expect(r.Property.exists(anyReflectionTest, function (rt) { return rt.getSetProperty; })).toBe(true);
                                expect(r.Property.exists(anyReflectionTest, function (rt) { return rt.thisPropertyShouldNotExist; })).toBe(false);
                                expect(r.Property.exists(anyReflectionTest, function (rt) { return rt.thisPropertyShouldAlsoNotExist; })).toBe(false);
                            });
                        });
                        //#endregion exists
                        //#region declaringType
                        describe('declaringType', function () {
                            it('should return the declaring type of the property.', function () {
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
                        describe('isMethod', function () {
                            it('should return a boolean result describing if the property is a method or not.', function () {
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
                        describe('getValue', function () {
                            it('should get the value of the provided property.', function () {
                                var propertyTestInstance = new ReflectionTest(), propertyTestType = propertyTestInstance.getType(), derivedType = typeOf(DerivedReflectionTest), firstNameProperty = propertyTestType.getProperty('getSetProperty'), derivedProperty = derivedType.getProperty('derivedProperty');
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
                            it('should get the value of the provided property, calling the correct overridden version given the specified type of the instance.', function () {
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
                        describe('setValue', function () {
                            it('should set the value of the provided property.', function () {
                                var propertyTestInstance = new ReflectionTest(), propertyTestType = propertyTestInstance.getType(), derivedType = typeOf(DerivedReflectionTest), firstNameProperty = propertyTestType.getProperty('getSetProperty'), derivedProperty = derivedType.getProperty('derivedProperty');
                                var changedValue = 'Chris';
                                firstNameProperty.setValue(propertyTestInstance, changedValue);
                                expect(propertyTestInstance.getSetProperty).toBe(changedValue);
                                try {
                                    derivedProperty.setValue(propertyTestInstance, 'Christopher');
                                    throw 'the property cannot be set if it does not exist on the current type.';
                                }
                                catch (error) {
                                }
                            });
                            it('should set the value of the provided property, calling the correct overridden version given the specified type of the instance.', function () {
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
                    describe('Method', function () {
                        describe('invoke', function () {
                            it('should invoke the specified method, returning the correct value.', function () {
                                var reflectionTest = new ReflectionTest(), reflectionTestType = reflectionTest.getType(), method = reflectionTestType.getMethod('returnNumber');
                                var result = method.invoke(reflectionTest);
                                expect(result).toBe(reflectionTest.returnNumber());
                            });
                            it('should invoke the specified method with parameters, returning the correct value.', function () {
                                var reflectionTest = new ReflectionTest(), reflectionTestType = reflectionTest.getType(), method = reflectionTestType.getMethod('returnParameter');
                                var parameterValue = 'TestParameter';
                                var result = method.invoke(reflectionTest, parameterValue);
                                expect(result).toBe(reflectionTest.returnParameter(parameterValue));
                                parameterValue = 'SecondTestParameter';
                                result = method.invoke(reflectionTest, parameterValue);
                                expect(result).toBe(reflectionTest.returnParameter(parameterValue));
                            });
                        });
                        describe('getParameters', function () {
                            it('should return the correct number of parameters in the correct position.', function () {
                                var testType = typeOf(TestModule.TestType);
                                var testModule = testType.declaringModule;
                                var functions = testModule.getFunctions();
                                var parameteredFunction = functions.single(function (f) { return f.name === 'TestParameteredFunction'; });
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
                });
            });
            //#region Test Classes
            var TestEnum;
            (function (TestEnum) {
                TestEnum[TestEnum["First"] = 0] = "First";
                TestEnum[TestEnum["Second"] = 1] = "Second";
                TestEnum[TestEnum["Third"] = 2] = "Third";
            })(TestEnum || (TestEnum = {}));
            var DynamicType = (function () {
                function DynamicType() {
                    this.testField = 'Hello';
                }
                Object.defineProperty(DynamicType.prototype, "name", {
                    get: function () {
                        return 'name';
                    },
                    enumerable: true,
                    configurable: true
                });
                DynamicType.prototype.testMethod = function () {
                    console.log('something');
                };
                Object.defineProperty(DynamicType, "staticProperty", {
                    get: function () {
                        return 'Something';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DynamicType, "staticMethod", {
                    get: function () {
                        return 'Something';
                    },
                    enumerable: true,
                    configurable: true
                });
                DynamicType.staticField = 'Chris';
                return DynamicType;
            })();
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
                    this._testField = 'Chris';
                    this._testAge = 5;
                    this.testField = 'Chris';
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
                ReflectionTest.prototype._firstPrivateMethod = function () {
                };
                ReflectionTest.prototype._secondPrivateMethod = function () {
                };
                ReflectionTest.staticMethod = function () {
                };
                ReflectionTest._privateStaticMethod = function () {
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
            var BaseType = (function () {
                function BaseType() {
                    this.secretNumber = 5;
                }
                Object.defineProperty(BaseType.prototype, "OverriddenProperty", {
                    get: function () {
                        return 'Hello';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseType.prototype, "SecondOverriddenProperty", {
                    get: function () {
                        return 'Hello';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseType.prototype, "BaseProperty", {
                    get: function () {
                        return 'SomethingElse';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseType.prototype, "BaseSetter", {
                    set: function (value) {
                        this.secretNumber = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                BaseType.prototype.BaseMethod = function () {
                };
                return BaseType;
            })();
            var DerivedBaseType = (function (_super) {
                __extends(DerivedBaseType, _super);
                function DerivedBaseType() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(DerivedBaseType.prototype, "OverriddenProperty", {
                    get: function () {
                        return 'Bye';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DerivedBaseType.prototype, "OverriddenDerivedProperty", {
                    get: function () {
                        return 'OverriddenDerivedProperty';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DerivedBaseType.prototype, "DerivedProperty", {
                    get: function () {
                        return 'DerivedProperty';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DerivedBaseType.prototype, "BaseSetter", {
                    set: function (value) {
                        this.secretNumber = value + 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                return DerivedBaseType;
            })(BaseType);
            var SecondDerivedType = (function (_super) {
                __extends(SecondDerivedType, _super);
                function SecondDerivedType() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(SecondDerivedType.prototype, "OverriddenDerivedProperty", {
                    get: function () {
                        return 'OverriddenDerivedProperty2';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SecondDerivedType.prototype, "SecondOverriddenProperty", {
                    get: function () {
                        return 'Hello3';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SecondDerivedType.prototype, "BaseSetter", {
                    set: function (value) {
                        this.secretNumber = value + 2;
                    },
                    enumerable: true,
                    configurable: true
                });
                return SecondDerivedType;
            })(DerivedBaseType);
            //#endregion Test Classes
            //#region Test Modules
            var TestModule;
            (function (TestModule) {
                var TestType = (function () {
                    function TestType() {
                    }
                    Object.defineProperty(TestType.prototype, "testProp", {
                        get: function () {
                            return 42;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return TestType;
                })();
                TestModule.TestType = TestType;
                function TestFunction() {
                }
                TestModule.TestFunction = TestFunction;
                function TestParameteredFunction(first, second) {
                }
                TestModule.TestParameteredFunction = TestParameteredFunction;
                TestModule.testVariable = 'This is a test';
            })(TestModule = Spec.TestModule || (Spec.TestModule = {}));
        })(Spec = Reflection.Spec || (Reflection.Spec = {}));
    })(Reflection = Classical.Reflection || (Classical.Reflection = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Reflection.spec.js.map