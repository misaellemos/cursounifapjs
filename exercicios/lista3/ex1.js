   
   function ConferirMaioresDeIdade(listaPessoas){
        return new Promise((resolve, reject) => {

        if(!lista){
            reject(new Error('A entrada não é uma lista válida.'));
            return;
        }
    
        const pessoasMaioresDe18 = lista.filter((pessoa) => pessoa.idade > 18);

        resolve(pessoasMaioresDe18.length);
        });
    }

    const listaDePessoas = [
        { nome: 'João', idade: 25 },
        { nome: 'Maria', idade: 17 },
        { nome: 'Carlos', idade: 20 },
        { nome: 'Ana', idade: 16 },
    ];
    
    MaioresDe18(listaDePessoas).then((quantidade) => {
        console.log(`Número de pessoas maiores de 18 anos: ${quantidade}`);
        }).catch((error) => {
        console.error(error.message);
        });
    