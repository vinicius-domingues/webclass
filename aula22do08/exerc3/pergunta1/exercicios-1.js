"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var cliente_1 = require("./cliente");
var pedido_1 = require("./pedido");
var cliente1 = new cliente_1.Cliente('Vinicius Domingues', 'vinicius@email.com');
var pedido1 = new pedido_1.Pedido(cliente1, 'Calça', 300);
function exibirDetalhesPedido(pedido) {
    console.log("Nome do Cliente: ".concat(pedido.cliente.nome));
    console.log("Produto: ".concat(pedido.produto));
    console.log("Valor Total: R$".concat(pedido.valor));
}
exibirDetalhesPedido(pedido1);
