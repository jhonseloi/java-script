import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './assets/css/style.css'
import Login from './modules/Login'
import Contato from './modules/Contato'

const cadastro = new Login('.form-cadastro')
const login = new Login('.form-login')
cadastro.init()
login.init()

const editarContato = new Contato('.form-editarContato')
const salvarContato = new Contato('.form-salvarContato')
editarContato.init()
salvarContato.init()
