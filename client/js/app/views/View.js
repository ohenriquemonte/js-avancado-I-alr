class View {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _update(model){
        this._elemento.innerHTML = this._template(model);
    }
}