"use strict";
exports.__esModule = true;
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        // throw new Error("Method not implemented.");
        console.log('logica de insert');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        // throw new Error("Method not implemented.");
        console.log('logica update');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('logica delete');
        return new Concessionaria_1["default"]('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('logica select');
        return new Concessionaria_1["default"]('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        //throw new Error("Method not implemented.");
        return [new Concessionaria_1["default"]('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
