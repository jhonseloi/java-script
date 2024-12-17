import { Router } from 'express'
import userController from '../controllers/UserController'

const router = new Router()

router.post('/', userController.store)
router.get('/', userController.index)
router.get('/:id', userController.show)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)
/*
index -> lista todos os usuários -> GET;
store/create -> cria um novo usuário -> POST;
delete -> apaga um usuário -> DELETE;
show -> mostra um usuário -> GET;
update -> atualiza um usuário -> PATCH ou PUT.
*/

export default router
