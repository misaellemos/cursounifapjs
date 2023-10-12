    
    const listaDeCompras = ['Maçã', 'Banana', 'Laranja', 'Feijão', 'Carne', 'Arroz'];

    function verificarItemNaLista(item){
        return new Promise((resolve, reject) => {

            if(listaDeCompras.includes(item)){
                resolve(`O item "${item}" foi encontrado na lista de compras.\n`);
            }else{
                reject(`O item "${item}" não foi encontrado na lista de compras.\n`);
            }
        });
    }


    const item1 = 'Banana';

    verificarItemNaLista(item1).then((mensagem) => {
        console.log(mensagem);
    }).catch((mensagem) => {
        console.error(mensagem);
    });