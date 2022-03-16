import { NegociacaoControler } from "./controllers/negociacoes-controller.js";

const controller = new NegociacaoControler();
const form = document.querySelector('.form');

form.addEventListener('submit', event =>{
    event.preventDefault()
    controller.adiciona()
});