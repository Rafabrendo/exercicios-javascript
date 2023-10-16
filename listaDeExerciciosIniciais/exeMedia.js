/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação consforme a tabela abaixo.

média = (nota01 + nota02 + nota03) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre; 
*/

const nota01 = 5.2;
const nota02 = 7.5;
const nota03 = 5.4;

const mediaAluno = (nota01 + nota02 + nota03) / 3;

console.log("Primeiro aluno teve média :" + mediaAluno.toFixed(2))

let resultado;
if(mediaAluno < 5){
    resultado = 'Reprovado'
} 
else if(mediaAluno < 7){
    resultado = 'Recuperação'
}
else{
    resultado = 'Parabéns fdp, passou!'
}

console.log(resultado)
