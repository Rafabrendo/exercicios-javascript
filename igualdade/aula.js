const numero = 2;

const numeroPar = (numero % 2) == '0';
// == igualdade, vai testar a igualdade, ignorando o tipo

const numeroPar2 = (numero % 2) === '0';
// === igualdade, vai testar a igualdade, porém não vai ignorar o tipo

console.log(numeroPar);

console.log(numeroPar2);