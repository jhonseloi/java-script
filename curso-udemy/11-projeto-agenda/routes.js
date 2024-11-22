const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const contatoController = require('./src/controllers/contatoController')
const { loginRequired } = require('./src/middlewares/middleware')

// Rotas da home
route.get('/home/', homeController.index)

// Rotas de login
route.get('/home/login/', loginController.index)
route.post('/home/login/register/', loginController.register)
route.post('/home/login/usuario/', loginController.login)
route.get('/home/login/logout/', loginController.logout)

// Rotas de contato
route.get('/home/contato/', loginRequired, contatoController.index)
route.post('/home/contato/register/', loginRequired, contatoController.register)
route.get('/home/contato/:id', loginRequired, contatoController.editIndex)
route.post('/home/contato/edit/:id', loginRequired, contatoController.edit)
route.get('/home/contato/delete/:id', loginRequired, contatoController.delete)

module.exports = route
