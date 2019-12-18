import Carro from "./Carro";
import Pessoa from "./Pessoa";
import Concessionaria from "./Concessionaria";
// Criar carros
var carroA = new Carro('Dodge Journey', 4);
var carroB = new Carro('Veloster', 3);
var carroC = new Carro('Cerato', 4);
/*
    Agora... Colocar esses objetos dentro de um array
    e... associar esse array de objetos do tipo carro
    ao atributo lista de carros do objeto objeto concessionária
*/
// Criar array, montar a lista de carros da concessionária
var listaDeCarros = [carroA, carroB, carroC];
var concessionária = new Concessionaria('Rua dos Tabajaras', listaDeCarros);
// exibir lista de carros
// console.log(concessionária.mostrarListaDeCarros())
// comprar carro
var cliente = new Pessoa('Alisson', 'Veloster');
concessionária.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
//# sourceMappingURL=app2.js.map