//Escopos e Diferenças entre var, let, cost
//o var vaza escopo por conta do Hoisting

if(true){
    //Se fosse em Java, ia dar erro ao chama-la fora do if porque
    //aqui é um escopo local, porém o var sofre o hoisting, que o eleva
    var var1 = 10;
}

console.log(var1);

/*
Esse comportamento não funciona com funções. Em funções o var não é vazado
 */

 function teste(){
    var var2 = 10;
 }

teste();

console.log(var2) //var2 is not defined

//O let também sofre hoisting em JS, mas com uma diferença importante em relação ao 'var'. Enquanto o 'var' é elevado e inicializado com 'undefined' antes da execução do código, o 'let' é elevaddo, mas não é inicializado até atingir a linha que foi declarado. O let tbm vai se restringir a qualquer tipo de bloco. Ele vai se manter ao escopo do bloco e não vai sofrer com hoisting e virar escopo global

if(true){
    let var3 = 10;
}
console.log(var3);//var3 is not defined

const x = 10;
x = 11; //vai dar erro, porque x é uma constante
console.log(x);