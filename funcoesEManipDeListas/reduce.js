  /*
  É usado para "reduzir" uma matriz a um único valor, aplicando uma função acumuladora a cada elemento da matriz, da esquerda para a direita, para reduzi-la a um único valor.
   */
  
  const lista = [1,2,3,4,5,6,7,8,9,10]

  const somaDeTodosOsNumeros = lista.reduce((previous, curremt)=>{
    console.log(previous, curremt)
    return previous +curremt;
  }, 0);//O segundo argumeto é o valor inicial do acumulador(curremt), neste caso, 0.

  console.log(somaDeTodosOsNumeros)

const soma2 = lista.reduce(function(acumulador, numero){
    return acumulador + numero;
}, 0);

console.log(soma2)

