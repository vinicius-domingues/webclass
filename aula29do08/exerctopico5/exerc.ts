function achaMaior<T>(array: T[]): T {
    if (array.length === 0) {
        throw new Error('O array não pode ser nulo.');
    }

    let maiorElemento: T = array[0];

    for (const elemento of array) {
        if (elemento > maiorElemento) {
            maiorElemento = elemento;
        }
    }

    return maiorElemento;
}

const numero = achaMaior([1, 2, 3]);
const palavra = achaMaior(['abelha', 'cachorro', 'dromedário']);

console.log(`Maior número: ${numero}`);
console.log(`Maior palavra: ${palavra}`);
