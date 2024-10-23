const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e))

const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(meuMiddleware)
app.use(routes)

app.on('pronto', () => {
    app.listen(1024, () => {
        console.log('Servidor executando na porta 1024.')
        console.log('Acessar http://localhost:1024/')
    })
})
