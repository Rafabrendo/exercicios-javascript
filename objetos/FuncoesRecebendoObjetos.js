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

//Uma função que está recebendo objetos
function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if( p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const rafa = new Pessoa('Rafael Brendo', 25)
const Ana = new Pessoa("Ana B.", 20)

compararPessoas(rafa, Ana)