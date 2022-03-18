import Negocioacao from "../models/negociacao.js";
import Negociacoes from "../models/negociacoes.js";

export class NegociacaoControler {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.limparFormulario()
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista())
    }
    
    criaNegociacao(): Negocioacao {
        const exp = /-/g
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value); 
        return new Negocioacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus()
    }
}