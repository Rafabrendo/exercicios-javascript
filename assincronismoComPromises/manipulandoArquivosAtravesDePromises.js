

const fs = require('fs')

const path = require('path') //Pra quando o arquivo está em outra pasta

const filePath = path.resolve(__dirname, 'tarefas.csv') //Posso passar o caminho do arquivo

const promesaDaLeituraDoArquivo = fs.promises.readFile(filePath)

promesaDaLeituraDoArquivo
.then((arquivo)=> arquivo.toString('utf8'))
.then((textoDoArquivo)=> textoDoArquivo.split('\n').slice(1))
.then((linhasSemOCabecaalho)=> linhasSemOCabecaalho.map((linha)=>{
    const[nome, feito] = linha.split(';')
    return{
        nome, 
        feito: feito.trim() === 'true'
    }
    }))
.then((listaDeTarefas)=>console.log(listaDeTarefas))
.catch((error)=> console.log('Deu ruim!', error))
