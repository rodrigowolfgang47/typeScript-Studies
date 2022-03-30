import { DiasDaSemana } from "../enums/dias-da-semana.js";
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
        this.inputData = document.querySelector("#data") as HTMLInputElement;
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValor = document.querySelector("#valor") as  HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    };

     public adiciona(): void {
        const negociacao = Negocioacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
            );

        if(!this.eHDiaUtil(negociacao.data)){
            this.menagemView.update('Somente são aceitos negociações em dias úteis')
            return;
        };

        this.limparFormulario();
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
    };

    private eHDiaUtil(data: Date){
        return data.getDay() > DiasDaSemana.DOMINDO && data.getDay() < DiasDaSemana.SABADO
    }
    
    private limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    };

    private atualizaView(): void {
        this.menagemView.update('Negociação adicionada com sucesso!');
        this.negociacoesView.update(this.negociacoes);
    }
}