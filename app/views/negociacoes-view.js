"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var view_js_1 = require("./view.js");
var NegociacoesView = /** @class */ (function (_super) {
    __extends(NegociacoesView, _super);
    function NegociacoesView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NegociacoesView.prototype.template = function (model) {
        var _this = this;
        return "\n        <table class=\"table table-hover table-bordered\">\n            <thead>\n                <tr>\n                    <th>\n                        DATA                  \n                    </th>\n                    <th>\n                        QUANTIDADE                  \n                    </th>\n                    <th>\n                        VALOR                  \n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                " + model.lista().map(function (negociacao) {
            return "\n                        <tr>\n                            <td>" + _this.formatar(negociacao.data) + "</td>\n                            <td>" + negociacao.quantidade + "</td>\n                            <td>" + negociacao.valor + "</td>\n                        </tr>\n                    ";
        }).join('') + "\n            </tbody>\n        </table>\n        ";
    };
    NegociacoesView.prototype.formatar = function (data) {
        return new Intl.DateTimeFormat().format(data);
    };
    return NegociacoesView;
}(view_js_1["default"]));
exports["default"] = NegociacoesView;
