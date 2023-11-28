/*
    JS é fracamente tipado
    Tem três formas de declarar
 */

 var var1 = 10;
 var1 = 'texto'
 var var2 = 'Teste';

 console.log(var1 + var2)

 var1 = 20;
 console.log(var1 + var2);

 var2 = '20';
 console.log(var1 + var2)
 //Utilizando o operador + ,o interpretador entende que é uma concatenação

 console.log(var1 - var2)
 //Utilizando o operador -, o interpretador entende que é uma operação matematica