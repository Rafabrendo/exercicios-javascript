 
 var numero = "2";

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