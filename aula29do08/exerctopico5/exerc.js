function achaMaior(array) {
    if (array.length === 0) {
        throw new Error('O array não pode ser nulo.');
    }
    var maiorElemento = array[0];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var elemento = array_1[_i];
        if (elemento > maiorElemento) {
            maiorElemento = elemento;
        }
    }
    return maiorElemento;
}
var numero = achaMaior([1, 2, 3]);
var palavra = achaMaior(['abelha', 'cachorro', 'dromedário']);
console.log("Maior n\u00FAmero: ".concat(numero));
console.log("Maior palavra: ".concat(palavra));
