//Quase tudo é um objeto
//Se a String é um objeto e ela tem um prototipo, eu posso mudar o objeto do prototipo e atribuir um novo atributo


String.prototype.toPLang = function(){
    return `P ${this}`
}
//Toda vez q issa nova função(função que eu criei) em String for executada, vai retornar o P acrescido de String

console.log('teste'.toPLang()) // P teste