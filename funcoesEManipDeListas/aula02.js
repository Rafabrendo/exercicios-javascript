//Declaração explicita e arrow function

//A diferença entre function e arrow function é o isolamento do código, cria um bloco de código.



//Function
function funcao1(){
    console.log(this)
}

//Arrow function
const funcao2 = () =>{
    console.log(this)
}

//Arrow function
const soma = (a, b) => a + b;

const rafa = {
    nome: 'Rafa',
    funcao1,
    funcao2
}

rafa.funcao1()
rafa.funcao2()