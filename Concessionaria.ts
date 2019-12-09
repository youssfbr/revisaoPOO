import Carro from "./Carro"

export default class Concessionaria {
    private endereco: string
    private ListaDeCarros: Carro[]

    constructor(endereco: string, listaDeCarros) {
        this.endereco = endereco
        this.ListaDeCarros = listaDeCarros
    }

    public fornecedorEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.ListaDeCarros
    }
}