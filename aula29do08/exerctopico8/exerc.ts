async function buscaAPI(): Promise<string> {
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {

            const sucesso = Math.random() > 0.9;  

            if (sucesso) {

                resolve('SUCESSO');

            } else {

                reject('FALHA');

            }

        }, 2000);  

    });

}

async function executaBusca() {
    try {

        const dados = await buscaAPI();  

        console.log(dados);  

    } catch (error) {

        // Captura e exibe erros

        console.error('ERRO AO BUSCAR', error);
    }
}

