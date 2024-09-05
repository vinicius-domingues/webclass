
export interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

export type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';


export function detalhesCompra(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome} tem o preço de R$${produto.preco} (${produto.categoria}) se pago via ${pagamento}.`;
}

const produto: Produto = {
    nome: 'Camiseta Lacoste',
    preco: 199.99,
    categoria: 'Roupas'
};

const pagamento: FormaPagamento = 'cartão';

console.log(detalhesCompra(produto, pagamento));
