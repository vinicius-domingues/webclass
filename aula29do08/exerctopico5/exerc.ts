function encontrarMaiorElemento<T>(array: T[]): T {
    if (array.length === 0) {
        throw new Error('O array não pode estar vazio.');
    }

    let maiorElemento: T = array[0];

    for (const elemento of array) {
        if (elemento > maiorElemento) {
            maiorElemento = elemento;
        }
    }

    return maiorElemento;
}

const maiorNumero = encontrarMaiorElemento([10, 20, 30]);  // 30
const maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']);  // 'zebra'

console.log(`Maior número: ${maiorNumero}`);
console.log(`Maior palavra: ${maiorPalavra}`);
