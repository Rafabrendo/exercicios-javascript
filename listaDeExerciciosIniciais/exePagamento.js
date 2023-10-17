/* 
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento e efetuar o cálculo adequado.

Código condição de pagamento:
- À vista Débito, reebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const produto = 30;

console.log("- À vista Débito, reebe 10% de desconto\n"
            + "- À vista no Dinheiro ou PIX, recebe 15% de desconto\n"
            + "- Em duas vezes, preço normal de etiqueta sem juros\n"
            + "- Acima de duas vezes, preço normal de etiqueta mais juros de 10%");



function condicao(valor){
    if(valor === "Débito"){
        return produto * 0.9;
    } 
    else if(valor === "Dinheiro"){
        return produto * 0.85;
    } else if(valor === "2x"){
        return produto;
    }
    return produto * 1.1;

}

console.log(condicao(""))