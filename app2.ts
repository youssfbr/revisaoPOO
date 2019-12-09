import Carro from "./Carro"
import Pessoa from "./Pessoa"
import Concessionaria from "./Concessionaria"

// Criar carros
let carroA = new Carro('Dodge Journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

/*
    Agora... Colocar esses objetos dentro de um array
    e... associar esse array de objetos do tipo carro
    ao atributo lista de carros do objeto objeto concessionária
*/
// Criar array, montar a lista de carros da concessionária
let listaDeCarros: Array<Carro> = [ carroA, carroB, carroC ]
let concessionária = new Concessionaria('Rua dos Tabajaras', listaDeCarros)

// exibir lista de carros
// console.log(concessionária.mostrarListaDeCarros())

// comprar carro
let cliente = new Pessoa('Alisson', 'Veloster')

concessionária.mostrarListaDeCarros().map(( carro: Carro) => {

    if (carro['modelo'] == cliente.dizerCarroPreferido()) {

        // comprar o carro
        cliente.comprarCarro(carro)
    }
})

 console.log(cliente.dizerCarroQueTem())