class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // bind mantém a associação com document
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
    }

    adiciona(event) {
        event.preventDefault();
        
        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        // adicionar a negociacao em uma lista

        console.log(negociacao);

    }

}