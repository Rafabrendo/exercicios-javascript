

//Em JS, o jeito q se faz herança é através dos protótipos

//prototipo
const pessoa ={
    genero: 'masculino'
}

const rafa = {
    nome: 'Rafael',
    idade: 26,
    __proto__: pessoa
}

console.log(rafa.genero)

//Sempre que se ver uma função começando com letra maiuscula, significa que ela é construtora
function Pessoa(nome, idade){
    this.nome = nome,
    this.idade = idade
}

//Fazendo um metodo usando o prototype
Pessoa.prototype.falar = function(){
    console.log(`Meu nome é: ${this.nome}`)
}

//Posso invocar essa função pelo operador new(), ex.:
const rafa_v2 = new Pessoa('Rafa', 25)

console.log(rafa_v2)

//Em js o conceito de classe é diferente, na verdade o q se tem são funções construtores e prototipos

//Metodo
rafa_v2.falar()

class Pessoa_V2{

    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    falar(){
        console.log(`Meu nome é: ${this.nome}`)
    }


}

const rafa_v3 = new Pessoa_V2('Rafildes', 27)

console.log(rafa_v3)
