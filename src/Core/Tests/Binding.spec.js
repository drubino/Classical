var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Classical;
(function (Classical) {
    var Binding;
    (function (Binding) {
        var Spec;
        (function (Spec) {
            //#region Imports
            var u = Classical.Utilities;
            var Assert = Classical.Assert;
            //#endregion Imports
            //#region Binding
            describe('Classical', function () {
                describe('Binding', function () {
                    //#region Update
                    describe('Update', function () {
                        //#region addSource
                        describe('addSource', function () {
                            it('to have the sources that have been added', function () {
                                var update = new IntegerUpdate(), first = {}, second = [], third = new Integer();
                                expect(update.hasSource(first)).toBe(false);
                                expect(update.hasSource(second)).toBe(false);
                                expect(update.hasSource(third)).toBe(false);
                                update.addSource(first);
                                update.addSource(second);
                                update.addSource(third);
                                expect(update.hasSource(first)).toBe(true);
                                expect(update.hasSource(second)).toBe(true);
                                expect(update.hasSource(third)).toBe(true);
                            });
                        });
                        //#endregion addSource
                        //#region transferTo
                        describe('transferTo', function () {
                            it('should transfer the sources to the target update', function () {
                                var sourceUpdate = new IntegerUpdate(), targetUpdate = new IntegerUpdate(), first = {}, second = [], third = new Integer();
                                sourceUpdate.transferSourcesTo(targetUpdate);
                                expect(targetUpdate.hasSource(first)).toBe(false);
                                expect(targetUpdate.hasSource(second)).toBe(false);
                                expect(targetUpdate.hasSource(third)).toBe(false);
                                sourceUpdate.addSource(first);
                                sourceUpdate.addSource(second);
                                sourceUpdate.addSource(third);
                                sourceUpdate.transferSourcesTo(targetUpdate);
                                expect(targetUpdate.hasSource(first)).toBe(true);
                                expect(targetUpdate.hasSource(second)).toBe(true);
                                expect(targetUpdate.hasSource(third)).toBe(true);
                            });
                            it('should add sources to an update that already has sources', function () {
                                var sourceUpdate = new IntegerUpdate(), targetUpdate = new IntegerUpdate(), first = {}, second = [], third = new Integer();
                                targetUpdate.addSource(first);
                                sourceUpdate.addSource(second);
                                sourceUpdate.addSource(third);
                                sourceUpdate.transferSourcesTo(targetUpdate);
                                expect(targetUpdate.hasSource(first)).toBe(true);
                                expect(targetUpdate.hasSource(second)).toBe(true);
                                expect(targetUpdate.hasSource(third)).toBe(true);
                            });
                        });
                        //#endregion transferTo
                    });
                    //#endregion Update
                    //#region Synchronizer
                    describe('Synchronizer', function () {
                        //#region hasSource
                        describe('hasSource', function () {
                            it('should return false for the source and true for the target in one-way binding', function () {
                                var first = new Integer(0), second = new Integer(1);
                                bindOneWay(second, first);
                                expect(first.hasSource(second)).toBe(false);
                                expect(second.hasSource(first)).toBe(true);
                            });
                            it('should return true for the source and true for the target in two-way binding', function () {
                                var first = new Integer(0), second = new Integer(1);
                                bindTwoWay(second, first);
                                expect(first.hasSource(second)).toBe(true);
                                expect(second.hasSource(first)).toBe(true);
                            });
                        });
                        //#endregion hasSource
                        //#region hasTarget
                        describe('hasTarget', function () {
                            it('should return true for the source and false for the target in one-way binding', function () {
                                var first = new Integer(0), second = new Integer(1);
                                bindOneWay(second, first);
                                expect(first.hasTarget(second)).toBe(true);
                                expect(second.hasTarget(first)).toBe(false);
                            });
                            it('should return true for the source and true for the target in two-way binding', function () {
                                var first = new Integer(0), second = new Integer(1);
                                bindTwoWay(second, first);
                                expect(first.hasTarget(second)).toBe(true);
                                expect(second.hasTarget(first)).toBe(true);
                            });
                        });
                        //#endregion hasTarget
                        //#region bind
                        describe('bind', function () {
                            it('should not allow an object to be bound to itself', function () {
                                var first = new Integer(1);
                                expect(function () {
                                    first.synchronizer.bind({
                                        source: first
                                    });
                                }).toThrow();
                            });
                            it('should provide two-way binding when a converter is not specified', function () {
                                var first = new Integer(1), second = new Integer(2);
                                first.synchronizer.bind({
                                    source: second
                                });
                                first.value = 1;
                                expect(first.value).toBe(1);
                                expect(first.value).toBe(second.value);
                                second.value = 2;
                                expect(second.value).toBe(2);
                                expect(second.value).toBe(first.value);
                            });
                            it('should provide two-way binding when both converter methods are specified', function () {
                                var first = new Integer(1), second = new Integer(2);
                                first.synchronizer.bind({
                                    source: second,
                                    converter: {
                                        convert: function (update) { return update; },
                                        convertBack: function (update) { return update; }
                                    }
                                });
                                first.value = 1;
                                expect(first.value).toBe(1);
                                expect(first.value).toBe(second.value);
                                second.value = 2;
                                expect(second.value).toBe(2);
                                expect(second.value).toBe(first.value);
                            });
                            it('should provide one-way binding when one converter method is specified', function () {
                                var first = new Integer(1), second = new Integer(2);
                                first.synchronizer.bind({
                                    source: second,
                                    converter: {
                                        convert: function (update) { return update; }
                                    }
                                });
                                second.value = 2;
                                expect(second.value).toBe(2);
                                expect(second.value).toBe(first.value);
                                first.value = 1;
                                expect(second.value).toBe(2);
                                expect(first.value).toBe(1);
                            });
                            it('should run the init method on the target', function () {
                                var first = new Integer(1), second = new Integer(2);
                                expect(first.value).toBe(1);
                                first.synchronizer.bind({
                                    source: second,
                                    init: function (target, source) { return target.value = source.value; }
                                });
                                expect(first.value).toBe(second.value);
                            });
                            it('should provide complex binding', function () {
                                var first = new Integer(1), second = new Integer(2), sum = new Integer(0);
                                sum.synchronizer.bind({
                                    sources: [first, second],
                                    converter: {
                                        convert: function (sources) { return new IntegerUpdate(sources.query().sum(function (s) { return s.value; })); }
                                    }
                                });
                                first.value = 3;
                                second.value = 4;
                                expect(sum.value).toBe(first.value + second.value);
                            });
                            it('should run the initialize the complex binding target', function () {
                                var first = new Integer(1), second = new Integer(2), sum = new Integer(0);
                                expect(sum.value).toBe(0);
                                expect(first.value + second.value).toBe(1 + 2);
                                sum.synchronizer.bind({
                                    sources: [first, second],
                                    converter: {
                                        convert: function (sources) { return new IntegerUpdate(sources.query().sum(function (s) { return s.value; })); }
                                    }
                                });
                                expect(sum.value).toBe(first.value + second.value);
                            });
                            it('should provide two-way binding for more than two objects', function () {
                                var first = new Integer(0), second = new Integer(1), third = new Integer(2), fourth = new Integer(3);
                                bindTwoWay(second, first);
                                bindTwoWay(third, first);
                                bindTwoWay(fourth, first);
                                bindTwoWay(third, second);
                                expectEquality(first, 0);
                                first.value = 1;
                                expectEquality(first, 1);
                                second.value = 2;
                                expectEquality(second, 2);
                                third.value = 3;
                                expectEquality(third, 3);
                                fourth.value = 4;
                                expectEquality(fourth, 4);
                                function expectEquality(test, testValue) {
                                    expect(test.value).toBe(testValue);
                                    expect(first.value).toBe(second.value);
                                    expect(first.value).toBe(third.value);
                                    expect(first.value).toBe(fourth.value);
                                }
                            });
                            it('should provide one-way binding for more than two objects', function () {
                                var first = new Integer(0), second = new Integer(1), third = new Integer(2), fourth = new Integer(3);
                                bindOneWay(second, first);
                                bindOneWay(third, first);
                                bindOneWay(fourth, first);
                                expectEquality(first, 0);
                                first.value = 1;
                                expectEquality(first, 1);
                                second.value = 2;
                                expectInequality(second, 2, 1);
                                first.value = 1;
                                third.value = 3;
                                expectInequality(third, 3, 1);
                                first.value = 1;
                                fourth.value = 4;
                                expectInequality(fourth, 4, 1);
                                first.value = 1;
                                first.value = 0;
                                expectEquality(first, 0);
                                //All objects are affected by the change
                                function expectEquality(test, testValue) {
                                    expect(test.value).toBe(testValue);
                                    expect(first.value).toBe(second.value);
                                    expect(first.value).toBe(third.value);
                                    expect(first.value).toBe(fourth.value);
                                }
                                //No object except the modified object are affected by the change
                                function expectInequality(test, testValue, defaultValue) {
                                    expect(test.value).toBe(testValue);
                                    expect(first.value).toBe(defaultValue);
                                    expect(test === second || second.value === defaultValue).toBe(true);
                                    expect(test === third || third.value === defaultValue).toBe(true);
                                    expect(test === fourth || fourth.value === defaultValue).toBe(true);
                                }
                            });
                        });
                        //#endregion bind
                        //#region unbind
                        describe('unbind', function () {
                            it('should prevent the source from updating the target  in one-way binding', function () {
                                var first = new Integer(0), second = new Integer(1), third = new Integer(2);
                                bindOneWay(second, first);
                                bindOneWay(third, first);
                                expectEquality(0);
                                first.value = 1;
                                expectEquality(1);
                                first.value = 0;
                                expectEquality(0);
                                expect(second.unbind(first)).toBe(true);
                                expect(third.unbind(first)).toBe(true);
                                first.value = 1;
                                expectInequality(first, 1, 0);
                                first.value = 0;
                                second.value = 2;
                                expectInequality(second, 2, 0);
                                second.value = 0;
                                third.value = 3;
                                expectInequality(third, 3, 0);
                                third.value = 0;
                                //All objects are affected by the change
                                function expectEquality(testValue) {
                                    expect(first.value).toBe(testValue);
                                    expect(second.value).toBe(testValue);
                                    expect(third.value).toBe(testValue);
                                }
                                //No object except the modified object are affected by the change
                                function expectInequality(test, testValue, defaultValue) {
                                    expect(test.value).toBe(testValue);
                                    expect(test === first || first.value === defaultValue).toBe(true);
                                    expect(test === second || second.value === defaultValue).toBe(true);
                                    expect(test === third || third.value === defaultValue).toBe(true);
                                }
                            });
                            it('should prevent the target from updating the source in two-way binding', function () {
                                var first = new Integer(0), second = new Integer(1), third = new Integer(2);
                                bindTwoWay(second, first);
                                bindTwoWay(third, first);
                                expectEquality(first, 0);
                                second.value = 2;
                                expectEquality(second, 2);
                                third.value = 3;
                                expectEquality(third, 3);
                                first.value = 0;
                                expectEquality(first, 0);
                                first.unbind(second);
                                first.unbind(third);
                                first.value = 1;
                                expectInequality(first, 1, 0);
                                //All objects are affected by the change
                                function expectEquality(test, testValue) {
                                    expect(test.value).toBe(testValue);
                                    expect(first.value).toBe(second.value);
                                    expect(first.value).toBe(third.value);
                                }
                                //No object except the modified object are affected by the change
                                function expectInequality(test, testValue, defaultValue) {
                                    expect(test.value).toBe(testValue);
                                    expect(test === first || first.value === defaultValue).toBe(true);
                                    expect(test === second || second.value === defaultValue).toBe(true);
                                    expect(test === third || third.value === defaultValue).toBe(true);
                                }
                            });
                        });
                        //#endregion unbind
                        //#region detach
                        describe('detach', function () {
                            it('should prevent the source from updating the target in one-way binding', function () {
                                var first = new Integer(0), second = new Integer(1), third = new Integer(2);
                                bindOneWay(second, first);
                                bindOneWay(third, first);
                                expectEquality(0);
                                first.value = 1;
                                expectEquality(1);
                                first.value = 0;
                                expectEquality(0);
                                first.detach();
                                first.value = 1;
                                expectInequality(first, 1, 0);
                                first.value = 0;
                                second.value = 2;
                                expectInequality(second, 2, 0);
                                second.value = 0;
                                third.value = 3;
                                expectInequality(third, 3, 0);
                                third.value = 0;
                                //All objects are affected by the change
                                function expectEquality(testValue) {
                                    expect(first.value).toBe(testValue);
                                    expect(second.value).toBe(testValue);
                                    expect(third.value).toBe(testValue);
                                }
                                //No object except the modified object are affected by the change
                                function expectInequality(test, testValue, defaultValue) {
                                    expect(test.value).toBe(testValue);
                                    expect(test === first || first.value === defaultValue).toBe(true);
                                    expect(test === second || second.value === defaultValue).toBe(true);
                                    expect(test === third || third.value === defaultValue).toBe(true);
                                }
                            });
                            it('should prevent the target from updating the source in two-way binding', function () {
                                var first = new Integer(0), second = new Integer(1), third = new Integer(2);
                                bindTwoWay(second, first);
                                bindTwoWay(third, first);
                                expectEquality(first, 0);
                                second.value = 2;
                                expectEquality(second, 2);
                                third.value = 3;
                                expectEquality(third, 3);
                                first.value = 0;
                                expectEquality(first, 0);
                                first.detach();
                                first.value = 1;
                                expectInequality(first, 1, 0);
                                //All objects are affected by the change
                                function expectEquality(test, testValue) {
                                    expect(test.value).toBe(testValue);
                                    expect(first.value).toBe(second.value);
                                    expect(first.value).toBe(third.value);
                                }
                                //No object except the modified object are affected by the change
                                function expectInequality(test, testValue, defaultValue) {
                                    expect(test.value).toBe(testValue);
                                    expect(test === first || first.value === defaultValue).toBe(true);
                                    expect(test === second || second.value === defaultValue).toBe(true);
                                    expect(test === third || third.value === defaultValue).toBe(true);
                                }
                            });
                        });
                        //#endregion unbind
                        //#region observe
                        describe('observe', function () {
                            it('should be triggered on update for two-way binding', function () {
                                var first = new Integer(0), second = new Integer(0), executed = false;
                                bindTwoWay(second, first);
                                second.track(function (updates) {
                                    expect(updates.length).toBe(1);
                                    expect(updates.query().single().value).toBe(second.value);
                                    executed = true;
                                });
                                expect(executed).toBe(false);
                                first.value = 1;
                                expect(second.value).toBe(first.value);
                                expect(executed).toBe(true);
                                executed = false;
                                expect(executed).toBe(false);
                                second.value = 2;
                                expect(second.value).toBe(first.value);
                                expect(executed).toBe(true);
                                executed = false;
                            });
                            it('should be triggered on update for one-way binding', function () {
                                var first = new Integer(0), second = new Integer(0), executed = false;
                                bindOneWay(second, first);
                                second.track(function (updates) {
                                    expect(updates.length).toBe(1);
                                    expect(updates.query().single().value).toBe(second.value);
                                    executed = true;
                                });
                                expect(executed).toBe(false);
                                first.value = 1;
                                expect(second.value).toBe(first.value);
                                expect(executed).toBe(true);
                                executed = false;
                                var firstValue = first.value;
                                expect(executed).toBe(false);
                                second.value = 2;
                                expect(first.value).toBe(firstValue);
                                expect(executed).toBe(true);
                                executed = false;
                            });
                            it('should not be triggered during bracketed calls to sync', function () {
                                var first = new Integer(0), second = new Integer(0), executed = false;
                                bindOneWay(second, first);
                                second.track(function (updates) {
                                    expect(updates.length).toBe(1);
                                    expect(updates.query().single().value).toBe(second.value);
                                    executed = true;
                                });
                                var secondValue = second.value;
                                expect(executed).toBe(false);
                                first.synchronizer.syncStart();
                                first.value = 1;
                                expect(second.value).toBe(secondValue);
                                expect(executed).toBe(false);
                                first.synchronizer.sync();
                                expect(second.value).toBe(first.value);
                                expect(executed).toBe(true);
                            });
                        });
                        //#endregion observe
                        //#region syncStart
                        describe('syncStart', function () {
                            it('should delay the update until sync is called manually', function () {
                                var first = new Integer(0), second = new Integer(0);
                                bindOneWay(second, first);
                                expect(first.synchronizer.updateDepth).toBe(0);
                                first.synchronizer.syncStart();
                                expect(first.synchronizer.updateDepth).toBe(1);
                                first.synchronizer.syncStart();
                                expect(first.synchronizer.updateDepth).toBe(2);
                                var secondValue = second.value;
                                first.value = 1;
                                expect(second.value).toBe(secondValue);
                                expect(first.synchronizer.updateDepth).toBe(1);
                                first.synchronizer.sync();
                                expect(second.value).toBe(secondValue);
                                expect(first.synchronizer.updateDepth).toBe(0);
                                first.synchronizer.sync();
                                expect(first.synchronizer.updateDepth).toBe(0);
                                expect(second.value).toBe(first.value);
                            });
                        });
                        //#endregion syncStart
                        //#region filter
                        describe('filter', function () {
                            it('should remove all updates that have already been applied to the source', function () {
                                var first = new Integer(0), firstUpdate = new IntegerUpdate(1), secondUpdate = new IntegerUpdate(2), thirdAppliedUpdate = new IntegerUpdate(3), fourthAppliedUpdate = new IntegerUpdate(4), updates = [
                                    firstUpdate,
                                    secondUpdate,
                                    thirdAppliedUpdate,
                                    fourthAppliedUpdate
                                ];
                                thirdAppliedUpdate.addSource(first);
                                fourthAppliedUpdate.addSource(first);
                                var filteredUpdates = first.synchronizer.filter(updates);
                                expect(filteredUpdates.length).toBe(2);
                                expect(filteredUpdates.query().hasAny(function (u) { return u.value == firstUpdate.value; })).toBe(true);
                                expect(filteredUpdates.query().hasAny(function (u) { return u.value == secondUpdate.value; })).toBe(true);
                            });
                        });
                        //#endregion filter
                        //#region add
                        describe('add', function () {
                            it('should insert an update into the synchronizer', function () {
                                var first = new Integer(0), update = new IntegerUpdate(1);
                                expect(first.synchronizer.updates.length).toBe(0);
                                first.synchronizer.add(update);
                                expect(first.synchronizer.updates.length).toBe(1);
                            });
                        });
                        //#endregion filter
                        //#region Utilities
                        function bindOneWay(target, source) {
                            target.synchronizer.bind({
                                source: source,
                                converter: {
                                    convert: function (update) { return update; },
                                },
                                init: function (target, source) {
                                    target.as().value =
                                        source.as().value;
                                }
                            });
                        }
                        function bindTwoWay(target, source) {
                            target.synchronizer.bind({
                                source: source,
                                converter: {
                                    convert: function (update) { return update; },
                                    convertBack: function (update) { return update; }
                                },
                                init: function (target, source) {
                                    target.as().value =
                                        source.as().value;
                                }
                            });
                        }
                        //#endregion Utilities
                    });
                    //#endregion Synchronizer
                    //#region Property
                    describe('Property', function () {
                        //#region value
                        describe('value', function () {
                            it('should get the value of the property', function () {
                                var property = new Binding.Property(1);
                                expect(property.value).toBe(1);
                            });
                            it('should set the value of the property', function () {
                                var property = new Binding.Property(1);
                                property.value = 2;
                                expect(property.value).toBe(2);
                            });
                            it('should update a bound property when set', function () {
                                var property = new Binding.Property(1), target = new Binding.Property(0);
                                target.bind(property);
                                property.value = 2;
                                expect(property.value).toBe(2);
                                expect(target.value).toBe(2);
                            });
                        });
                        //#endregion value
                        //#region bind
                        describe('bind', function () {
                            it('should provide two-way binding when another property is passed as the argument', function () {
                                var source = new Binding.Property(0), target = new Binding.Property(-1);
                                target.bind(source);
                                expect(target.value).toBe(0);
                                source.value = 1;
                                expect(target.value).toBe(1);
                                target.value = 2;
                                expect(source.value).toBe(2);
                            });
                            it('should provide complex one-way binding when multiple sources and a selector are passed as the arguments', function () {
                                var source1 = new Binding.Property(1), source2 = new Binding.Property(1), source3 = new Binding.Property(1), source4 = new Binding.Property(1), target = new Binding.Property(-1);
                                target.bind([source1, source2, source3, source4], function (sources) { return sources.query().sum(function (s) { return s.value; }); });
                                expect(target.value).toBe(4);
                                source1.value = 0;
                                expect(target.value).toBe(3);
                                source2.value = 0;
                                expect(target.value).toBe(2);
                                source3.value = 0;
                                expect(target.value).toBe(1);
                                source4.value = 0;
                                expect(target.value).toBe(0);
                            });
                            it('should provide two-way binding when a PropertyBinder is passed as the argument', function () {
                                var source = new Binding.Property(0), target = new Binding.Property(-1);
                                target.bind({
                                    property: source,
                                    converter: {
                                        convert: function (x) { return x; },
                                        convertBack: function (x) { return x; }
                                    }
                                });
                                expect(target.value).toBe(0);
                                source.value = 1;
                                expect(target.value).toBe(1);
                                target.value = 2;
                                expect(source.value).toBe(2);
                            });
                            it('should provide two-way binding when both converter methods are specified', function () {
                                var first = new Binding.Property(1), second = new Binding.Property(2);
                                first.bind({
                                    source: second,
                                    converter: {
                                        convert: function (update) { return update; },
                                        convertBack: function (update) { return update; }
                                    }
                                });
                                first.value = 1;
                                expect(first.value).toBe(1);
                                expect(first.value).toBe(second.value);
                                second.value = 2;
                                expect(second.value).toBe(2);
                                expect(second.value).toBe(first.value);
                            });
                            it('should provide one-way binding when one converter method is specified', function () {
                                var first = new Binding.Property(1), second = new Binding.Property(2);
                                first.bind({
                                    source: second,
                                    converter: {
                                        convert: function (update) { return update; }
                                    }
                                });
                                second.value = 2;
                                expect(second.value).toBe(2);
                                expect(second.value).toBe(first.value);
                                first.value = 1;
                                expect(second.value).toBe(2);
                                expect(first.value).toBe(1);
                            });
                            it('should run the init method on the target', function () {
                                var first = new Binding.Property(1), second = new Binding.Property(2);
                                expect(first.value).toBe(1);
                                first.bind({
                                    source: second,
                                    init: function (target, source) { return target.value = source.value; }
                                });
                                expect(first.value).toBe(second.value);
                            });
                            it('should provide complex binding', function () {
                                var first = new Binding.Property(1), second = new Binding.Property(2), sum = new Binding.Property(0);
                                sum.bind({
                                    sources: [first, second],
                                    converter: {
                                        convert: function (sources) { return new IntegerUpdate(sources.query().sum(function (s) { return s.value; })); }
                                    }
                                });
                                first.value = 3;
                                second.value = 4;
                                expect(sum.value).toBe(first.value + second.value);
                            });
                        });
                        //#endregion bind
                    });
                    //#endregion Property
                    //#region ConfirmationProperty
                    describe('ConfirmationProperty', function () {
                        describe('newValue', function () {
                            it('should contain the value of the pending change.', function () {
                                var first = new Binding.ConfirmationProperty(1);
                                var second = new Binding.ConfirmationProperty(2);
                                first.bind(second);
                                expect(first.value).toBe(1);
                                expect(first.newValue).toBe(2);
                                first.accept();
                                expect(first.value).toBe(2);
                                expect(first.newValue).toBe(2);
                                second.value = 0;
                                second.accept();
                                expect(first.value).toBe(2);
                                expect(first.newValue).toBe(0);
                                first.reject();
                                expect(first.value).toBe(2);
                                expect(first.newValue).toBe(2);
                                second.value = 0;
                                second.accept();
                                expect(first.value).toBe(2);
                                expect(first.newValue).toBe(0);
                                first.accept();
                                expect(first.value).toBe(0);
                                expect(first.newValue).toBe(0);
                            });
                        });
                        describe('accept', function () {
                            it('should only update the value when accept is called.', function () {
                                var first = new Binding.ConfirmationProperty(1);
                                var second = new Binding.ConfirmationProperty(2);
                                first.bind(second);
                                expect(first.value).toBe(1);
                                first.accept();
                                expect(first.value).toBe(2);
                                second.value = 0;
                                second.accept();
                                expect(first.value).toBe(2);
                                first.accept();
                                expect(first.value).toBe(0);
                            });
                        });
                        describe('reject', function () {
                            it('should keep the original value when reject is called.', function () {
                                var first = new Binding.ConfirmationProperty(1);
                                var second = new Binding.ConfirmationProperty(2);
                                first.bind(second);
                                expect(first.value).toBe(1);
                                first.reject();
                                expect(first.value).toBe(1);
                                second.value = 0;
                                second.accept();
                                expect(first.value).toBe(1);
                                first.reject();
                                expect(first.value).toBe(1);
                            });
                        });
                    });
                    //#endregion ConfirmationProperty
                });
            });
            //#endregion Binding
            //#region Test Classes
            //#region IntegerUpdate
            var IntegerUpdate = (function (_super) {
                __extends(IntegerUpdate, _super);
                //#endregion properties
                //#region Constructor
                function IntegerUpdate(value, sources) {
                    if (value === void 0) { value = 0; }
                    if (sources === void 0) { sources = []; }
                    _super.call(this, sources);
                    //#region fields
                    this._value = 0;
                    this.value = value;
                }
                Object.defineProperty(IntegerUpdate.prototype, "value", {
                    //#endregion fields
                    //#region properties
                    get: function () {
                        var value = this._value;
                        Assert.isTrue(u.isInteger(value));
                        return value;
                    },
                    set: function (value) {
                        Assert.isTrue(u.isInteger(value));
                        this._value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return IntegerUpdate;
            })(Binding.Update);
            //#endregion IntegerUpdate
            //#region Integer
            var Integer = (function () {
                //#endregion properties
                //#region Constructor
                function Integer(value) {
                    if (value === void 0) { value = 0; }
                    this._synchronizer = new Binding.Synchronizer(this);
                    this.value = value;
                }
                Object.defineProperty(Integer.prototype, "value", {
                    //#endregion fields
                    //#region properties
                    get: function () {
                        return this._value;
                    },
                    set: function (value) {
                        Assert.isTrue(u.isInteger(value));
                        this._value = value;
                        this._synchronizer.add(new IntegerUpdate(value));
                        this._synchronizer.sync();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Integer.prototype, "synchronizer", {
                    get: function () {
                        return this._synchronizer;
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion Constructor
                //#region ISynchronizable
                //#region hasTarget
                Integer.prototype.hasTarget = function (target) {
                    return this._synchronizer.hasTarget(target);
                };
                //#endregion hasTarget
                //#region hasSource
                Integer.prototype.hasSource = function (source) {
                    return this._synchronizer.hasSource(source);
                };
                //For overload resolution only.
                Integer.prototype.bind = function (binder) {
                    this._synchronizer.bind(binder);
                };
                //#endregion bind
                //#region unbind
                Integer.prototype.unbind = function (partner) {
                    return this._synchronizer.unbind(partner);
                };
                //#endregion unbind
                //#region observe
                Integer.prototype.track = function (registration) {
                    this._synchronizer.track(registration);
                };
                //#endregion observe
                //#region apply
                Integer.prototype.apply = function (updates) {
                    var synchronizer = this._synchronizer;
                    var update = synchronizer
                        .filter(updates).query()
                        .lastOrDefault();
                    if (!u.isDefined(update) ||
                        u.areEqual(this.value, update.value))
                        return;
                    this.value = update.value;
                    synchronizer.add(update);
                    synchronizer.sync(true);
                };
                //#endregion apply
                //#region detach
                Integer.prototype.detach = function () {
                    this._synchronizer.detach();
                };
                return Integer;
            })();
        })(Spec = Binding.Spec || (Binding.Spec = {}));
    })(Binding = Classical.Binding || (Classical.Binding = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Binding.spec.js.map