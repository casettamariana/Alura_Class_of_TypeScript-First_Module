class Negociacoes {
    constructor() {
        // private _negociacoes: Array<Negociacao> = [];
        //mesma coisa da linha acima
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
