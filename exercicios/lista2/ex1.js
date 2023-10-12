
    let soma = (a, b) => a + b;
    
    module.exports = soma;
    const soma = require('./cd');

    const num1 = 5;
    const num2 = 10;

    console.log(`${num1} + ${num2} = ${soma(num1,num2)}`);