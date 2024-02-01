
//First Class Function
//Higher Order Functions


//Posso atribuir uma função a uma variavel
function falarMeuNome(){
    return 'Meu nome é Rafael'
}

const referenciaNova = falarMeuNome

// referenciaNova()
console.log(referenciaNova())


//Passando para uma função
function falarMeuNomeCompleto(nome){
    
    console.log( nome() , 'C. R')
}

falarMeuNomeCompleto(falarMeuNome)