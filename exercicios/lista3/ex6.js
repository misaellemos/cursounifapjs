    function verificarFrutasQueComecamComM(frutas) {
        return new Promise((resolve, reject) => {
            const frutaComM = frutas.find((fruta) => fruta.toLowerCase().startsWith('m'));
        
            if(frutaComM){
                resolve('A lista contém pelo menos uma fruta que começa com "m".\n');
            }else{
                resolve('A lista não contém frutas que começam com a letra "m".\n');
            }
        });
    }
    
    const listaf = ['Laranja', 'Maçã', 'Banana', 'Laranja', 'Uva'];
    
    verificarFrutasQueComecamComM(listaf).then((mensagem) => {
            console.log(mensagem);
        }).catch((error) => {
            console.error(error.message);
        });
    

    