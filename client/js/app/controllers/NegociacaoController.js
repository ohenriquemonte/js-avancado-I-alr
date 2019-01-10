class NegociacaoController {

    adiciona(event) {
        event.preventDefault();
        
        let $ = document.querySelector.bind(document); // bind mantém a associação com document

        let inputData = $('#data');
        let inputValor = $('#valor');
        let inputQuantidade = $('#quantidade');

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);
    }

}