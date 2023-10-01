// Programa  que calcula o preço de uma viagem
// Três variáveis: preço combustível, gasto médio do carro por KM
//Distância em KM da viagem;

const precoCombustivel  = 5.79;
const kmPorLitros = 12;
const disntanciaEmKm = 1580;

const litrosConsumidos = disntanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log("Valor gasto: ",valorGasto.toFixed(2),"R$");