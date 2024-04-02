/**
2) Faça um programa que receba N (quantidade de númeroos) e seus respectivos valores
Imprima o maior número par e o menor número ímpar.
 */

 function print(texto){
    console.log(texto)
 }

//Fiz funções que imprimem o maior valor 
 function maiorNumero(lista){
    let maiorNum = Math.max(...lista); //Um jeito de fazer
    let num = lista[0];
    
    // for(let i = 0; i < lista.length; i++){
        
    //     if(lista[i] === lista[0]){
    //         num = lista[0];
    //     }
    //     if(lista[i] > num ){
    //             num = lista[i]
    //         }
        
    //     console.log(lista[i])
    // }
    
    for(let i = 0; i < lista.length; i++){
        
        if(lista[i] > num ){
            num = lista[i];
        }
        
        console.log(lista[i]);
    }
    

    return ` e ${num}`;
 }

 var lista = [20,30,0,5,7,8,54,61]

 console.log(maiorNumero(lista))

//  fazendo com reduce

var max = lista.reduce(function(a, b){
    return Math.max(a, b);
}, -Infinity)
// O valor de -Infinity é usado como valor inicial porque qualquer número na array será maior do que -Infinity. Isso garante que o primeiro elemento da array seja comparado com os outros elementos, garantindo que o maior valor seja corretamente identificado.
console.log(max)

function maiorNumeroPar(lista){
    let numPar = '';
    
    for(let i = 0; i < lista.length; i++){
    
     if(lista[i] % 2 === 0){
        if(numPar === null){
            numPar = lista[i];
        }
        if(lista[i] > numPar){
            numPar = lista[i]
        }
    }
    
    }

    return numPar;

}

function maiorNumeroPar2(lista){
    return lista.filter((a) => a % 2 === 0).reduce(function(a, b){
        return Math.max(a, b);
    }, -Infinity)
}

// console.log(maiorNumeroPar2(lista))

console.log(maiorNumeroPar(lista))

//Elegante
function numImpar(lista){
    return lista.filter((a) => a % 2 != 0).reduce((a, b) => Math.min(a, b),);
}

// console.log(numImpar(lista))

module.exports = {maiorNumeroPar2, numImpar, print};