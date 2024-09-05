
type Pessoa = {
    nome: string;
    idade: number;
};


type Empregado = {
    empresa: string;
    salario: number;
};


type PessoaEmpregado = Pessoa & Empregado;


function infoPessoaEmpregado(pessoaEmpregado: PessoaEmpregado): string {
    return `Nome: ${pessoaEmpregado.nome}, Idade: ${pessoaEmpregado.idade}, Empresa: ${pessoaEmpregado.empresa}, Salário: R$${pessoaEmpregado.salario}`;
}


const pessoaEmpregado: PessoaEmpregado = {
    nome: 'Vinicius',
    idade: 21,
    empresa: 'TOTVS',
    salario: 10000
};

console.log(infoPessoaEmpregado(pessoaEmpregado));
