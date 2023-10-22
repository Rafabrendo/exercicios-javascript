/**Os objetos são coleções de pares chave-valor, onde as chaves são strings (ou símbolos) que representam propriedades e os valores podem ser qualquer tipo de dado, incluindo números, strings, funções e até mesmo outros objetos. Aqui estão algumas formas de criar e trabalhar com objetos em JavaScript:

    - Objeto Literal
    - Construtor de Objeto -> Object()
    - Método Shorthand -> Se a variável tiver o mesmo nome da propriedade, você pode usar uma sintaxe mais curta
    - Acessando Propriedades -> Você pode acessar as propriedades de um objeto usando a notação de ponto ou colchetes
    - Adicionar e Remover Propriedades -> Você pode adicionar ou remover propriedades de um objeto dinamicamente
    - Iterando por Propriedades -> Você pode iterar pelas propriedades de um objeto usando for...in
    - Objetos Aninhados -> Você pode ter objetos dentro de objetos para criar estruturas de dados complexas
*/
//Objeto Literal{}

//Coleção dinâmica de dados  //Chave, valor
const pessoa = {
    nomeCompleto: 'Rafael Brendo',
    idade: 25,

    descrever: function (){
        console.log(`Meu nome é ${this.nomeCompleto}, e minha idade é ${this.idade}`);
    }
};

console.log(pessoa.nomeCompleto);
console.log(pessoa.idade);
console.log(pessoa);

//incrementando // adicionando propriedade ao objeto.
pessoa.altura = 1.79;
console.log(pessoa.altura);
console.log(pessoa)


delete pessoa.altura;
console.log(pessoa)

pessoa.descrever();

//Sobrescrevendo o método
pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nomeCompleto}`)
}

const atributo = 'idade'; //é uma string, que tem o valor 'idade'

console.log(pessoa['idade'])
console.log(pessoa[atributo])

pessoa['nomeCompleto'] = 'teste';
console.log(pessoa.nomeCompleto)
pessoa.nomeCompleto = 'rafa';
console.log(pessoa.nomeCompleto)
