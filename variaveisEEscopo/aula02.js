//Hoisting

teste();

function teste(){
    console.log('teste');
}

console.log(var1)
//Apenas a variavel por elevada, sem a atribuição. E por isso dá undefined.
var var1 = 'rafa'; 

console.log(var1)

teste2();

//Nesse caso o hoisting vai funcionar de forma diferente. Ele vai primeiro manda a variavel pro topo, e não a atribuição. Por isso, se eu chamar essa variavel antes da declaração, vai dar erro.
var teste1 = function(){
    console.log('teste1');
}

//Nesse caso ele, interpretador, elevou a função, e por isso ela pode ser chamada antes da sua declaração
function teste2(){
    console.log('teste2')
}

teste1();