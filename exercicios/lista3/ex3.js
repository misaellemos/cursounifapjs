    function criarContaBancaria(){
        const listaDeUsuarios = [];
    
        function adicionarUsuario(id, nome, saldo){
            const usuario = { id, nome, saldo };
            listaDeUsuarios.push(usuario);
        }
    
        function obterUsuarioPorId(id){
            return new Promise((resolve, reject) => {
                const usuario = listaDeUsuarios.find((u) => u.id === id);

                if(usuario){
                    resolve(usuario);
                }else{
                    reject(new Error(`Usuário com ID ${id} não encontrado.`));
                }
            });
        }
    
        function mostrarInformacoesUsuario(id){
            if(id === undefined){
                return listaDeUsuarios;
            }
        
            return obterUsuarioPorId(id).then((usuario) => {
                if(usuario.saldo > 0){
                    return usuario;
                }else{
                    throw new Error(`O saldo do usuário ${usuario.nome} não é maior que zero.\n`);
                }
            });
        }
    
        return {adicionarUsuario, obterUsuarioPorId, mostrarInformacoesUsuario};
    }
    
    const contaBancaria = criarContaBancaria();
    
    contaBancaria.adicionarUsuario(1, 'João', 100);
    contaBancaria.adicionarUsuario(2, 'Maria', -50);
    contaBancaria.adicionarUsuario(3, 'Carlos', 200);
    
    
    contaBancaria.mostrarInformacoesUsuario(1).then((usuario) => {
        console.log(`Informações do usuário com saldo maior que zero: `, usuario);
    }).catch((error) => {
        console.error(error.message);
    });

    contaBancaria.mostrarInformacoesUsuario(2).then((usuario) => {
        console.log(`Informações do usuário com saldo maior que zero: `, usuario);
    }).catch((error) => {
        console.error(error.message);
    });
    
    const user = contaBancaria.mostrarInformacoesUsuario();
    console.log('\nLista de todos os usuários:', user);
    