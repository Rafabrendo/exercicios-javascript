const entradas = [5,50,10,98,23];
let i = 0;

function gets(){
    let valor = entradas[i]
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};
