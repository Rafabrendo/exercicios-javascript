/*A filtragem geralmente se refere ao processo de selecionar determinados elementos de uma matriz com base em critérios específicos. Isso pode ser alcançado usando o método 'filter()', disponível para arrays.*/ 

//predicate: (value: number, index: number, array: number[]) => value is number, thisArg?: any): number[] (+1 overload)

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaDeNumerosPares = lista.filter((element, i, listRef) => {
    return (element % 2 === 0)
}); //Estou criando uma nova lista, e isso difere do forEach porque o forEach só percorre.

console.log(listaDeNumerosPares)

//outro jeito

const numeros = [1,2,3,4,5,6];

const numerosPares = numeros.filter(function(numero){
    return numero % 2 === 0;
});

console.log(numerosPares)



