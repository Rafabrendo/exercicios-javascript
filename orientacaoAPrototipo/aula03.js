//Formas de criação de objetos Literais com Prototipos

const pessoa = {
    genero: 'Masculino'
}

const rafa = {
    nome: 'Rafael',
    __proto__: pessoa
}

//Creates an object that has the specified prototype or that has null prototype.
//É um método em JS que é usado para criar um novo objeto, utilizando um objeto existente como protótipo desse novo objeto. Esse método faz parte do paradigma de herança baseada em protótipo em JS.
Object.create(pessoa)

const RafaV2 = Object.create(pessoa)

RafaV2.nome = 'Rafael B'

console.log(RafaV2)
console.log(RafaV2.genero)

console.log(RafaV2.nome)

pessoa.__proto__ //Atraves de objetos instanciados a gente usa o proto, e atraves de funções construtoras se usa o prototypee

//Object.getPrototypeOf()

const texto = 'masculino'
console.log(texto.__proto__) //Todos os objetos em JS tem prototypo, inclusive as strings