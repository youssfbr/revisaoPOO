import Carro from './Carro';
import Moto from './Moto';
import Concessionaria from './Concessionaria';
var carro = new Carro('veloster', 3);
carro.acelerar();
carro.acelerar();
var moto = new Moto();
moto.acelerar();
moto.acelerar();
console.log(moto);
console.log(carro);
var concessionaria = new Concessionaria('Rua 13', []);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
//# sourceMappingURL=app3.js.map