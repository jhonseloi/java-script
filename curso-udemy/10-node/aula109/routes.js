const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeControllers')
const contatoController = require('./src/controllers/contatoControllers')

// Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.enviaForm)

// Rotas da página contato
route.get('/contato', contatoController.paginaContato)

module.exports = route
