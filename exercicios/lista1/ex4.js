    
    const filmes = [
        { nome: 'Filme 1', genero: 'Ação' },
        { nome: 'Filme 2', genero: 'Comédia' },
        { nome: 'Filme 3', genero: 'Drama' },
        { nome: 'Filme 4', genero: 'Ação' },
        { nome: 'Filme 5', genero: 'Aventura' },
    ];
    

    function buscarFilmesPorGenero(genero) {
        return new Promise((resolve, reject) => {

        const filmesFiltrados = filmes.filter((filme) => filme.genero === genero);
    
        if(filmesFiltrados.length == 0) {
             reject(new error(`Nenhum filme encontrado para o gênero ${genero}.`));
        }

        resolve(filmesFiltrados);
        });
    }
    
    const generoDesejado = 'Ação';
    
    buscarFilmesPorGenero(generoDesejado).then((filmesEncontrados) => {
        console.log(`Filmes do gênero "${generoDesejado}":`);

        filmesEncontrados.forEach((filme) => {
            console.log(filme.nome);
        });
    }).catch((erro) => {
        console.error(erro);
        });