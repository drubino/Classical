module Classical.Aspects.Spec {

    //#region Imports

    import a = Classical.Aspects;

    //#endregion Imports

    describe('Aspects',() => {

        //#region PropertyAspect

        describe('PropertyAspect', () => {
            describe('onGetValue',() => {
                it('should execute the provided function before retrieving the property.',() => {
                    var testClass = new TestClass();
                    var testClassType = testClass.getType();
                    var testProperty = testClassType.getProperty('testProperty');
                    var testValue = 60;
                    var secondValue = 70;
                    var propertyValue = testClass.testProperty;
                    
                    expect(testValue).toBe(60);
                    expect(secondValue).toBe(70);
                    expect(propertyValue).toBe(42);

                    a.PropertyAspect.onGetValue(testProperty, (p) => {
                        testValue++;
                    });

                    propertyValue = testClass.testProperty;
                    expect(propertyValue).toBe(42);
                    expect(testValue).toBe(61);
                    expect(secondValue).toBe(70);

                    a.PropertyAspect.onGetValue(testProperty,(p) => {
                        secondValue++;
                    });

                    propertyValue = testClass.testProperty;
                    expect(propertyValue).toBe(42);
                    expect(testValue).toBe(62);
                    expect(secondValue).toBe(71);
                });
            });

            describe('onSetValue',() => {
                it('should execute the provided function before setting the property.',() => {
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

                    a.PropertyAspect.onSetValue(testProperty,(p, v) => {
                        testValue++;
                    });

                    setValue++;
                    testClass.testProperty = setValue;
                    expect(testClass.testProperty).toBe(setValue);
                    expect(testValue).toBe(61);
                    expect(secondValue).toBe(70);

                    a.PropertyAspect.onSetValue(testProperty,(p, v) => {
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

        describe('MethodAspect', () => {
            describe('onEntry',() => {
                it('should execute the provided function before executing the original function.',() => {
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
                    var testStaticFunction = testClassType.getMethod('testStaticFunction', Reflection.Modifier.Static, Reflection.Modifier.Public);
                    a.MethodAspect.onEntry(testStaticFunction,(m) => {
                        staticValue++;
                    });

                    functionValue = TestClass.testStaticFunction(5);
                    expect(functionValue).toBe(5);
                    expect(staticValue).toBe(1);
                });
            });

            describe('onExit',() => {
                it('must execute the provided function after executing the original function.',() => {
                    var value = 65;
                    var secondValue = 40;
                    var testClass = new TestClass();
                    var testClassType = testClass.getType();
                    var testFunction = testClassType.getMethod('testFunction');

                    a.MethodAspect.onExit(testFunction, (m, r) => {
                        value = r;
                    });

                    expect(value).toBe(65);
                    var val = testClass.testFunction(5);
                    expect(val).toBe(5);
                    expect(value).toBe(5);
                    expect(secondValue).toBe(40);

                    a.MethodAspect.onExit(testFunction, (m, r) => {
                        secondValue = r;
                    });

                    val = testClass.testFunction(6);
                    expect(val).toBe(6);
                    expect(value).toBe(6);
                    expect(secondValue).toBe(6);
                });
            });

            describe('onException',() => {
                it('should execute the method provided when an exception occurs during the original function.',() => {
                    var value = 'Hello';
                    var testClass = new TestClass();
                    var testClassType = testClass.getType();
                    var testFunction = testClassType.getMethod('testErrorFunction');

                    a.MethodAspect.onException(testFunction,(m, e) => {
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

            describe('removeAspect',() => {
                it('should remove the specified aspect from the method.',() => {
                    var value = 65;
                    var secondValue = 40;
                    var testClass = new TestClass();
                    var testClassType = testClass.getType();
                    var testFunction = testClassType.getMethod('testFunction');

                    a.MethodAspect.onExit(testFunction,(m, r) => {
                        value = r;
                    });

                    expect(value).toBe(65);
                    var val = testClass.testFunction(5);
                    expect(val).toBe(5);
                    expect(value).toBe(5);
                    expect(secondValue).toBe(40);

                    var onExitAspect = a.MethodAspect.onExit(testFunction,(m, r) => {
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

            describe('removeAllAspects',() => {
                it('should remove all aspects from the method.',() => {
                    var value = 65;
                    var secondValue = 40;
                    var testClass = new TestClass();
                    var testClassType = testClass.getType();
                    var testFunction = testClassType.getMethod('testFunction');

                    a.MethodAspect.onExit(testFunction,(m, r) => {
                        value = r;
                    });

                    expect(value).toBe(65);
                    var val = testClass.testFunction(5);
                    expect(val).toBe(5);
                    expect(value).toBe(5);
                    expect(secondValue).toBe(40);

                    var onExitAspect = a.MethodAspect.onExit(testFunction,(m, r) => {
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

    class TestClass {

        private _num: number = 42;

        get testProperty(): number {
            return this._num;
        }

        set testProperty(value: number) {
            this._num = value;
        }

        testFunction(n: number): number {
            return n;
        }

        testErrorFunction(n: number): number {
            if (n % 2 === 0)
                throw 'You used an even number ' + n;

            return n;
        }

        static testStaticFunction(n: number): number {
            return n;
        }
    }

    //#endregion Test Classes
} 