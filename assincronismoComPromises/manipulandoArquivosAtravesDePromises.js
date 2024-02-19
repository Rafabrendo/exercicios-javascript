
/**
    fs -> É um módulo embutido(parte da biblioteca padrão) em Node.js que fornece funcionalidades para interagir com o sistema de arquivos do SO.
    Ele permite que você realize uma variedade de operações de entrada e saída relacionadas a arquivos, como leitira, gravação, renomeação, exclusão, entre outros.

    Ele precisa ser importado:
    const fs = require('fs')

    Utilizando com promises

    fs.promises

 */

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
