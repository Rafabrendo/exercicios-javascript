//Menção honrosa aos callbacks
/*
Os callbacks desempenham um papel crucial e JavaScript, especialmente em operações assícronas e eventos. Um callback é simplesmente uma função qque é passada como argumento para outra função e que é chamada em algum momento posterior, geralmente após a conclusão de uma tarefa assícrona ou em resposta a um evento.
 */

function adicao(x, y){
    return x +y;
}

function multiplicacao(x, y){
    return x * y;
}

function divisao(x, y){
    return x / y;
}

function subtracao(x, y){
    return x * y;
}



function calculadora(x, operacao, y){
    console.log(operacao(x, y))
}

calculadora(10, adicao, 20)
calculadora(10, multiplicacao, 20)

document.getElementById('btn1').addEventListener('click', () =>{
    console.log('Clicou! ')
})