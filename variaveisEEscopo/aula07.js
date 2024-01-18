/*  
    Tipos de dados:

    boolean
    null
    undefined
    -number
    -string
    -symbol
 
 */

//object -> São coleções de pares chave-valor, onde as chaves são
//strings(ou símbolos) que representam propriedades e os valores podem
//ser qualquer tipo de dados. Obs.: Até mesmo outros objetos

//Declarando um objeto
//const x = {}

const x = {
    nome: "Rafael",
    idade: 30,
    "Teste teste": 10
}
//obs.: Posso usar "" para declarar chaves, daí eu consigo colocar espaço

console.log(typeof x) //object

console.log(x)

x.sobrenome = 'B'

console.log(x)

console.log(x.nome)
console.log(x['nome'])

x['nome'] = 'Rafa' //Reatribuindo valor

console.log(x.nome)

//Posso atribuir funções a propriedades do objetos
//POsso fazer assim (Construtor de objeto)
x.falar = function(){
    console.log('Olá')
}

x.falar()

//Objeto Literal
const pessoa = {
    nome: "Rafa",
    idade: "26",
    falar: function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const y = pessoa.falar

pessoa.falar()

y() //Nesse caso deu undefined porque perdeu o contexto
