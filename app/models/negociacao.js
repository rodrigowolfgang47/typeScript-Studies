"use strict";
exports.__esModule = true;
var Negocioacao = /** @class */ (function () {
    function Negocioacao(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    Object.defineProperty(Negocioacao.prototype, "data", {
        get: function () {
            var data = new Date(this._data.getTime());
            return data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Negocioacao.prototype, "volume", {
        get: function () {
            return this.valor * this.quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Negocioacao.criaDe = function (dataString, quantidadeString, valorString) {
        var exp = /-/g;
        var date = new Date(dataString.replace(exp, ','));
        var quantidade = parseInt(quantidadeString);
        var valor = parseFloat(valorString);
        return new Negocioacao(date, quantidade, valor);
    };
    return Negocioacao;
}());
exports["default"] = Negocioacao;
