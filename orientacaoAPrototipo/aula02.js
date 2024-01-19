const pessoa = {
    idade: 18
}

const rafa = {
    nome: 'Rafa',
    idade: 27,
    __proto__: pessoa
}
//Como ele faz para achar a idade?! Ele vai percorrer todo o objeto Rafa, se não achar o atributo, ele vai para o objeto pessoa. Se ele achar primeiro em rafa, ele retorna o valor

console.log(rafa.idade)

// sobrescrevendo
//Em js é a capacidade de uma função ou método em uma classe de substituir ou "sobrescrever" a implementação de uma função ou método em uma classe pai(protótipo). Isso é comumente usado em herança, onde uma classe filha herda métodos de uma classe pai, mas pode fornecer sua própria implementação para esse métodos.

//Classe pai(prototipo)
function Animal(nome){
    this.nome = nome;
}

//Método do protótipo da classe pai
Animal.prototype.som = function(){
    console.log("Fazendo algum som...");
};

//Classe filha que herda de Animal
function Gato(nome){
    Animal.call(this, nome)
}

//Herda do protótipo de Animal
Gato.prototype = Object.create(Animal.prototype);

//Sobrescreve o método som
Gato.prototype.som = function(){
    console.log(this.nome + " faz miau!");
};

//Cria uma instância de Gato
let meuGato = new Gato("Whiskers");

console.log(meuGato.nome);

meuGato.som()

//Tem o sombreamento (Shadowing)
