const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const ler = require('./modulos/ler')

async function leArquivo(caminho) {
    const dados = await ler(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(valor => console.log(valor.nome))
}

leArquivo(caminhoArquivo)