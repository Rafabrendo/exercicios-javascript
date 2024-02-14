//Invocação direta, call, apply e operador new

function teste(){
    console.log('Teste')
}

teste()

//A função é um objeto, e como objeto ela tem métodos

//Métodos 'call()' e 'apply()'
/*Ambos os métodos permitem que você chame uma função especificando o valor de this e passando argumentos para a função.
- A diferença principal entre eles está na forma como os argumentos são passados:
    * call(thisArg, arg1, arg2, ...) -> Os argumentos são passados separadamente
    * apply(thisArg, [arg1, arg2, ...]) -> Os argumentos são passados como um array


*/ 

const pessoa = {
    nome: 'Rafa',
    idade: 40
    
}

function gritar(prefixo, prefixo2){
    console.log(prefixo, this.nome)
    if (prefixo2 != null){
        console.log(prefixo2, this.nome)
    }
    
}

//Com o apply eu consigo colocar a função dentro do contexto do objeto
gritar.apply(pessoa, ['Olaaaaa'])

gritar.call(pessoa, 'Olaaaa', 'tudo bem, ')

//Operador new -> é usado para criar uma nova instancia de um objeto de uma função
//Quando se usa new, uma nova instância do objeto é criada e o valor de 'this' dentro da função se refere a essa nova instância.

//outro exemplo de call()

function saudacao(){
    console.log("Olá, "+this.nome);
}

const pessoa2 = { nome: 'Maria'};

saudacao.call(pessoa2); //Olá, Maria
