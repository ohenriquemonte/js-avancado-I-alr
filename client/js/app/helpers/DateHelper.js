class DateHelper {

    dataParaTexto(data) {
        return data.getDate() 
        +  '/' + (data.getMonth() + 1)
        + '/' + data.getFullYear();
    }

    textoParaData(texto){
        // mod 2 decrementa 1 na posicao 1 (mes)
        return new Date (...texto.split('-').map((item, indice) => item - indice % 2));
    }

}