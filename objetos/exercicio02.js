/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/

class Pessoa{

    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }

    IMC(){
        return (this.peso / Math.pow(this.altura, 2)).toFixed(2)
    }

    toString(){
        console.log(`Eu sou o ${this.nome}, peso ${this.peso}kg, tenho ${this.altura} e meu imc é de ${this.IMC()}`)
    }

}

Jose = new Pessoa("José", 70, 1.75)
// console.log(Jose.toString())
Jose.toString()