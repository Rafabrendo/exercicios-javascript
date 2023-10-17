/*
O IMC - Indice de massa corporal é um critério da organização mundial de saude para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC
IMC = peso / (altura * altura)

IMC em adultos , condição:
- Abaixo de 18.5   ---   Abaixo do peso
- Entre 18.5 e 25  ---   Peso normal;
- Entre 25 e 30    ---   Acima do peso;
- Entre 30 e 40    ---   Obeso;
- Acima de 40      ---   Obesidade Grave;
*/ 

//var -> Declara uma varável, opcionalmente, inicializando-a com um valor.
//let -> Declara uma varável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
//const -> Declara uma constante de escopo de bloco, apenas de leitura.


var peso = 150.5;
var altura = 1.77;
const imc = (peso / Math.pow(altura, 2)).toFixed(2);


function condicao(imc){
    if (imc < 18.5) {
        return "Abaixo do peso"
        
    } else if (imc < 25) {
        return "Peso normal"
    } else if (imc < 30){
        return "Acima do peso"
    } else if (imc < 40){
        return "Obeso"
    } return "Obesidade grave"
    
}

// let numero = Math.pow(2, 2);
console.log(condicao(imc))
