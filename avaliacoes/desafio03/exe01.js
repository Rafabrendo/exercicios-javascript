const {calcularPorcentnagem, valorDoBeneficio} = require('./funcoes-auxiliares');

const salarioBruto = 2500.00

let salario = salarioBruto - calcularPorcentnagem(salarioBruto) + valorDoBeneficio

console.log(salario)