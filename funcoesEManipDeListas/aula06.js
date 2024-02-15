//Manipulação de listas

//Primeira das funções para manipulação de listas
// foreach()

const lista = [1,2,3,4,5,6,7,8,9,10]

const cb = (value, i, lis) =>{
    console.log(value + i)
}

lista.forEach((value, i, listRef) => {
    console.log(value, i, listRef)
    console.log()
    console.log(value+i)
    console.log()
})


lista.forEach(cb) //Nesse caso, não se tem uma função anonima e sim uma função que já foi declarada.

//forEach() é um dos métodos mais comuns disponíveis para iterar sobre elementos de um array em JS. Ele executa uma função de callback uma vez para cada elemento no array, em ordem, e aceita três argumentos: o elemento atual, p índice do elemento e o próprio array. No entanto, você geralmente só precisa do primeiro parâmetro, o elemento atual.

console.log()

const frutas = ["Maça", "Banana", "Morango", "Uva"]

frutas.forEach(function(fruta){
    console.log(fruta);
});
//Esse código ira iterar sobre cada elemento do array 'frutas' e imprimir cada elemento no console.

//utilizando arrow functions
frutas.forEach(fruta => console.log(fruta))

//explicação: tem-se uma função anonima, no caso 'fruta' e cada elemento do array, que está sendo iterado, é passado para essa função anonima e consequentemente retornado.