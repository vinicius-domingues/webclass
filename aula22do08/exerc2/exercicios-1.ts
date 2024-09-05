class Funcionario {
    constructor(
        private nome: string,
        private cargo: string,
        private salario: number
    ) {}

    descricao(): string {
        return `Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
    }
}

class Gerente extends Funcionario {
    constructor(
        nome: string,
        cargo: string,
        salario: number,
        private departamento: string
    ) {
        super(nome, cargo, salario);
    }

    detalhesDaDescricao(): string {
        return `${this.descricao()}, Departamento: ${this.departamento}`;
    }
}

const funcionario = new Funcionario('Maria', 'Analista', 5000);
console.log(funcionario.descricao());

const gerente = new Gerente('João', 'Gerente de Projetos', 8000, 'Desenvolvimento');
console.log(gerente.detalhesDaDescricao());
