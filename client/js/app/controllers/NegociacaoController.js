class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // bind mantém a associação com document
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
    }

    adiciona(event) {
        event.preventDefault();

        // let data = new Date (this._inputData.value.split('-'));
        let data = new Date (this._inputData.value.replace(/-/g, ','));
    

        // adicionar a negociacao em uma lista

        console.log(data);

    }

}