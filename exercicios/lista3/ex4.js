   
    function encontrarPessoaMaisVelhaEmaisNova(listaDePessoas){
        return new Promise((resolve, reject) => {
            
        if(listaDePessoas.length === 0){
            reject(new Error('A lista de pessoas está vazia.'));
            return;
        }
    
        let pessoaMaisVelha = listaDePessoas[0];
        let pessoaMaisNova = listaDePessoas[0];
    
        for(const pessoa of listaDePessoas){
            if(pessoa.idade > pessoaMaisVelha.idade){
                pessoaMaisVelha = pessoa;
            }
            if(pessoa.idade < pessoaMaisNova.idade){
                pessoaMaisNova = pessoa;
            }
        }
    
        resolve({pessoaMaisVelha, pessoaMaisNova});
        });
    }
    
    
    const listaDePessoas = [
        { nome: 'João', idade: 30 },
        { nome: 'Maria', idade: 25 },
        { nome: 'Carlos', idade: 40 },
        { nome: 'Ana', idade: 20 },
    ];
    
    encontrarPessoaMaisVelhaEmaisNova(listaDePessoas).then(({ pessoaMaisVelha, pessoaMaisNova }) => {
        console.log('Pessoa mais velha:', pessoaMaisVelha);
        console.log('Pessoa mais nova:', pessoaMaisNova);
        }).catch((error) => {
            console.error(error.message);
        });
    