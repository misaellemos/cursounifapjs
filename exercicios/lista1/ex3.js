
    let maiores = (lista) => {
        if(lista.length < 2){
            console.log(`A lista não possui pelo menos dois elementos.`);
            return;
        }
        let maior = lista[0], segundomaior;

        for(const num of lista){
            if(num > maior){
                segundomaior = maior;
                maior = num;
            }else if(num > segundomaior && num != maior){
                segundomaior = num;
            }
        }

        return {maior, segundomaior};
    }

    const a = [1,2,3,4,6,333];
    
    const {m, sm} = maiores(a);

    if(m && sm){
        console.log(`maior: ${m}\nsegundo maior: ${sm}\n`);
    }