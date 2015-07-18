var Classical;
(function (Classical) {
    var Binding;
    (function (Binding) {
        var Collections;
        (function (Collections) {
            var Spec;
            (function (Spec) {
                //#endregion Imports
                //#region Binding
                describe('Classical', function () {
                    describe('Binding', function () {
                        describe('Collections', function () {
                            //#region Collection
                            describe('Collection', function () {
                                //#region add
                                describe('add', function () {
                                    it('should add an item to two bound collections simultaneously', function () {
                                        var first = new Collections.Collection([0, 1]), second = new Collections.Collection([3, 4, 5]);
                                        first.bind(second);
                                        collectionEquals(first, second);
                                        collectionEquals(first, [3, 4, 5]);
                                        first.add(6);
                                        collectionEquals(first, second);
                                        expect(first.get(3)).toBe(6);
                                        second.add(7);
                                        collectionEquals(first, second);
                                        expect(second.get(4)).toBe(7);
                                    });
                                });
                                //#endregion addRange
                                //#region addRange
                                describe('addRange', function () {
                                    it('should add multiple items to two bound collections simultaneously', function () {
                                        var first = new Collections.Collection([0, 1]), second = new Collections.Collection([3, 4, 5]);
                                        first.bind(second);
                                        collectionEquals(first, second);
                                        collectionEquals(first, [3, 4, 5]);
                                        first.addRange([6, 7]);
                                        collectionEquals(first, second);
                                        expect(first.get(3)).toBe(6);
                                        expect(first.get(4)).toBe(7);
                                    });
                                });
                                //#endregion addRange
                                //#region remove
                                describe('remove', function () {
                                    it('should remove an item from two bound collections simultaneously', function () {
                                        var first = new Collections.Collection([0, 1]), second = new Collections.Collection([5, 3, 4, 5]);
                                        first.bind(second);
                                        collectionEquals(first, second);
                                        collectionEquals(first, [5, 3, 4, 5]);
                                        first.remove(5);
                                        collectionEquals(first, second);
                                        expect(first.count()).toBe(2);
                                        expect(first.get(0)).toBe(3);
                                        expect(first.get(1)).toBe(4);
                                    });
                                });
                                //#endregion remove
                                //#region removeAt
                                describe('removeAt', function () {
                                    it('should remove an item from two bound collections at the specified index', function () {
                                        var first = new Collections.Collection([0, 1]), second = new Collections.Collection([3, 4, 5]);
                                        first.bind(second);
                                        collectionEquals(first, second);
                                        collectionEquals(first, [3, 4, 5]);
                                        first.removeAt(0);
                                        collectionEquals(first, second);
                                        expect(first.count()).toBe(2);
                                        expect(first.get(0)).toBe(4);
                                        expect(first.get(1)).toBe(5);
                                    });
                                });
                                //#endregion removeAt
                                //#region clear
                                describe('clear', function () {
                                    it('should remove all items from two bound collections at the specified index', function () {
                                        var first = new Collections.Collection([0, 1]), second = new Collections.Collection([3, 4, 5]);
                                        first.bind(second);
                                        collectionEquals(first, second);
                                        collectionEquals(first, [3, 4, 5]);
                                        first.clear();
                                        expect(first.query().hasNone());
                                        expect(second.query().hasNone());
                                    });
                                });
                                //#endregion clear
                                //#region Utilities
                                function collectionEquals(first, second) {
                                    if ((!first || !second) && (!first && !second))
                                        return false;
                                    expect(first.query().array()).toEqual(second.query().array());
                                }
                                //#endregion Utilities
                            });
                            //#endregion Collection
                        });
                    });
                });
            })(Spec = Collections.Spec || (Collections.Spec = {}));
        })(Collections = Binding.Collections || (Binding.Collections = {}));
    })(Binding = Classical.Binding || (Classical.Binding = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Binding.Collections.spec.js.map