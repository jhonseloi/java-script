import { Router } from 'express'
import userController from '../controllers/UserController'
import loginRequired from '../middlewares/loginRequired'

const router = new Router()

/* OBS: Não deveriam existir em uma aplicação real por motivos de segurança
router.get('/', loginRequired, userController.index) // lista usuários
router.get('/:id', userController.show) // lista usuário
*/
router.post('/', loginRequired, userController.store)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

/*
index -> lista todos os usuários -> GET;
store/create -> cria um novo usuário -> POST;
delete -> apaga um usuário -> DELETE;
show -> mostra um usuário -> GET;
update -> atualiza um usuário -> PATCH ou PUT.
*/

export default router
