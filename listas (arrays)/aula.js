/*Em JS, uma lista é uma coleção de valores ordenados que poodem ser armazenados em uma variável. Essas listas são frequentemente implementadas usando arrays, que são objetos embutidos no JS.

Em JS, arrays são objetos especiais com propriedades e métodos específicos para listas ordenadas. No entanto, não sãi a melhor escolha quando as chaves não são números inteiros sequenciais, nesse caso, objetos podem ser mais apropriados. */

const alunos = ['Rafa', 'Brendo', 'Costa']

console.log(alunos)
console.log(alunos[0])

/*
Iteração: Pode-se percorrer os elementos de um array usando loops, como o 'for' ou métodos de iteração, como 'forEach()', 'map()', 'fillter()', 'reduce()' e outros. */

alunos[3] = 'Rute';
console.log(alunos)

alunos.forEach(function(alunos){
    console.log(alunos);
});

alunos.push('Rafildes')

alunos.forEach(function(alunos){
    console.log(alunos)
});

const removed = alunos.pop(); //remove e retorna o último elemento
console.log(removed)
alunos.forEach(function(alunos){
    console.log(alunos)
});

console.log('\n'+removed)

const removePrimeiro = alunos.shift();
console.log('\n'+removePrimeiro);

console.log(alunos)

//.splice()
alunos.splice(0, 0, 'Raf@')

console.log(alunos.length)