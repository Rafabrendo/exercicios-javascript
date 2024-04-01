/**
2) Faça um programa que receba N (quantidade de númeroos) e seus respectivos valores
Imprima o maior número par e o menor número ímpar.
 */

 function print(texto){
    console.log(texto)
 }

 function maiorNumeroPar(lista){
    let maiorNumPar = Math.max(...lista); //Um jeito de fazer
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
    
    for(let i = 1; i < lista.length; i++){
        
        if(lista[i] > num ){
            num = lista[i];
        }
        
        console.log(lista[i]);
    }
    

    return ` e ${num}`;
 }

 var lista = [20,30,0,5,7,8]

 console.log(maiorNumeroPar(lista))