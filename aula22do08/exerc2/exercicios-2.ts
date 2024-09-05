class ContaBancaria {
    constructor(
        protected pessoa: string, 
        protected saldo: number


    ) {}


    exibirSaldo(): void {
        console.log(`Total ${this.pessoa}: R$${this.saldo}`);
    }

}

class ContaCorrente extends ContaBancaria {
    constructor(
        pessoa: string,
        saldo: number,
        private limite: number
    ) {
        super(pessoa, saldo);
    }

    exibirSaldo(): void {
        const saldoTotal = this.saldo + this.limite;
        console.log(`Total ${this.pessoa}: R$${saldoTotal} (Saldo: R$${this.saldo.toFixed(2)} || Limite de Crédito: R$${this.limite.toFixed(2)})`);
    }
}


const conta = new ContaBancaria('Vinicius', 10000);
conta.exibirSaldo(); 

const contaCorrente = new ContaCorrente('Nala', 6000, 5000);
contaCorrente.exibirSaldo(); 
