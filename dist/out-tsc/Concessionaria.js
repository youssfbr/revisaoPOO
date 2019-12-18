var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.ListaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecedorEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.ListaDeCarros;
    };
    Concessionaria.prototype.fornecerHorariosDeFuncionamento = function () {
        // throw new Error("Method not implemented.");
        return 'De segunda a sexta das 8:00 às 18:00 e sábado das 8:00 às 12:00 hs';
    };
    return Concessionaria;
}());
export default Concessionaria;
//# sourceMappingURL=Concessionaria.js.map