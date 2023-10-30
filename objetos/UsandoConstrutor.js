class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    //Quando eu declaro o metodo dentro da classe, eu não preciso da sintaxe Function
    descrever(params) {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e meu ano de nascimento é ${this.anoDeNascimento}`)
    }




}

const rafa = new Pessoa('Rafael Brendo', 25); //É uma instância 

// rafa.nome = "Rafael Brendo"
// rafa.idade = 25;

console.log(rafa)
rafa.descrever();
console.log();