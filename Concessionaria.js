"use strict";
exports.__esModule = true;
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.ListaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecedorEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.ListaDeCarros;
    };
    return Concessionaria;
}());
exports["default"] = Concessionaria;
