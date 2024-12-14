import Aluno from '../models/Aluno'

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: 'Gustavo',
            sobrenome: 'Borges',
            email: 'gugabor@gmail.com',
            idade: 30,
            peso: 90,
            altura: 1.80
        })
        res.json(novoAluno)
    }
}

export default new HomeController()
