
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas.length)

const media = notas.reduce((acumulador, elemento) => acumulador+elemento, 0) / notas.length ;//0 é o valor inicial do acumulador.

console.log(media)