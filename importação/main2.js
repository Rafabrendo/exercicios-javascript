const { gets, print } = require('./exercicio01Prof');

// print(gets());
// print(gets());
// print(gets());
// print(gets());
// print(gets());
// print(gets());


// const numerosSorteados = [];
let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const numeroSort  = gets();
    // numerosSorteados.push(numeroSorteados);
    if(numeroSort > maiorValor){
        maiorValor = numeroSort ;
    }
    
}


// for (let i = 0; i < numerosSorteados.length; i++) {
//     const numeroSorteado = numerosSorteados[i];
//     if(numeroSorteado > maiorValor){
//         maiorValor = numeroSorteado;
//     }
// }

console.log(maiorValor)

//Testando sem declarar o let
num1 = 10;
num2 = 5;

result = num1/num2
console.log(result)