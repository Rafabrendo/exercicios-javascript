
function Pessoa(nome, idade){
    this.nome = nome,
    this.idade = idade
}

// console.log(new Pessoa('Rafa', 20))

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é: ${this.nome}`)
}

const rafa = new Pessoa('Rafa', 26)
rafa.falar()

//Com a função call()
//É usada para chamar uma função com um valor específico para o 'this' e com argumentos individuais passados separadamente. Isso permite que você defina explicitamente o valor de 'this' dentro da função quando ela é chamada.
const rafael = {
    genero: 'mascullino'
}

Pessoa.call(rafael, 'nome', 26)

console.log(rafael)

