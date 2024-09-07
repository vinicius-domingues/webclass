
namespace Financeiro {
    
    export function calcularImposto(valor: number, taxa: number): number {

        return valor * taxa;

    }

    export function calcularDesconto(valor: number, taxa: number): number {

        return valor * (1 - taxa);

    }

    export class Orcamento {

        constructor(

            public valorTotal: number,

            public itens: string[]

        ) {}

        adicionarItem(item: string, valor: number): void {

            this.itens.push(item);

            this.valorTotal += valor;

        }

        aplicarImposto(taxa: number): void {

            this.valorTotal += calcularImposto(this.valorTotal, taxa);

        }

        aplicarDesconto(taxa: number): void {

            this.valorTotal = calcularDesconto(this.valorTotal, taxa);

        }

    }

}
