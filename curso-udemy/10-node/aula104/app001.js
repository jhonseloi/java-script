const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modulos/escrever')

const pessoas = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'José' },
    { nome: 'Francisca' },
]
const json = JSON.stringify(pessoas, '', 4)
escreve(caminhoArquivo, json)
