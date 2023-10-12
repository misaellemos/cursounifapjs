    function gerarNumeroAleatorio(min, max){
        return new Promise((resolve, reject) => {

        if (min >= max) {
            reject(new Error('O valor mínimo deve ser menor que o valor máximo.'));
        } else {
            const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
            resolve(numeroAleatorio);
        }
        });
    }
    
    function gerarNumeroAleatorioPadrao(){
        return gerarNumeroAleatorio(0, 10);
    }

    function gerarNumeroNoIntervalo(min, max) {
        return gerarNumeroAleatorio(min, max).then((numero) => {
            console.log(`Número aleatório dentro do intervalo [${min}, ${max}]: ${numero}`);
        }).catch((error) => {
            console.error('Erro:', error.message);
        });
    }

    gerarNumeroNoIntervalo(0, 10);  

    gerarNumeroNoIntervalo(2, 5);

    gerarNumeroNoIntervalo(2, 20);