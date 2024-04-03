/**
Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.

Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios 
O salário a ser transferudo é calculado da seguinte maneira:

    O valor bruto do salário - percentual de imposto mediante a faixa salarial + adicionaal dos benefícios

    Para calcular o percential de imposto segue as aliquotas:
        De R$ 0.00 a R$ 1100.00 = 5.00%
        De R$ 1100.01 a R$ 2500.00 = 10.00%
        Maior que R$ 2500.00 = 15.00%

 */


 function calcularPorcentnagem(salarioBruto){
    return (salarioBruto <= 1100.00) ? salarioBruto*0.05 : (salarioBruto <= 2500.00) ? salarioBruto*0.1 : salarioBruto*0.15;
 }

 const valorDoBeneficio = 50.00

// console.log(calcularPorcentnagem(10000))











module.exports = {calcularPorcentnagem, valorDoBeneficio};