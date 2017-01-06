"use strict";
var core_1 = require("@angular/core");
var common = require("./shared");
var HomeComponent = (function () {
    /// component additional properties
    function HomeComponent(
        /// component constructor dependencies
        _service) {
        this._service = _service;
        /// component constructor method
    }
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-home",
            templateUrl: "home.component.html"
        }), 
        __metadata('design:paramtypes', [common.HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map