var Classical;
(function (Classical) {
    var Expression;
    (function (Expression_1) {
        var Spec;
        (function (Spec) {
            var Expression = Classical.Expression;
            describe('Classical', function () {
                describe('Expression', function () {
                    describe('getProperty', function () {
                        it('should return the property name from a function representing the property selector.', function () {
                            var result;
                            result = Expression.getProperty(function (x) { return x.property; });
                            expect(result).toBe('property');
                            result = Expression.getProperty(function (x) { return x.property; });
                            expect(result).toBe('property');
                            result = Expression.getProperty(function (x) { x.property; });
                            expect(result).toBe('property');
                            result = Expression.getProperty(function (x) { return x.property; });
                            expect(result).toBe('property');
                            result = Expression.getProperty(function (x) { return x.somethingThatIsReallyLong; });
                            expect(result).toBe('somethingThatIsReallyLong');
                            result = Expression.getProperty(function (x) { return x.numbers1234567890; });
                            expect(result).toBe('numbers1234567890');
                            result = Expression.getProperty(function (x) { return x.$; });
                            expect(result).toBe('$');
                            expect(function () { return Expression.getProperty(function (x) { return x; }); }).toThrow();
                            expect(function () { return Expression.getProperty(function (x) { x.hello; x.goodBye; }); }).toThrow();
                            expect(function () { return Expression.getProperty(function (x) { }); }).toThrow();
                        });
                        it('should return the property name from a function representing an accessor selector.', function () {
                            var result;
                            result = Expression.getProperty(function (x) { return x['property']; });
                            expect(result).toBe('property');
                            result = Expression.getProperty(function (x) { return x['0prop.erty!']; });
                            expect(result).toBe('0prop.erty!');
                            result = Expression.getProperty(function (x) { return x["property"]; });
                            expect(result).toBe('property');
                            result = Expression.getProperty(function (x) { return x["0prop.erty!"]; });
                            expect(result).toBe('0prop.erty!');
                            expect(function () { return Expression.getProperty(function (x) { return x + 2; }); }).toThrow();
                        });
                    });
                    it('should return the property name from a function representing an string literal selector.', function () {
                        var result;
                        result = Expression.getProperty(function (x) { return 'property'; });
                        expect(result).toBe('property');
                        result = Expression.getProperty(function (x) { return "property"; });
                        expect(result).toBe('property');
                        result = Expression.getProperty(function (x) {
                            "property";
                        });
                        expect(result).toBe('property');
                        result = Expression.getProperty(function (x) { return "property"; });
                        expect(result).toBe('property');
                        result = Expression.getProperty(function (x) { return "property"; });
                        expect(result).toBe('property');
                        result = Expression.getProperty(function (x) { return '0prop.erty!'; });
                        expect(result).toBe('0prop.erty!');
                        result = Expression.getProperty(function (x) { return "0prop.erty!"; });
                        expect(result).toBe('0prop.erty!');
                        result = Expression.getProperty(function (x) { return '439857093487509'; });
                        expect(result).toBe('439857093487509');
                        result = Expression.getProperty(function (x) { return "439857093487509"; });
                        expect(result).toBe('439857093487509');
                        expect(function () { return Expression.getProperty(function (x) { return x + 2; }); }).toThrow();
                    });
                    describe('getArguments', function () {
                        it('should return an empty array of parameterless functions.', function () {
                            //TODO: Test both types of input in different it() statements.
                            var model = {
                                firstParameterless: function () { },
                                secondParameterless: function () { console.log('Hi'); },
                                thirdParameterless: function () { return 2 + 2; },
                                notAFunction: 'chris',
                            }, result;
                            result = Expression.getArguments(model.firstParameterless);
                            expect(result.count()).toBe(0);
                            result = Expression.getArguments(model.secondParameterless);
                            expect(result.count()).toBe(0);
                            result = Expression.getArguments(model.thirdParameterless);
                            expect(result.count()).toBe(0);
                        });
                    });
                    describe('getArguments', function () {
                        it('should return an array of names of each argument of the specified function.', function () {
                            //TODO: Test both types of input in different it() statements.
                            var model = {
                                oneParameter: function (first) { },
                                threeParameter: function (first, second, third) { },
                                multipleParameters: function (first, second, third, fourth, fifth) { },
                                notAFunction: 'chris',
                            }, result;
                            result = Expression.getArguments(model.oneParameter);
                            expect(result.count()).toBe(1);
                            expect(result[0]).toBe('first');
                            result = Expression.getArguments(model.threeParameter);
                            expect(result.count()).toBe(3);
                            expect(result[0]).toBe('first');
                            expect(result[1]).toBe('second');
                            expect(result[2]).toBe('third');
                            result = Expression.getArguments(model.multipleParameters);
                            expect(result.count()).toBe(5);
                            expect(result[0]).toBe('first');
                            expect(result[1]).toBe('second');
                            expect(result[2]).toBe('third');
                            expect(result[3]).toBe('fourth');
                            expect(result[4]).toBe('fifth');
                        });
                    });
                });
            });
        })(Spec = Expression_1.Spec || (Expression_1.Spec = {}));
    })(Expression = Classical.Expression || (Classical.Expression = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Expression.spec.js.map