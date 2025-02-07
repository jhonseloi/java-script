const elementos = [
    {tag: 'h1', texto: 'Qualquer texto que você quiser:'},
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'p', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
]

const resposta = document.querySelector('.container')
const div = document.createElement('div')

for (i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]
    let tagCriada = document.createElement(tag)
    let textoCriado = document.createTextNode(texto)

    div.appendChild(tagCriada)
    tagCriada.appendChild(textoCriado)
}

resposta.appendChild(div)
