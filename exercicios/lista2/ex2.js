
    let calcmedia = (boletim) => {
        let total = 0;

        for(const nota of boletim){
            total += nota;
        }

        return total/boletim.length
    }

    let aprovacao = (media = calcmedia(boletim), mediaminima) => {
        if(media >= mediaminima){
            return 'Aprovado';
        }
        
        return 'Reprovado';
    }

    module.exports = {calcmedia, aprovacao};
    const {calcmedia, aprovacao} = require('./cd');

    const BoletimAluno = [5, 10, 6];
    const mediaAluno = calcmedia(notasAluno);
    const mediaminima = 7.0;

    console.log(`\nBoletim do aluno: ${BoletimAluno}\nMédia: ${mediaAluno}\nResultado: ${aprovacao(mediaAluno, mediaminima)}`);