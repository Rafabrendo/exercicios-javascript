/*map() é usado para transformar cada elemento de uma matriz, aplicando uma função a cada um deles e criando uma nova matriz com os resultados das chamadas
dessa função. */

class Pessoa{
    constructor(name){
        this.name = name
    }
}

const lista = [new Pessoa('Rafa'), new Pessoa('Rute'), new Pessoa('Raquel'), new Pessoa('Rossi'), new Pessoa('Carol'), new Pessoa('Rita')]

console.log(lista) //Aqui vem o objeto Pessoa

//normalmente para pegar só os nomes, pode se fazer assim:

const listaNomes = []

for(let i=0; i < lista.length; i++){
    const element = lista[i];
    listaNomes.push(element.name)
}

console.log(listaNomes)

// Posso usar o metodo map, que facilita isso

const listaNomesV2 = lista.map((elemento, i)=>{
    return `${i} - ${elemento.name}`;
});

//Arrow functions não necessariamente precisam de corpo


console.log('lista 2: ', listaNomesV2)

const callback = (element) => element.name;

const listaNomesV3 = lista.map(callback)

console.log(listaNomesV3)

const listaEmHtml = lista.map((element) => {
    return `
        <li>
            ${element.name}
        </li>
    
    `
});

console.log(listaEmHtml)

/*
[
  '\n        <li>\n            Rafa\n        </li>\n    \n    ',
  '\n        <li>\n            Rute\n        </li>\n    \n    ',
  '\n        <li>\n            Raquel\n        </li>\n    \n    ',
  '\n        <li>\n            Rossi\n        </li>\n    \n    ',
  '\n        <li>\n            Carol\n        </li>\n    \n    ',
  '\n        <li>\n            Rita\n        </li>\n    \n    '
]
 */