    let estados = ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Rio Grande do Norte", "Santa Catarina", "Acre"];

    function retornaEstado (estado){
        if(estado.charAt(0) == "S") 
        return estado;
    }
    let resultado = estados.filter(retornaEstado);
    console.log(resultado);