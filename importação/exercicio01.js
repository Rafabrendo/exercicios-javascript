/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maiuor número sorteado. */

var alunos = {
    0: '',
    1: '',
    2: '',
    3: ''};

var tamanhoDict = Object.keys(alunos).length;

for (let i = 0; i < tamanhoDict; i++) {
    let variavel = Math.floor(Math.random() * 100);
    alunos[i] = variavel
        
}

var maiorValor = parseInt(Object.values(alunos));

var maiorValor2 = Math.max(maiorValor)

console.log(alunos, maiorValor2)


