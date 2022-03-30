"use strict";
exports.__esModule = true;
var View = /** @class */ (function () {
    function View(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    View.prototype.update = function (model) {
        this.elemento.innerHTML = this.template(model);
    };
    return View;
}());
exports["default"] = View;
