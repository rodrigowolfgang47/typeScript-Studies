export default class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        console.log(this.template(model));
        this.elemento.innerHTML = this.template(model);
    }
}
