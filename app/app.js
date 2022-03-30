"use strict";
exports.__esModule = true;
var negociacoes_controller_js_1 = require("./controllers/negociacoes-controller.js");
var controller = new negociacoes_controller_js_1.NegociacaoControler();
var form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    controller.adiciona();
});
