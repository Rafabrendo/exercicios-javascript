/*  
    Tipos de dados:

    boolean
    null
    undefined
    -number
    -string
    -symbol
 
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
console.log(typeof(NaN)) //Number obs.: Em JS
console.log(typeof(+Infinity)) //Number
console.log(typeof(-Infinity)) //number

// "texto"
// 'texto'
// `texto` //-> Templates literais

console.log("<div id=\"10\">teste<div>") //Nesse caso as aspas serão consideradas como texto
console.log('<div id="10">teste<div>') //

const id = 20;

console.log('<div id="'+id+'">teste<div>');

console.log('<div id="'+id+'">\n\tteste\n<div>');


console.log(`<div id="${id}">teste<div>`);

console.log(`
    <div id="${id}">
        teste
    <div>
`);

//Cada Symbol é unico
const x_v2 = Symbol('10');
const y_v2 = Symbol('10');

console.log(x_v2 === y_v2) //false

const z = x_v2;

console.log(x_v2 === z) //vai dar true porque está comparando a mesma instancia.

//É util para criar identificadores de objetos
