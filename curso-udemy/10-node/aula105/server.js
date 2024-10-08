const express = require('express')
const app = express()

/*
        Criar  Ler   Atualizar Apagar
CRUD -> CREAT, READ, UPDATE,   DELETE
        POST   GET   PUT       DELETE
*/

// http://meusite.com/ <- GET -> Entrega a página inicial 
// http://meusite.com/sobre <- GET -> Entrega a página /sobre
// http://meusite.com/contato <- GET -> Entrega a página /contato

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome"> 
        <button>Enviar</button> 
        </form>`
    )
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário')
})

app.listen(1024, () => {
    console.log('Acessar http://localhost:1024/')
    console.log('Servidor executando na porta 1024.')
})
