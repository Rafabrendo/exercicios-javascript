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

    gastoDoPercurso(km, precoCombustivel){
        return (this.gastoMedioPorKm * km * precoCombustivel).toFixed(2);
    }
}

car1 = new Carro("Fiat", "Azul", 1/12)
console.log(car1.gastoDoPercurso(100, 3.5))