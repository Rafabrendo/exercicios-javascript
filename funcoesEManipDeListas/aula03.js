//Closures ou fechamentos

/*
São um conceito fundamental em linguagens de programação funcional, incluindo JavaScript. Um fechamento ocorre quando uma função interna tem acesso às variáveis de uma função externa, mesmo após a função externa ter retornado.

Em JS, os closures são criados sempre que uma função é definida dentro de outra função. A função interna tem acesso não apenas às suas próprias variáveis e parâmetros, mas também às variáveis e parâmetros da função externa.
 */

//No momento que essa função foi criada, ela guarda os valores 
function soma(x){
//Vai funcionar também com Arrow function
    return function(y){
        return x+y;
    }
}

console.log(soma(10)(20))

//Nesse  caso, ela vai guardar os valores
const somaParcial = soma(10)

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))

function exterior(){
    var mensagem = 'Olá, ';

    function interior(nome){
        console.log(mensagem + nome);
    }

    return interior;
}

var saudacao = exterior(); // A função interior é retornada e atribuida a 'saudacao'
saudacao('Rafa'); // Saída: 'Olá, Rafa'

