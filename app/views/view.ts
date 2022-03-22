export default abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    abstract template(model: T):string;

    update(model: T): void{
        console.log(this.template(model))
        this.elemento.innerHTML = this.template(model);
    }

}