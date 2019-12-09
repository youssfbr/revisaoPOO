"use strict";
exports.__esModule = true;
var Carro_1 = require("./Carro");
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
// Criar carros
var carroA = new Carro_1["default"]('Dodge Journey', 4);
var carroB = new Carro_1["default"]('Veloster', 3);
var carroC = new Carro_1["default"]('Cerato', 4);
/*
    Agora... Colocar esses objetos dentro de um array
    e... associar esse array de objetos do tipo carro
    ao atributo lista de carros do objeto objeto concessionária
*/
// Criar array, montar a lista de carros da concessionária
var listaDeCarros = [carroA, carroB, carroC];
var concessionária = new Concessionaria_1["default"]('Rua dos Tabajaras', listaDeCarros);
// exibir lista de carros
// console.log(concessionária.mostrarListaDeCarros())
// comprar carro
var cliente = new Pessoa_1["default"]('Alisson', 'Veloster');
concessionária.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
