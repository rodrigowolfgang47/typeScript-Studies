class Negocioacao {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
        ) {}
    
    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number {
        return this.valor * this.quantidade
    }

    public static criaDe(dataString:string, quantidadeString:string , valorString:string){
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString); 
        return new Negocioacao(date, quantidade, valor);
    }
}

export default Negocioacao