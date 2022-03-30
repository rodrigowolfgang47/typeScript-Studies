export default class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM. verifique!`);
        }
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
