// 1) Crie um programa que dado um número imprima a sua tabuada.




function tabuada(n){
    numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return numeros.map((x) => x * n);
}

console.log(tabuada(2))
console.log(tabuada(3))