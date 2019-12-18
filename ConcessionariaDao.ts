import { DaoInterface } from './DaoInterface';
import Concessionaria from './Concessionaria';

export class ConcessionariaDao implements DaoInterface{

    
    nomeTabela: string = 'tb_concessionaria';    
    
    inserir(object: Concessionaria): boolean {
        // throw new Error("Method not implemented.");
        console.log('logica de insert');
        return true;
    }
    atualizar(object: Concessionaria): boolean {
        // throw new Error("Method not implemented.");
        console.log('logica update')
        return true
    }
    remover(id: number): Concessionaria {
        console.log('logica delete')
        return new Concessionaria('', []);
    }
    selecionar(id: number): Concessionaria {
        console.log('logica select')
        return new Concessionaria('', []);
    }
    selecionarTodos(): [Concessionaria] {
        //throw new Error("Method not implemented.");
        return [new Concessionaria('', [])]
    }


}