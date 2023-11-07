//Funções auxiliares

function get(){
    return 10;
}

function print(texto){
    console.log(texto)
}

//é como se eu tivesse definindo um objeto
//Objeto literal, que vai ter dois atributos, que nesse caso são funções
// module.exports = {
//     get: get, 
//     print: print
//     };

//Poderia fazer assim também:
module.exports.get = get;

//Posso fazer assim também:
module.exports = {get, print};