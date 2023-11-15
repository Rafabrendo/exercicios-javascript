const { gets, print } = require('./exercicio01Prof');

// print(gets());
// print(gets());
// print(gets());
// print(gets());
// print(gets());
// print(gets());


const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteados = gets();
    numerosSorteados.push(numeroSorteados);
    
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

console.log(maiorValor)