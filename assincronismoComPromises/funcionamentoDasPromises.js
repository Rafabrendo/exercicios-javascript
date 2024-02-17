
//Se der certo, vai dar o resolve, se der errado vai dar reject()

const promessaDeUmnumeroQualquer = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000)

})
//É a mesma estrutura do try, catch, finally

console.log('Vai filhão!')

//Callbacks
promessaDeUmnumeroQualquer
    .then((value)=>{
        console.log(value)
        return value + 10
    })
    .then((value)=>{
        console.log(value)
    })
    .catch((error) =>{
        console.error(error)
    })
    .finally(()=>{
        console.log('Finalizou!')
    })


