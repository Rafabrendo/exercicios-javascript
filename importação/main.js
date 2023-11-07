//Tô usando a função require para importar o objeto
// const funcoes = require('./aula');

//com o uso do Destructuring
const {get, print} = require('./aula');


// console.log(funcoes)

// console.log(funcoes.get());

//Exemplo de Object Destructuring

const pessoa = {
    nome: 'Rafa'
}

//Passei o atributo nome: 'Rafa' de pessoa para a constante nome
//const { nome } = pessoa;

//console.log(nome)

const nome = pessoa.nome; //É a mesma coisa do código de cima
console.log(nome)

print(get());

console.log(get())