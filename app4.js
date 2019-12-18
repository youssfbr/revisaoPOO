"use strict";
exports.__esModule = true;
var ConcessionariaDao_1 = require("./ConcessionariaDao");
var Concessionaria_1 = require("./Concessionaria");
var dao = new ConcessionariaDao_1.ConcessionariaDao();
var concessionaria = new Concessionaria_1["default"]('', []);
dao.inserir(concessionaria);
