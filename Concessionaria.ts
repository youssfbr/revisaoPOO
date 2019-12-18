import Carro from "./Carro";
import { ConcessionariaInterface } from './ConcessionariaInterface';


export default class Concessionaria implements ConcessionariaInterface {
  
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

    public fornecerHorariosDeFuncionamento(): string {
        // throw new Error("Method not implemented.");
        return 'De segunda a sexta das 8:00 às 18:00 e sábado das 8:00 às 12:00 hs'
    }
}