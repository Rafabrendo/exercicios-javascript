//Apenas numeros pares

function tabuadaPares(n){
    numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let a = numeros.map((x) => x * n);
    for (let i = 0; i < a.length; i++) {
        if(numeros[i] % 2 == 0){
            console.log(numeros[i] + " * " + n+"= "+a[i]);
        }
    }

}


tabuadaPares(2)