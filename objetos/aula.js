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
const rafa = {
    nomeCompleto: 'Rafael Brendo',
    idade: 25
};

console.log(rafa.nomeCompleto);
console.log(rafa.idade);
console.log(rafa);

//incrementando // adicionando propriedade ao objeto.
rafa.altura = 1.79;
console.log(rafa.altura);
console.log(rafa)


delete rafa.altura;
console.log(rafa)