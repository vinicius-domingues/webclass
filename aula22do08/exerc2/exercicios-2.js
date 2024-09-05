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
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(pessoa, saldo) {
        this.pessoa = pessoa;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.exibirSaldo = function () {
        console.log("Total ".concat(this.pessoa, ": R$").concat(this.saldo));
    };
    return ContaBancaria;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(pessoa, saldo, limite) {
        var _this = _super.call(this, pessoa, saldo) || this;
        _this.limite = limite;
        return _this;
    }
    ContaCorrente.prototype.exibirSaldo = function () {
        var saldoTotal = this.saldo + this.limite;
        console.log("Total ".concat(this.pessoa, ": R$").concat(saldoTotal, " (Saldo: R$").concat(this.saldo.toFixed(2), " || Limite de Cr\u00E9dito: R$").concat(this.limite.toFixed(2), ")"));
    };
    return ContaCorrente;
}(ContaBancaria));
var conta = new ContaBancaria('Vinicius', 10000);
conta.exibirSaldo();
var contaCorrente = new ContaCorrente('Nala', 6000, 5000);
contaCorrente.exibirSaldo();
