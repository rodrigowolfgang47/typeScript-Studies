"use strict";
exports.__esModule = true;
exports.NegociacaoControler = void 0;
var dias_da_semana_js_1 = require("../enums/dias-da-semana.js");
var negociacao_js_1 = require("../models/negociacao.js");
var negociacoes_js_1 = require("../models/negociacoes.js");
var mensagem_view_js_1 = require("../views/mensagem-view.js");
var negociacoes_view_js_1 = require("../views/negociacoes-view.js");
var NegociacaoControler = /** @class */ (function () {
    function NegociacaoControler() {
        this.negociacoes = new negociacoes_js_1["default"]();
        this.negociacoesView = new negociacoes_view_js_1["default"]('#negociacoes-View');
        this.menagemView = new mensagem_view_js_1["default"]('#mensagemView');
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    ;
    NegociacaoControler.prototype.adiciona = function () {
        var negociacao = negociacao_js_1["default"].criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.eHDiaUtil(negociacao.data)) {
            this.menagemView.update('Somente são aceitos negociações em dias úteis');
            return;
        }
        ;
        this.limparFormulario();
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
    };
    ;
    NegociacaoControler.prototype.eHDiaUtil = function (data) {
        return data.getDay() > dias_da_semana_js_1.DiasDaSemana.DOMINDO && data.getDay() < dias_da_semana_js_1.DiasDaSemana.SABADO;
    };
    NegociacaoControler.prototype.limparFormulario = function () {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    };
    ;
    NegociacaoControler.prototype.atualizaView = function () {
        this.menagemView.update('Negociação adicionada com sucesso!');
        this.negociacoesView.update(this.negociacoes);
    };
    return NegociacaoControler;
}());
exports.NegociacaoControler = NegociacaoControler;
