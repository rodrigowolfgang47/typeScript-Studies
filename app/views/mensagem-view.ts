import View from "./view.js";

export default class MensagemView extends View<String>{
     protected template(model: String): string {
        return `
        <p class="alert alert-primary">${model}</p>
        `
    };
}