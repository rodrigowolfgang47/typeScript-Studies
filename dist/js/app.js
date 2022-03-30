import { NegociacaoControler } from "./controllers/negociacoes-controller.js";
const controller = new NegociacaoControler();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi posível inicializar, verifique se o valor do forme não é nulo');
}
