class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void {
        this.velocidade += 10        
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
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

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido 
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido 
    }

    public comprarCarro(carro: any): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): any {
        return this.carro
    }
}

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
console.log(concessionária.mostrarListaDeCarros())