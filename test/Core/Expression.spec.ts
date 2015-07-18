module Classical.Expression.Spec {

    import Expression = Classical.Expression;

    describe('Classical', () => {
        describe('Expression', () => {
            describe('getProperty', () => {
                it('should return the property name from a function representing the property selector.', () => {
                    var result: string;

                    result = Expression.getProperty<any>(x => x.property);
                    expect(result).toBe('property');

                    result = Expression.getProperty<any>(x => { return x.property });
                    expect(result).toBe('property');

                    result = Expression.getProperty<any>(x => { x.property; });
                    expect(result).toBe('property');

                    result = Expression.getProperty<any>(x => { return x.property; });
                    expect(result).toBe('property');

                    result = Expression.getProperty<any>(x => x.somethingThatIsReallyLong);
                    expect(result).toBe('somethingThatIsReallyLong');

                    result = Expression.getProperty<any>(x => x.numbers1234567890);
                    expect(result).toBe('numbers1234567890');

                    result = Expression.getProperty<any>(x => x.$);
                    expect(result).toBe('$');

                    expect(() => Expression.getProperty<any>(x => x)).toThrow();

                    expect(() => Expression.getProperty<any>(x => { x.hello; x.goodBye; })).toThrow();

                    expect(() => Expression.getProperty<any>(x => { })).toThrow();
                });
                it('should return the property name from a function representing an accessor selector.', () => {
                    var result: string;

                    result = Expression.getProperty(x => x['property']);
                    expect(result).toBe('property');

                    result = Expression.getProperty(x => x['0prop.erty!']);
                    expect(result).toBe('0prop.erty!');

                    result = Expression.getProperty(x => x["property"]);
                    expect(result).toBe('property');

                    result = Expression.getProperty(x => x["0prop.erty!"]);
                    expect(result).toBe('0prop.erty!');

                    expect(() => Expression.getProperty<number>(x => x + 2)).toThrow();
                });
            });
            it('should return the property name from a function representing an string literal selector.', () => {
                var result: string;

                result = Expression.getProperty(x => 'property');
                expect(result).toBe('property');

                result = Expression.getProperty(x => "property");
                expect(result).toBe('property');

                result = Expression.getProperty(x => { "property"; });
                expect(result).toBe('property');

                result = Expression.getProperty(x => { return "property" });
                expect(result).toBe('property');

                result = Expression.getProperty(x => { return "property"; });
                expect(result).toBe('property');

                result = Expression.getProperty(x => '0prop.erty!');
                expect(result).toBe('0prop.erty!');

                result = Expression.getProperty(x => "0prop.erty!");
                expect(result).toBe('0prop.erty!');

                result = Expression.getProperty(x => '439857093487509');
                expect(result).toBe('439857093487509');

                result = Expression.getProperty(x => "439857093487509");
                expect(result).toBe('439857093487509');

                expect(() => Expression.getProperty<number>(x => x + 2)).toThrow();
            });

            describe('getArguments', () => {
                it('should return an empty array of parameterless functions.', () => {
                    //TODO: Test both types of input in different it() statements.

                    var model = {
                        firstParameterless: function () { },
                        secondParameterless: function () { console.log('Hi'); },
                        thirdParameterless: function () { return 2 + 2; },
                        notAFunction: 'chris',
                    },
                        result: Array<string>;

                    result = Expression.getArguments(model.firstParameterless);
                    expect(result.count()).toBe(0);

                    result = Expression.getArguments(model.secondParameterless);
                    expect(result.count()).toBe(0);

                    result = Expression.getArguments(model.thirdParameterless);
                    expect(result.count()).toBe(0);
                });
            });

            describe('getArguments', () => {
                it('should return an array of names of each argument of the specified function.', () => {
                    //TODO: Test both types of input in different it() statements.

                    var model = {
                        oneParameter: function (first) { },
                        threeParameter: function (first, second, third) { },
                        multipleParameters: function (first, second, third, fourth, fifth) { },
                        notAFunction: 'chris',
                    },
                        result: Array<string>;

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
}