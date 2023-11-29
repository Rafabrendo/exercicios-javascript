/*  
    Tipos de dados:

    boolean
    null
    undefined
    number
    string
    synbol
 */

 //object
 //obs.: JS é fracamento tipado

 let x = 10;
 x = 'texto';

//Wrapper

true, false //tipo primitivo, imutavel

new Boolean(true) //tipo objeto, mutavel

//coerção de dados
console.log(10+'10');

console.log(10-'10');

console.log(10-'texto');//NaN(Not a Number)]

console.log(10 == '10') //true
console.log(10 === '10') //false
console.log(10 != '10')  //false

const nome = ''; //O vazio é equivalente ao falso
if (nome){
    //!nome pra preencher
    console.log('preenchido')
}

console.log('testando o vazio:')
console.log('') //vazio ou false
console.log(!'') //negação
console.log(!!'') //negação da negação
console.log(0) //0 ou false
console.log(!0) //true
console.log(!!0)//false
console.log(!!'true') //ta verificando se tem valor. negação da negação
console.log(!!'false')//true. Tá verificando se tem valor

// null -> Representa uma ausência de valor ou a não atribuição de um valor a uma variável ou propriedade.

const z = null;
let y;

console.log(z);//null
console.log(y);//undefined

const j = {nome: 'rafa'}
j.mora = undefined;
console.log(j.nome)
console.log(j.idade)
console.log(j.mora)


const q = {nome: undefined};
console.log(JSON.stringify(q));

