
module Classical.Assert.Spec {

    describe('Assert', () => {

        //#region staticClass

        describe('staticClass', () => {
            it('should throw an exception.', () => {
                expect(() => Assert.staticClass()).toThrow();
            });
        });

        //#endregion staticClass

        //#region isDefined

        describe('isDefined', () => {
            it('should throw an exception only when the value is null or undefined.', () => {
                expect(() => Assert.isDefined(undefined)).toThrow();
                expect(() => Assert.isDefined(null)).toThrow();
                Assert.isDefined({});
                Assert.isDefined([]);
                Assert.isDefined(0);
                Assert.isDefined('');
            });
        });

        //#endregion isDefined

        //#region nullOrUndefined

        describe('nullOrUndefined', () => {
            it('should throw an exception only when the value is not null or undefined.', () => {
                expect(() => Assert.nullOrUndefined({})).toThrow();
                expect(() => Assert.nullOrUndefined([])).toThrow();
                expect(() => Assert.nullOrUndefined(0)).toThrow();
                expect(() => Assert.nullOrUndefined('')).toThrow();
                Assert.nullOrUndefined(null);
                Assert.nullOrUndefined(undefined);
            } );
        } );

        //#endregion nullOrUndefined

        //#region isTrue

        describe('isTrue', () => {
            it('should throw an exception only when the expression is false.', () => {
                expect(() => Assert.isTrue(false)).toThrow();
                Assert.isTrue(true);
            });
        });

        //#endregion isTrue

        //#region isFalse

        describe('isFalse', () => {
            it('should throw an exception only when the expression is true.', () => {
                expect(() => Assert.isFalse(true)).toThrow();
                Assert.isFalse(false);
            } );
        } );

        //#endregion isFalse
    });
}