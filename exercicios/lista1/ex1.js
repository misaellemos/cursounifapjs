    function removerDuplicados(array) {
        return [...new Set(array)];
    }

  let a = [1,2,3,4,4,4,5,6,6,7,7];
  
  console.log(removerDuplicados(a));
