// Pedido.ts
import { Cliente } from './cliente';

export class Pedido {
    
    constructor(

        public cliente: Cliente,

        public produto: string,

        public valor: number

    ) {}

}
