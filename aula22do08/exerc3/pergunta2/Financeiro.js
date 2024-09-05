"use strict";
// Financeiro.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orcamento = void 0;
exports.calcularImposto = calcularImposto;
exports.calcularDesconto = calcularDesconto;
function calcularImposto(valor, taxa) {
    return valor * taxa;
}
function calcularDesconto(valor, taxa) {
    return valor * taxa;
}
var Orcamento = /** @class */ (function () {
    function Orcamento(valorTotal, itens) {
        this.valorTotal = valorTotal;
        this.itens = itens;
    }
    Orcamento.prototype.aplicarImposto = function (taxa) {
        this.valorTotal += calcularImposto(this.valorTotal, taxa);
    };
    Orcamento.prototype.aplicarDesconto = function (taxa) {
        this.valorTotal -= calcularDesconto(this.valorTotal, taxa);
    };
    return Orcamento;
}());
exports.Orcamento = Orcamento;
