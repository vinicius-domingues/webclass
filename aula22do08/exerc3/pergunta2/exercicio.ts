
/// <reference path="Financeiro.ts" />

const orcamento = new Financeiro.Orcamento(1000, ['I 1', 'I 2']);

console.log(`Valor Total Inicial: R$${orcamento.valorTotal}`);

orcamento.aplicarImposto(0.10); 

orcamento.aplicarDesconto(0.05); 

console.log(`Valor Total Após Imposto e Desconto: R$${orcamento.valorTotal}`);
