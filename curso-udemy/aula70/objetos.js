objChamada = () => {
    const pessoa = {
        nome: 'Jorge',
        sobrenome: 'Wagner'
    }

    console.log(pessoa.nome)
    console.log(pessoa['sobrenome'])
}
objChamada()

objConstrutor = () => {
    const pessoa = new Object()
    pessoa.nome = 'André'
    pessoa.sobrenome = 'Luiz'

    console.log(pessoa.nome)
    console.log(pessoa.sobrenome)
}
objConstrutor()
