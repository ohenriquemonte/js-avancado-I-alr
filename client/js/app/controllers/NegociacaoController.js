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
        // let data = new Date (...
        //     this._inputData.value
        //         .split('-')
        //         .map((item, indice) => item - indice % 2) // mod 2 decrementa 1 na posicao 1 (mes)
        // ); // utilizando spread operator (permite passar itens de um array como parametros pro construtor)
        
        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
        console.log(DateHelper.dataParaTexto(negociacao.data));

    }

}