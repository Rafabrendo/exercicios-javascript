/*
Expressões 'await' são permitidas apenas em funções assíncronas e nos níveis superiores de module.ts 
*/
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

// const promesaDaLeituraDoArquivo = fs.promises.readFile(filePath)

async function buscarArquivo(){
    try {
        const arquivo = await fs.promises.readFile(filePath)
        //Vai ler o arquivo e quando terminar, vai colocar o resultado dentro da variável
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)
    } catch (error) {
        console.log(error)
    } finally{
        console.log('Finalizou!')
    }

}

buscarArquivo()


