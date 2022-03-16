import Negocioacoes from "../models/negociacao.js";

export class NegociacaoControler {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        console.log(negociacao)
    }
    
    criaNegociacao(): Negocioacoes {
        const exp = /-/g
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value); 
        return new Negocioacoes(date, quantidade, valor);
    }
}