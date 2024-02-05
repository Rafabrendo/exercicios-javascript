
//First Class Function
//Higher Order Functions

//Uma "first-class function" (função de primeira classe) em JavaScript significa que as funções são tratadas como qualquer outro valor. Isso implica que as funções podem ser atribuídas a varáveis, passadas como argumentos para outras funções, retornadas por outras funções e armazenadas em estruturas de dados.
/**
1. Atriubuição a variavéis: Pode-se atribuir uma função a uma variável como qualquer outro valor.
2. Passagem de funções como argumentos
3. Retorno de funções de outras funções
4. Armazenamento em estruturas de dados: Pode-se armazenar funções em arrays, objetos e outras estruturas de dados.
 */



//Posso atribuir uma função a uma variavel
function falarMeuNome(){
    //return 'Meu nome é Rafael'
    console.log('Meu nome é Rafael')

}

const referenciaNova = falarMeuNome

// referenciaNova()
console.log(referenciaNova())


//Passando para uma função
function falarMeuNomeCompleto(nome){
    nome()
    console.log('C. R')

    return nome //retornando a função
}

falarMeuNomeCompleto(falarMeuNome)
falarMeuNomeCompleto(falarMeuNome)()//Essa função passa uma função como argumento q, por sua vez, retorna uma função

//função armazenada

const minhaFuncao = function(){
    console.log("Esta é uma função de primeira classe.")
}

const novaFuncao = criarFuncao();
novaFuncao()

//Vou utilizar do Hoisting(É um comportamento do JS que eleva as variaveis e funções ao topo do escopo)

function criarFuncao(){
    return function(){
        console.log("Esta é uma função retornada.")
    }
}

const arrayDeFuncoes = [minhaFuncao, novaFuncao];
arrayDeFuncoes.forEach(funcao => funcao());
 
/** 
Funçõoes de order superior, ou "highr-order functions", são funções que operam em outras funções, seja tornando uma ou mais funções como argumentos, ou retornando uma função como resultado.
*/