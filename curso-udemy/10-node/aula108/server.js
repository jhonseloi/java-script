const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(1024, () => {
    console.log('Servidor executando na porta 1024.')
    console.log('Acessar http://localhost:1024/')
})
