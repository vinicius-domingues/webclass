function medirTempoDeExecucao(target, propertyKey, descriptor) {
    var metodoOriginal = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.time(propertyKey);
        var resultado = metodoOriginal.apply(this, args);
        console.timeEnd(propertyKey);
        return resultado;
    };
    return descriptor;
}
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    //@medirTempoDeExecucao --Dá erro nessa versão
    Calculadora.prototype.somarNumeros = function (array) {
        return array.reduce(function (a, b) { return a + b; }, 0);
    };
    return Calculadora;
}());
// Exemplo de uso:
var calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]);
