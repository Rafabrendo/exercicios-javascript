/*
Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

Declaração:
   - Palavra chave function
   - Nome da função
   - Lista de argumentos para a função, entre parênteses e separados por vírgulas.
   - Declara JS que definem a função, entre chaves { } */


   function teste(){
    console.log('teste')
   }

   teste(); //aqui vai executar a função
   //teste

/*Quando usamos os parênteses estamos executando a função, como no caso acima a variável teste ficou com o valor retornado da função, já quando não utilizamos os parênteses estamos passando a própria função e não seu valor.
*/

function quadrado(valor){
    return Math.pow(valor, 2);
}

console.log(quadrado(2))

var numero = quadrado; //passei a função para a variavel
var numero2 = quadrado(2); //Passei o valor da função, com valor, para a variavel


console.log(numero(2));
console.log(numero2);

console.log(numero(2) + numero(2));


//É uma forma de organizar as funções:
//Essa função principal e dentro dela, será chamado as outras funções.
function main(){
    console.log("Programa principal");
    quadrado(5);
}

main();