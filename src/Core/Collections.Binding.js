var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Classical;
(function (Classical) {
    (function (Binding) {
        (function (Collections) {
            var b = Classical.Binding.New;

            //#endregion Imports
            //#region Collection
            var Collection = (function () {
                function Collection() {
                }
                return Collection;
            })();
            Collections.Collection = Collection;

            

            //#endregion ICollectionBinder
            //#region PropertyUpdate
            var PropertyUpdate = (function (_super) {
                __extends(PropertyUpdate, _super);
                function PropertyUpdate(value) {
                    var sources = [];
                    for (var _i = 0; _i < (arguments.length - 1); _i++) {
                        sources[_i] = arguments[_i + 1];
                    }
                    var _this = this;
                    _super.call(this);
                    this.value = value;
                    if (sources)
                        sources.query().forEach(function (source) {
                            return _this.add(source);
                        });
                }
                return PropertyUpdate;
            })(b.Update);
            Collections.PropertyUpdate = PropertyUpdate;
        })(Binding.Collections || (Binding.Collections = {}));
        var Collections = Binding.Collections;
    })(Classical.Binding || (Classical.Binding = {}));
    var Binding = Classical.Binding;
})(Classical || (Classical = {}));
//# sourceMappingURL=Collections.Binding.js.map
