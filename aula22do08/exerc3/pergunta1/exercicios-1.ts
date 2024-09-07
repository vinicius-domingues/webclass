
import { Cliente } from './cliente';
import { Pedido } from './pedido';

const cliente1 = new Cliente('João Silva', 'joao.silva@email.com');

const pedido1 = new Pedido(cliente1, 'Laptop', 3000);

function exibirDetalhesPedido(pedido: Pedido): void {

    console.log(`Nome do Cliente: ${pedido.cliente.nome}`);

    console.log(`Produto: ${pedido.produto}`);

    console.log(`Valor Total: R$${pedido.valor}`);

}

exibirDetalhesPedido(pedido1);
