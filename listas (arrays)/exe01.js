// 1) Crie um programa que dado um número imprima a sua tabuada.



function tabuada(n){
    numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let a = numeros.map((x) => x * n);
    for (let i = 0; i < a.length; i++) {
        console.log(numeros[i]+ " * " + n+"= "+a[i]);
    }
}



console.log(tabuada(2))
console.log()
console.log(tabuada(3))