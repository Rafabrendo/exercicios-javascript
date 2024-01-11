class Pessoa{
    nome;
    idade;

    //Quando eu declaro o metodo dentro da classe, eu não preciso da sintaxe Function
    descrever(params) {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const rafa = new Pessoa(); //É uma instância 

rafa.nome = "Rafael Brendo"
rafa.idade = 25;

console.log(rafa)
rafa.descrever();

// iterando sobre o objeto
for(const propriedade in rafa){
    console.log(`${propriedade}:  ${rafa[propriedade]}`);
};