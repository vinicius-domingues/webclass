// Função que gera uma mensagem descrevendo a pessoa e seu emprego
function infoPessoaEmpregado(pessoaEmpregado) {
    return "Nome: ".concat(pessoaEmpregado.nome, ", Idade: ").concat(pessoaEmpregado.idade, ", Empresa: ").concat(pessoaEmpregado.empresa, ", Sal\u00E1rio: R$").concat(pessoaEmpregado.salario);
}
// Exemplo de uso
var pessoaEmpregado = {
    nome: 'Vinicius',
    idade: 21,
    empresa: 'TOTVS',
    salario: 10000
};
console.log(infoPessoaEmpregado(pessoaEmpregado));
