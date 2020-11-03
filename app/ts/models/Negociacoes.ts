class Negociacoes {
    // private _negociacoes: Array<Negociacao> = [];
    //mesma coisa da linha acima
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}