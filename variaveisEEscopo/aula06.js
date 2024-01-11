/*  
    Tipos de dados:

    boolean
    null
    undefined
    -number
    -string
    -synbol
 
 */

//object

// +Infinity -Infinity e NaN((Not a Number)Tbm é number!)
// Double Precision 64-bit binary format IEEE 754
//obs.: O padrão acima pode ter falhas de arredondamento
//Se precisar de precisões melhores, utilize o Decimal

const x = {nome: null};

console.log(JSON.stringify(x))

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));

const numero1 = [1, 2, 3, 4];
const numero2 = [5, 6, 7, 8];

//Number values represent floating-point numbers like 37 or -9.25
console.log(typeof(NaN)) //number
console.log(typeof(+Infinity)) //Number
console.log(typeof(-Infinity)) //number

"texto"
'texto'
`texto` //-> Templates literais

console.log("<div id=\"10\">teste<div>") //Nesse caso as aspas serão consideradas como texto
console.log('<div id="10">teste<div>') //
