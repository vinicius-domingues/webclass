class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmailInvalidoError'; 
    }
}

function veEmail(email: string): void {
    
    if (!email.includes('@')) {
        
        throw new EmailInvalidoError('Email inválido: O email deve conter o caractere "@"');
    }

    console.log('Email válido!');
}


try {
    veEmail('vinicius.domingues@gmail.com');  
} catch (error) {
    
    if (error instanceof EmailInvalidoError) {
        console.error(error.message);  
    }
}