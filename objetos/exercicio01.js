/*
1- Crie uma classe para representar carros.
   Os carros possuem uma marca, uma cor  e um gasto médio de combustível por Kilômetro rodado. Crie um método que dado a quantidade de quilômetros e o preço do combustível, nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    gastoDoPercurso(litros){
        return this.gastoMedioPorKm * litros;
    }
}

car1 = new Carro("Fiat", "Azul", 17.2)
console.log(car1.gastoDoPercurso(10))