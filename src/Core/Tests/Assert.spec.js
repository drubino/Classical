var Classical;
(function (Classical) {
    var Assert;
    (function (Assert) {
        var Spec;
        (function (Spec) {
            describe('Assert', function () {
                //#region staticClass
                describe('staticClass', function () {
                    it('should throw an exception.', function () {
                        expect(function () { return Assert.staticClass(); }).toThrow();
                    });
                });
                //#endregion staticClass
                //#region isDefined
                describe('isDefined', function () {
                    it('should throw an exception only when the value is null or undefined.', function () {
                        expect(function () { return Assert.isDefined(undefined); }).toThrow();
                        expect(function () { return Assert.isDefined(null); }).toThrow();
                        Assert.isDefined({});
                        Assert.isDefined([]);
                        Assert.isDefined(0);
                        Assert.isDefined('');
                    });
                });
                //#endregion isDefined
                //#region nullOrUndefined
                describe('nullOrUndefined', function () {
                    it('should throw an exception only when the value is not null or undefined.', function () {
                        expect(function () { return Assert.nullOrUndefined({}); }).toThrow();
                        expect(function () { return Assert.nullOrUndefined([]); }).toThrow();
                        expect(function () { return Assert.nullOrUndefined(0); }).toThrow();
                        expect(function () { return Assert.nullOrUndefined(''); }).toThrow();
                        Assert.nullOrUndefined(null);
                        Assert.nullOrUndefined(undefined);
                    });
                });
                //#endregion nullOrUndefined
                //#region isTrue
                describe('isTrue', function () {
                    it('should throw an exception only when the expression is false.', function () {
                        expect(function () { return Assert.isTrue(false); }).toThrow();
                        Assert.isTrue(true);
                    });
                });
                //#endregion isTrue
                //#region isFalse
                describe('isFalse', function () {
                    it('should throw an exception only when the expression is true.', function () {
                        expect(function () { return Assert.isFalse(true); }).toThrow();
                        Assert.isFalse(false);
                    });
                });
                //#endregion isFalse
            });
        })(Spec = Assert.Spec || (Assert.Spec = {}));
    })(Assert = Classical.Assert || (Classical.Assert = {}));
})(Classical || (Classical = {}));
//# sourceMappingURL=Assert.spec.js.map