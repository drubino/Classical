var Classical;
(function (Classical) {
    var Aspects;
    (function (Aspects) {
        var Spec;
        (function (Spec) {
            //#region Imports
            var a = Classical.Aspects;
            //#endregion Imports
            describe('Aspects', function () {
                //#region PropertyAspect
                describe('PropertyAspect', function () {
                    describe('onGetValue', function () {
                        it('should execute the provided function before retrieving the property.', function () {
                            var testClass = new TestClass();
                            var testClassType = testClass.getType();
                            var testProperty = testClassType.getProperty('testProperty');
                            var testValue = 60;
                            var secondValue = 70;
                            var propertyValue = testClass.testProperty;
                            expect(testValue).toBe(60);
                            expect(secondValue).toBe(70);
                            expect(propertyValue).toBe(42);
                            a.PropertyAspect.onGetValue(testProperty, function (p) {
                                testValue++;
                            });
                            propertyValue = testClass.testProperty;
                            expect(propertyValue).toBe(42);
                            expect(testValue).toBe(61);
                            expect(secondValue).toBe(70);
                            a.PropertyAspect.onGetValue(testProperty, function (p) {
                                secondValue++;
                            });
                            propertyValue = testClass.testProperty;
                            expect(propertyValue).toBe(42);
                            expect(testValue).toBe(62);
                            expect(secondValue).toBe(71);
                        });
                    });
                    describe('onSetValue', function () {
                        it('should execute the provided function before setting the property.', function () {
                            var testClass = new TestClass();
                            var testClassType = testClass.getType();
                            var testProperty = testClassType.getProperty('testProperty');
                            var testValue = 60;
                            var secondValue = 70;
                            var setValue = 20;
                            //Aspects.PropertyAspect.removeAllAspects(testProperty);
                            testClass.testProperty = setValue;
                            expect(testClass.testProperty).toBe(setValue);
                            expect(testValue).toBe(60);
                            expect(secondValue).toBe(70);
                            a.PropertyAspect.onSetValue(testProperty, function (p, v) {
                                testValue++;
                            });
                            setValue++;
                            testClass.testProperty = setValue;
                            expect(testClass.testProperty).toBe(setValue);
                            expect(testValue).toBe(61);
                            expect(secondValue).toBe(70);
                            a.PropertyAspect.onSetValue(testProperty, function (p, v) {
                                secondValue++;
                            });
                            setValue++;
                            testClass.testProperty = setValue;
                            expect(testClass.testProperty).toBe(setValue);
                            expect(testValue).toBe(62);
                            expect(secondValue).toBe(71);
                        });
                    });
                });
                //#endregion PropertyAspect
                //#region MethodAspect
                describe('MethodAspect', function () {
                    describe('onEntry', function () {
                        it('should execute the provided function before executing the original function.', function () {
                            var value = 65;
                            var secondValue = 40;
                            var testClass = new TestClass();
                            var testClassType = testClass.getType();
                            var testFunction = testClassType.getMethod('testFunction');
                            a.MethodAspect.onEntry(testFunction, function (m) {
                                value++;
                            });
                            expect(value).toBe(65);
                            var functionValue = testClass.testFunction(5);
                            expect(functionValue).toBe(5);
                            expect(value).toBe(66);
                            expect(secondValue).toBe(40);
                            a.MethodAspect.onEntry(testFunction, function (m) {
                                secondValue++;
                            });
                            functionValue = testClass.testFunction(6);
                            expect(functionValue).toBe(6);
                            expect(value).toBe(67);
                            expect(secondValue).toBe(41);
                            var staticValue = 0;
                            var testStaticFunction = testClassType.getMethod('testStaticFunction', Classical.Reflection.Modifier.Static, Classical.Reflection.Modifier.Public);
                            a.MethodAspect.onEntry(testStaticFunction, function (m) {
                                staticValue++;
                            });
                            functionValue = TestClass.testStaticFunction(5);
                            expect(functionValue).toBe(5);
                            expect(staticValue).toBe(1);
                        });
                    });
                    describe('onExit', function () {
                        it('must execute the provided function after executing the original function.', function () {
                            var value = 65;
                            var secondValue = 40;
                            var testClass = new TestClass();
                            var testClassType = testClass.getType();
                            var testFunction = testClassType.getMethod('testFunction');
                            a.MethodAspect.onExit(testFunction, function (m, r) {
                                value = r;
                            });
                            expect(value).toBe(65);
                            var val = testClass.testFunction(5);
                            expect(val).toBe(5);
                            expect(value).toBe(5);
                            expect(secondValue).toBe(40);
                            a.MethodAspect.onExit(testFunction, function (m, r) {
                                secondValue = r;
                            });
                            val = testClass.testFunction(6);
                            expect(val).toBe(6);
                            expect(value).toBe(6);
                            expect(secondValue).toBe(6);
                        });
                    });
                    describe('onException', function () {
                        it('should execute the method provided when an exception occurs during the original function.', function () {
                            var value = 'Hello';
                            var testClass = new TestClass();
                            var testClassType = testClass.getType();
                            var testFunction = testClassType.getMethod('testErrorFunction');
                            a.MethodAspect.onException(testFunction, function (m, e) {
                                value = e;
                            });
                            var val = testClass.testErrorFunction(3);
                            expect(val).toBe(3);
                            expect(value).toBe('Hello');
                            try {
                                val = testClass.testErrorFunction(2);
                            }
                            catch (e) {
                                expect(val).toBe(3);
                                expect(value).toBe('You used an even number ' + 2);
                            }
                        });
                    });
                    describe('removeAspect', function () {
                        it('should remove the specified aspect from the method.', function () {
                            var value = 65;
                            var secondValue = 40;
                            var testClass = new TestClass();
                            var testClassType = testClass.getType();
                            var testFunction = testClassType.getMethod('testFunction');
                            a.MethodAspect.onExit(testFunction, function (m, r) {
                                value = r;
                            });
                            expect(value).toBe(65);
                            var val = testClass.testFunction(5);
                            expect(val).toBe(5);
                            expect(value).toBe(5);
                            expect(secondValue).toBe(40);
                            var onExitAspect = a.MethodAspect.onExit(testFunction, function (m, r) {
                                secondValue = r;
                            });
                            val = testClass.testFunction(6);
                            expect(val).toBe(6);
                            expect(value).toBe(6);
                            expect(secondValue).toBe(6);
                            a.MethodAspect.removeAspect(testFunction, onExitAspect);
                            val = testClass.testFunction(28);
                            expect(val).toBe(28);
                            expect(value).toBe(28);
                            expect(secondValue).toBe(6);
                        });
                    });
                    describe('removeAllAspects', function () {
                        it('should remove all aspects from the method.', function () {
                            var value = 65;
                            var secondValue = 40;
                            var testClass = new TestClass();
                            var testClassType = testClass.getType();
                            var testFunction = testClassType.getMethod('testFunction');
                            a.MethodAspect.onExit(testFunction, function (m, r) {
                                value = r;
                            });
                            expect(value).toBe(65);
                            var val = testClass.testFunction(5);
                            expect(val).toBe(5);
                            expect(value).toBe(5);
                            expect(secondValue).toBe(40);
                            var onExitAspect = a.MethodAspect.onExit(testFunction, function (m, r) {
                                secondValue = r;
                            });
                            val = testClass.testFunction(6);
                            expect(val).toBe(6);
                            expect(value).toBe(6);
                            expect(secondValue).toBe(6);
                            a.MethodAspect.removeAllAspects(testFunction);
                            val = testClass.testFunction(28);
                            expect(val).toBe(28);
                            expect(value).toBe(6);
                            expect(secondValue).toBe(6);
                        });
                    });
                });
                //#endregion MethodAspect
            });
            //#region Test Classes
            var TestClass = (function () {
                function TestClass() {
                    this._num = 42;
                }
                Object.defineProperty(TestClass.prototype, "testProperty", {
                    get: function () {
                        return this._num;
                    },
                    set: function (value) {
                        this._num = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                TestClass.prototype.testFunction = function (n) {
                    return n;
                };
                TestClass.prototype.testErrorFunction = function (n) {
                    if (n % 2 === 0)
                        throw 'You used an even number ' + n;
                    return n;
                };
                TestClass.testStaticFunction = function (n) {
                    return n;
                };
                return TestClass;
            })();
        })(Spec = Aspects.Spec || (Aspects.Spec = {}));
    })(Aspects = Classical.Aspects || (Classical.Aspects = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Aspects.spec.js.map