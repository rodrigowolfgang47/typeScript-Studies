import { DiasDaSemana } from "../enums/dias-da-semana.js";
import Negocioacao from "../models/negociacao.js";
import Negociacoes from "../models/negociacoes.js";
import MensagemView from "../views/mensagem-view.js";
import NegociacoesView from "../views/negociacoes-view.js";
export class NegociacaoControler {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoes-View');
        this.menagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    ;
    adiciona() {
        const negociacao = Negocioacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.eHDiaUtil(negociacao.data)) {
            this.menagemView.update('Somente são aceitos negociações em dias úteis');
            return;
        }
        ;
        this.limparFormulario();
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
    }
    ;
    eHDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINDO && data.getDay() < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    ;
    atualizaView() {
        this.menagemView.update('Negociação adicionada com sucesso!');
        this.negociacoesView.update(this.negociacoes);
    }
}
