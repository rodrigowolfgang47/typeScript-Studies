import Negocioacao from "../models/negociacao.js";
import Negociacoes from "../models/negociacoes.js";
import MensagemView from "../views/mensagem-view.js";
import NegociacoesView from "../views/negociacoes-view.js";

export class NegociacaoControler {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoes-View');
    private menagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    };

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.limparFormulario();
        this.negociacoes.adiciona(negociacao);
        this.menagemView.update('Negociação adicionada com sucesso!');
        this.negociacoesView.update(this.negociacoes);
    };
    
    criaNegociacao(): Negocioacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value); 
        return new Negocioacao(date, quantidade, valor);
    };

    limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    };
}