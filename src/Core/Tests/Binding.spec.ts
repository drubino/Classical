
module Classical.Binding.Spec {

    //#region Imports

    import u = Classical.Utilities;
    import e = Classical.Events;
    import Assert = Classical.Assert;

    //#endregion Imports

    //#region Binding

    describe('Classical', () => {
        describe('Binding', () => {

            //#region Update

            describe('Update', () => {

                //#region addSource

                describe('addSource', () => {
                    it('to have the sources that have been added', () => {
                        var update = new IntegerUpdate(),
                            first = {},
                            second = [],
                            third = new Integer();

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

                describe('transferTo', () => {
                    it('should transfer the sources to the target update', () => {
                        var sourceUpdate = new IntegerUpdate(),
                            targetUpdate = new IntegerUpdate(),
                            first = {},
                            second = [],
                            third = new Integer();

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
                    it('should add sources to an update that already has sources', () => {
                        var sourceUpdate = new IntegerUpdate(),
                            targetUpdate = new IntegerUpdate(),
                            first = {},
                            second = [],
                            third = new Integer();

                        targetUpdate.addSource(first);
                        sourceUpdate.addSource(second);
                        sourceUpdate.addSource(third);

                        sourceUpdate.transferSourcesTo(targetUpdate)
                        expect(targetUpdate.hasSource(first)).toBe(true);
                        expect(targetUpdate.hasSource(second)).toBe(true);
                        expect(targetUpdate.hasSource(third)).toBe(true);
                    });
                });

                //#endregion transferTo
            });

            //#endregion Update

            //#region Synchronizer

            describe('Synchronizer', () => {

                //#region hasSource

                describe('hasSource', () => {
                    it('should return false for the source and true for the target in one-way binding', () => {
                        var first = new Integer(0),
                            second = new Integer(1);

                        bindOneWay(second, first);
                        expect(first.hasSource(second)).toBe(false);
                        expect(second.hasSource(first)).toBe(true);
                    });
                    it('should return true for the source and true for the target in two-way binding', () => {
                        var first = new Integer(0),
                            second = new Integer(1);

                        bindTwoWay(second, first);
                        expect(first.hasSource(second)).toBe(true);
                        expect(second.hasSource(first)).toBe(true);
                    });
                });

                //#endregion hasSource

                //#region hasTarget

                describe('hasTarget', () => {
                    it('should return true for the source and false for the target in one-way binding', () => {
                        var first = new Integer(0),
                            second = new Integer(1);

                        bindOneWay(second, first);
                        expect(first.hasTarget(second)).toBe(true);
                        expect(second.hasTarget(first)).toBe(false);
                    });
                    it('should return true for the source and true for the target in two-way binding', () => {
                        var first = new Integer(0),
                            second = new Integer(1);

                        bindTwoWay(second, first);
                        expect(first.hasTarget(second)).toBe(true);
                        expect(second.hasTarget(first)).toBe(true);
                    });
                });

                //#endregion hasTarget

                //#region bind

                describe('bind', () => {
                    it('should not allow an object to be bound to itself', () => {
                        var first = new Integer(1);
                        expect(() => {
                            first.synchronizer.bind({
                                source: first
                            });
                        }).toThrow();
                    });
                    it('should provide two-way binding when a converter is not specified', () => {
                        var first = new Integer(1),
                            second = new Integer(2);

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
                    it('should provide two-way binding when both converter methods are specified', () => {
                        var first = new Integer(1),
                            second = new Integer(2);

                        first.synchronizer.bind({
                            source: second,
                            converter: {
                                convert: update => update,
                                convertBack: update => update
                            }
                        });

                        first.value = 1;
                        expect(first.value).toBe(1);
                        expect(first.value).toBe(second.value);

                        second.value = 2;
                        expect(second.value).toBe(2);
                        expect(second.value).toBe(first.value);
                    });
                    it('should provide one-way binding when one converter method is specified', () => {
                        var first = new Integer(1),
                            second = new Integer(2);

                        first.synchronizer.bind({
                            source: second,
                            converter: {
                                convert: update => update
                            }
                        });

                        second.value = 2;
                        expect(second.value).toBe(2);
                        expect(second.value).toBe(first.value);

                        first.value = 1;
                        expect(second.value).toBe(2);
                        expect(first.value).toBe(1);
                    });
                    it('should run the init method on the target', () => {
                        var first = new Integer(1),
                            second = new Integer(2);

                        expect(first.value).toBe(1);

                        first.synchronizer.bind({
                            source: second,
                            init: (target, source) => (<any>target).value = (<any>source).value
                        });

                        expect(first.value).toBe(second.value);
                    });
                    it('should provide complex binding', () => {
                        var first = new Integer(1),
                            second = new Integer(2),
                            sum = new Integer(0);

                        sum.synchronizer.bind({
                            sources: [first, second],
                            converter: {
                                convert: sources => new IntegerUpdate(
                                    sources.query().sum(s => s.value))
                            }
                        });

                        first.value = 3;
                        second.value = 4;
                        expect(sum.value).toBe(first.value + second.value);
                    });
                    it('should run the initialize the complex binding target', () => {
                        var first = new Integer(1),
                            second = new Integer(2),
                            sum = new Integer(0);

                        expect(sum.value).toBe(0);
                        expect(first.value + second.value).toBe(1 + 2);

                        sum.synchronizer.bind({
                            sources: [first, second],
                            converter: {
                                convert: sources => new IntegerUpdate(
                                    sources.query().sum(s => s.value))
                            }
                        });

                        expect(sum.value).toBe(first.value + second.value);
                    });
                    it('should provide two-way binding for more than two objects', () => {
                        var first = new Integer(0),
                            second = new Integer(1),
                            third = new Integer(2),
                            fourth = new Integer(3);  

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

                        function expectEquality(test: Integer, testValue: number) {
                            expect(test.value).toBe(testValue);
                            expect(first.value).toBe(second.value);
                            expect(first.value).toBe(third.value);
                            expect(first.value).toBe(fourth.value);
                        }
                    });
                    it('should provide one-way binding for more than two objects', () => {
                        var first = new Integer(0),
                            second = new Integer(1),
                            third = new Integer(2),
                            fourth = new Integer(3);

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
                        function expectEquality(test: Integer, testValue: number) {
                            expect(test.value).toBe(testValue);
                            expect(first.value).toBe(second.value);
                            expect(first.value).toBe(third.value);
                            expect(first.value).toBe(fourth.value);
                        }

                        //No object except the modified object are affected by the change
                        function expectInequality(test: Integer, testValue: number, defaultValue: number) {
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

                describe('unbind', () => {
                    it('should prevent the source from updating the target  in one-way binding', () => {
                        var first = new Integer(0),
                            second = new Integer(1),
                            third = new Integer(2);

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
                        function expectEquality(testValue: number) {
                            expect(first.value).toBe(testValue);
                            expect(second.value).toBe(testValue);
                            expect(third.value).toBe(testValue);
                        }

                        //No object except the modified object are affected by the change
                        function expectInequality(test: Integer, testValue: number, defaultValue: number) {
                            expect(test.value).toBe(testValue);
                            expect(test === first || first.value === defaultValue).toBe(true);
                            expect(test === second || second.value === defaultValue).toBe(true);
                            expect(test === third || third.value === defaultValue).toBe(true);
                        }
                    });
                    it('should prevent the target from updating the source in two-way binding', () => {
                        var first = new Integer(0),
                            second = new Integer(1),
                            third = new Integer(2);

                        bindTwoWay(second, first);
                        bindTwoWay(third, first);

                        expectEquality(first, 0);

                        second.value = 2;
                        expectEquality(second, 2);

                        third.value = 3;
                        expectEquality(third, 3);

                        first.value = 0;
                        expectEquality(first, 0);

                        first.unbind(second)
                        first.unbind(third);

                        first.value = 1;
                        expectInequality(first, 1, 0);

                        //All objects are affected by the change
                        function expectEquality(test: Integer, testValue: number) {
                            expect(test.value).toBe(testValue);
                            expect(first.value).toBe(second.value);
                            expect(first.value).toBe(third.value);
                        }

                        //No object except the modified object are affected by the change
                        function expectInequality(test: Integer, testValue: number, defaultValue: number) {
                            expect(test.value).toBe(testValue);
                            expect(test === first || first.value === defaultValue).toBe(true);
                            expect(test === second || second.value === defaultValue).toBe(true);
                            expect(test === third || third.value === defaultValue).toBe(true);
                        }
                    });
                });

                //#endregion unbind

                //#region detach

                describe('detach', () => {
                    it('should prevent the source from updating the target in one-way binding', () => {
                        var first = new Integer(0),
                            second = new Integer(1),
                            third = new Integer(2);

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
                        function expectEquality(testValue: number) {
                            expect(first.value).toBe(testValue);
                            expect(second.value).toBe(testValue);
                            expect(third.value).toBe(testValue);
                        }

                        //No object except the modified object are affected by the change
                        function expectInequality(test: Integer, testValue: number, defaultValue: number) {
                            expect(test.value).toBe(testValue);
                            expect(test === first || first.value === defaultValue).toBe(true);
                            expect(test === second || second.value === defaultValue).toBe(true);
                            expect(test === third || third.value === defaultValue).toBe(true);
                        }
                    });
                    it('should prevent the target from updating the source in two-way binding', () => {
                        var first = new Integer(0),
                            second = new Integer(1),
                            third = new Integer(2);

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
                        function expectEquality(test: Integer, testValue: number) {
                            expect(test.value).toBe(testValue);
                            expect(first.value).toBe(second.value);
                            expect(first.value).toBe(third.value);
                        }

                        //No object except the modified object are affected by the change
                        function expectInequality(test: Integer, testValue: number, defaultValue: number) {
                            expect(test.value).toBe(testValue);
                            expect(test === first || first.value === defaultValue).toBe(true);
                            expect(test === second || second.value === defaultValue).toBe(true);
                            expect(test === third || third.value === defaultValue).toBe(true);
                        }
                    });
                });

                //#endregion unbind

                //#region observe

                describe('observe', () => {
                    it('should be triggered on update for two-way binding', () => {
                        var first = new Integer(0),
                            second = new Integer(0),
                            executed = false;

                        bindTwoWay(second, first);
                        second.track(updates => {
                            expect(updates.length).toBe(1);
                            expect(updates.query().single().value).toBe(second.value);
                            executed = true
                        });

                        expect(executed).toBe(false);
                        first.value = 1;
                        expect(second.value).toBe(first.value);
                        expect(executed).toBe(true)
                        executed = false;

                        expect(executed).toBe(false);
                        second.value = 2;
                        expect(second.value).toBe(first.value);
                        expect(executed).toBe(true)
                        executed = false;
                    });
                    it('should be triggered on update for one-way binding', () => {
                        var first = new Integer(0),
                            second = new Integer(0),
                            executed = false;

                        bindOneWay(second, first);
                        second.track(updates => {
                            expect(updates.length).toBe(1);
                            expect(updates.query().single().value).toBe(second.value);
                            executed = true
                        });

                        expect(executed).toBe(false);
                        first.value = 1;
                        expect(second.value).toBe(first.value);
                        expect(executed).toBe(true)
                        executed = false;

                        var firstValue = first.value;
                        expect(executed).toBe(false);
                        second.value = 2;
                        expect(first.value).toBe(firstValue);
                        expect(executed).toBe(true)
                        executed = false;
                    });
                    it('should not be triggered during bracketed calls to sync', () => {
                        var first = new Integer(0),
                            second = new Integer(0),
                            executed = false;

                        bindOneWay(second, first);
                        second.track(updates => {
                            expect(updates.length).toBe(1);
                            expect(updates.query().single().value).toBe(second.value);
                            executed = true
                        });

                        var secondValue = second.value;
                        expect(executed).toBe(false);
                        first.synchronizer.syncStart();
                        first.value = 1;
                        expect(second.value).toBe(secondValue);
                        expect(executed).toBe(false)

                        first.synchronizer.sync();

                        expect(second.value).toBe(first.value);
                        expect(executed).toBe(true);
                    });
                });

                //#endregion observe

                //#region syncStart

                describe('syncStart', () => {
                    it('should delay the update until sync is called manually', () => {
                        var first = new Integer(0),
                            second = new Integer(0);

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

                describe('filter', () => {
                    it('should remove all updates that have already been applied to the source', () => {
                        var first = new Integer(0),
                            firstUpdate = new IntegerUpdate(1),
                            secondUpdate = new IntegerUpdate(2),
                            thirdAppliedUpdate = new IntegerUpdate(3),
                            fourthAppliedUpdate = new IntegerUpdate(4),
                            updates = [
                                firstUpdate,
                                secondUpdate,
                                thirdAppliedUpdate,
                                fourthAppliedUpdate
                            ];

                        thirdAppliedUpdate.addSource(first);
                        fourthAppliedUpdate.addSource(first);
                        var filteredUpdates = first.synchronizer.filter(updates);

                        expect(filteredUpdates.length).toBe(2);
                        expect(filteredUpdates.query().hasAny(u => u.value == firstUpdate.value)).toBe(true);
                        expect(filteredUpdates.query().hasAny(u => u.value == secondUpdate.value)).toBe(true);
                    });
                });

                //#endregion filter

                //#region add

                describe('add', () => {
                    it('should insert an update into the synchronizer', () => {
                        var first = new Integer(0),
                            update = new IntegerUpdate(1);

                        expect(first.synchronizer.updates.length).toBe(0);
                        first.synchronizer.add(update);
                        expect(first.synchronizer.updates.length).toBe(1);

                    });
                });

                //#endregion filter

                //#region Utilities

                function bindOneWay(target: Integer, source: Integer) {
                    target.synchronizer.bind({
                        source: source,
                        converter: {
                            convert: update => update,
                        },
                        init: (target, source) => {
                            target.as<Integer>().value =
                            source.as<Integer>().value;
                        }
                    });
                }

                function bindTwoWay(target: Integer, source: Integer) {
                    target.synchronizer.bind({
                        source: source,
                        converter: {
                            convert: update => update,
                            convertBack: update => update
                        },
                        init: (target, source) => {
                            target.as<Integer>().value =
                            source.as<Integer>().value;
                        }
                    });
                }

                //#endregion Utilities
            });

            //#endregion Synchronizer

            //#region Property

            describe('Property', () => {

                //#region value

                describe('value', () => {
                    it('should get the value of the property', () => {
                        var property = new Property(1);
                        expect(property.value).toBe(1);
                    });
                    it('should set the value of the property', () => {
                        var property = new Property(1);
                        property.value = 2;
                        expect(property.value).toBe(2);
                    });
                    it('should update a bound property when set', () => {
                        var property = new Property(1),
                            target = new Property(0);

                        target.bind(property);

                        property.value = 2;
                        expect(property.value).toBe(2);
                        expect(target.value).toBe(2);
                    });
                });

                //#endregion value

                //#region bind

                describe('bind', () => {
                    it('should provide two-way binding when another property is passed as the argument', () => {
                        var source = new Property(0),
                            target = new Property(-1);

                        target.bind(source);
                        expect(target.value).toBe(0);

                        source.value = 1;
                        expect(target.value).toBe(1);

                        target.value = 2;
                        expect(source.value).toBe(2);
                    });
                    it('should provide complex one-way binding when multiple sources and a selector are passed as the arguments', () => {
                        var source1 = new Property(1),
                            source2 = new Property(1),
                            source3 = new Property(1),
                            source4 = new Property(1),
                            target = new Property(-1);

                        target.bind([source1, source2, source3, source4],
                            sources => sources.query().sum(s => s.value));

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
                    it('should provide two-way binding when a PropertyBinder is passed as the argument', () => {
                        var source = new Property(0),
                            target = new Property(-1);

                        target.bind({
                            property: source,
                            converter: {
                                convert: x => x,
                                convertBack: x => x
                            }
                        });
                        expect(target.value).toBe(0);

                        source.value = 1;
                        expect(target.value).toBe(1);

                        target.value = 2;
                        expect(source.value).toBe(2);
                    });
                    it('should provide two-way binding when both converter methods are specified', () => {
                        var first = new Property(1),
                            second = new Property(2);

                        first.bind({
                            source: second,
                            converter: {
                                convert: update => update,
                                convertBack: update => update
                            }
                        });

                        first.value = 1;
                        expect(first.value).toBe(1);
                        expect(first.value).toBe(second.value);

                        second.value = 2;
                        expect(second.value).toBe(2);
                        expect(second.value).toBe(first.value);
                    });
                    it('should provide one-way binding when one converter method is specified', () => {
                        var first = new Property(1),
                            second = new Property(2);

                        first.bind({
                            source: second,
                            converter: {
                                convert: update => update
                            }
                        });

                        second.value = 2;
                        expect(second.value).toBe(2);
                        expect(second.value).toBe(first.value);

                        first.value = 1;
                        expect(second.value).toBe(2);
                        expect(first.value).toBe(1);
                    });
                    it('should run the init method on the target', () => {
                        var first = new Property(1),
                            second = new Property(2);

                        expect(first.value).toBe(1);

                        first.bind({
                            source: second,
                            init: (target, source) => (<any>target).value = (<any>source).value
                        });

                        expect(first.value).toBe(second.value);
                    });
                    it('should provide complex binding', () => {
                        var first = new Property(1),
                            second = new Property(2),
                            sum = new Property(0);

                        sum.bind({
                            sources: [first, second],
                            converter: {
                                convert: sources => new IntegerUpdate(
                                    sources.query().sum(s => s.value))
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

            describe('ConfirmationProperty', () => {

                describe('newValue', () => {
                    it('should contain the value of the pending change.', () => {
                        var first = new ConfirmationProperty(1);
                        var second = new ConfirmationProperty(2);
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

                describe('accept', () => {
                    it('should only update the value when accept is called.', () => {
                        var first = new ConfirmationProperty(1);
                        var second = new ConfirmationProperty(2);
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

                describe('reject', () => {
                    it('should keep the original value when reject is called.', () => {
                        var first = new ConfirmationProperty(1);
                        var second = new ConfirmationProperty(2);
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

    class IntegerUpdate extends Update {

        //#region fields

        private _value: number = 0;

        //#endregion fields

        //#region properties

        get value() {
            var value = this._value;
            Assert.isTrue(u.isInteger(value));
            return value;
        }

        set value(value: number) {
            Assert.isTrue(u.isInteger(value));
            this._value = value;
        }

        //#endregion properties

        //#region Constructor

        constructor(value: number = 0, sources: IEnumerable<any> = []) {
            super(sources);
            this.value = value;
        }

        //#endregion Constructor
    }

    //#endregion IntegerUpdate

    //#region Integer

    class Integer implements ISynchronizable<IntegerUpdate> {

        //#region fields

        private _value: number;
        private _synchronizer = new Synchronizer<IntegerUpdate>(this);

        //#endregion fields

        //#region properties

        get value() {
            return this._value;
        }

        set value(value: number) {
            Assert.isTrue(u.isInteger(value));
            this._value = value;
            this._synchronizer.add(new IntegerUpdate(value));
            this._synchronizer.sync();
        }

        get synchronizer() {
            return this._synchronizer;
        }

        //#endregion properties

        //#region Constructor

        public constructor(value: number = 0) {
            this.value = value;
        }

        //#endregion Constructor

        //#region ISynchronizable

        //#region hasTarget

        hasTarget(target: ISynchronizable<IntegerUpdate>): boolean {
            return this._synchronizer.hasTarget(target);
        }

        //#endregion hasTarget

        //#region hasSource

        hasSource(source: ISynchronizable<any>): boolean {
            return this._synchronizer.hasSource(source);
        }

        //#endregion hasSource

        //#region bind

        bind(binder: IBinder<IntegerUpdate>);
        bind(binder: IComplexBinder<IntegerUpdate>): void;

        //For overload resolution only.
        bind(binder: any) {
            this._synchronizer.bind(binder);
        }

        //#endregion bind

        //#region unbind

        unbind(partner: ISynchronizable<any>): boolean {
            return this._synchronizer.unbind(partner);
        }

        //#endregion unbind

        //#region observe

        track(registration: (update: Array<IntegerUpdate>, source: Integer) => void) {
            this._synchronizer.track(registration);
        }

        //#endregion observe

        //#region apply

        apply(updates: IEnumerable<IntegerUpdate>) {
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
        }

        //#endregion apply

        //#region detach

        detach() {
            this._synchronizer.detach();
        }

        //#endregion detach

        //#endregion ISynchronizable
    }

    //#endregion Integer

    //#endregion Test Classes
}