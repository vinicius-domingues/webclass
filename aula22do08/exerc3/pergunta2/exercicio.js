"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// exercicios-2.ts
var Financeiro_1 = require("./Financeiro");
var orcamento = new Financeiro_1.Orcamento(1000, ['I 1', 'I 2']);
console.log("Valor Total Inicial: R$".concat(orcamento.valorTotal));
orcamento.aplicarImposto(0.10);
orcamento.aplicarDesconto(0.05);
console.log("Valor Total Ap\u00F3s Imposto e Desconto: R$".concat(orcamento.valorTotal));
