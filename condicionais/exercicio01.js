// Faça um programa para calcular o valor de uma viagem.
// você terá 5 variáveis. Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da gasolina
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Etanol';
// obs.: As String são definidas com aspas duplas, simples ou crase.
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros; 


let valorGasto; //Variavel global 
if(tipoCombustivel === 'Etanol'){
  valorGasto = litrosConsumidos * precoEtanol;
} else {
  valorGasto = litrosConsumidos * precoGasolina;
}

console.log("Preço da Gasolina = 5.7L \n"+
            "Preço do Etanol = 5.2L \n");




console.log(valorGasto.toFixed(2));

