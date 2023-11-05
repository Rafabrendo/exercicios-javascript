
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas.length)

function media(arrays){
    return (arrays.reduce((acumulador, elemento) => acumulador+elemento, 0) /  notas.length).toFixed(2);//0 é o valor inicial do acumulador.
}
// console.log(media)

//Lembre-se, tem que colocar var ou let, que são declarações de variaveis
var soma = 0;
//vou utilizar o for 
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
console.log(soma)

notas.push(7)

console.log(notas)
console.log(notas.reduce((acumulador, elemento) => acumulador+elemento, 0))
console.log(media(notas))