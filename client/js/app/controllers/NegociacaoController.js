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
        // let data = new Date (this._inputData.value.replace(/-/g, ','));
        let data = new Date (...
            this._inputData.value
                .split('-')
                .map(function(item, indice){
                    // if(indice == 1) {
                    //     return item - 1;
                    // }
                    // return item;

                    return item - indice % 2; // decrementa 1 na posicao 1 (mes)
                })
        ); // utilizando spread operator
    

        // adicionar a negociacao em uma lista

        console.log(data);

    }

}