/**
1) Faça um programa que recebe a média de um aluno.
Caso a média seja < 5 imprima "Reprovado"
Caso a média seja >= 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"

        Exemplo:
            Entrada:
                5.5
            Saída:
                Recuperação
 */

const {gets, print} = require('./funcoes-auxiliares');

const media = gets();
console.log(media)

let x = 6.9;
// operadores ternários encadeados
var resultado = (media < 5) ? "Reprovado" : (media < 7) ? "Recuperação" : "Aprovado";
console.log(resultado)

console.log(resultado)

// print(resultado)

// outro jeito de fazer
// Utilizando switch-case e operadores ternários

const result = (x < 5) ? 1 : (x < 7) ? 2 : 3;

switch(media){
    case 1:
        console.log("Reprovado")
        break;
    case 2:
        console.log("Recuperação")
        break;
    case 3:
        console.log("Aprovado")
        break;
   
}
