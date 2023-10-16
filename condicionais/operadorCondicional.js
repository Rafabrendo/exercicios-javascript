 
const numero = "2";

 const numeroPar = (numero % 2) === 0;

 console.log(numeroPar);

 if (numeroPar){
    console.log('Executei')
 }
 if(!numeroPar){
    console.log('Numero não é par')
 }

else if(typeof numero === 'string'){
    console.log('É uma string')
}
 
 else{
    console.log('Errou algo')
 }

 //if(){}
 //if(){} else{}
 //else if(){}

 console.log(typeof numero === 'string')

 const numero2 = 5;

const numeroDivisivelPor5 = (numero % 5) === 0;

if(numero2 === 0){
    console.log('o número é inválido');
} else if (numero2 === 5){
    console.log('O número é inválido');
} else if(numeroDivisivelPor5){
    console.log('Sim');
} else{
    console.log('Não');
}

//Refatorando operadores condicionais:

const numero3 = 5;

if((numero3 % 2) === 0){
    console.log('O número é par');
} else{
    console.log('O número é impar');
}

//normalmente colocase is na frente de variáveis boleanas

const isNumeroPar = (numero % 2) === 0;

if(isNumeroPar){
    console.log('O número é par');
}else{
    console.log('O número é impar');
}
