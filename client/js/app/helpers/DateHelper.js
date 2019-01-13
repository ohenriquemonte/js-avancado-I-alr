class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
        
        // data.getDate() 
        // +  '/' + (data.getMonth() + 1)
        // + '/' + data.getFullYear();
    }

    static textoParaData(texto){

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd.');

        // mod 2 decrementa 1 na posicao 1 (mes)
        return new Date (...texto.split('-').map((item, indice) => item - indice % 2));
    }

}