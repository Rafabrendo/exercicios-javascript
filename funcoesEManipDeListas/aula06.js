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


lista.forEach(cb)
