// Programa  que calcula o preço de uma viagem
// Três variáveis: preço combustível, gasto médio do carro por KM
//Distância em KM da viagem;

let precoCombustivel = 5; //5 reais o litro
let gastoMedio = 20; //ou seja, faz 20km com 1 Litro
let distanciaViagem = 200;
let preCombusParaViagem = distanciaViagem / gastoMedio * precoCombustivel;
console.log("Gasto com combustivel para encher o tanque para a viagem:",preCombusParaViagem);