"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detalhesCompra = detalhesCompra;
function detalhesCompra(produto, pagamento) {
    return "Produto: ".concat(produto.nome, " tem o pre\u00E7o de R$").concat(produto.preco, " (").concat(produto.categoria, ") se pago via ").concat(pagamento, ".");
}
