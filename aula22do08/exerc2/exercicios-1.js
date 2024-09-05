var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    Funcionario.prototype.descricao = function () {
        return "Nome: ".concat(this.nome, ", Cargo: ").concat(this.cargo, ", Sal\u00E1rio: R$").concat(this.salario.toFixed(2));
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, cargo, salario, departamento) {
        var _this = _super.call(this, nome, cargo, salario) || this;
        _this.departamento = departamento;
        return _this;
    }
    Gerente.prototype.detalhesDaDescricao = function () {
        return "".concat(this.descricao(), ", Departamento: ").concat(this.departamento);
    };
    return Gerente;
}(Funcionario));
var funcionario = new Funcionario('Maria', 'Analista', 5000);
console.log(funcionario.descricao());
var gerente = new Gerente('João', 'Gerente de Projetos', 8000, 'Desenvolvimento');
console.log(gerente.detalhesDaDescricao());
