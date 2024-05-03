dobrar = () => {
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
    const numerosEmDobro = numeros.map(valor => valor * 2)
    console.log(numerosEmDobro)
}
dobrar()

pessoas = () => {
    /* PARA CADA ELEMENTO:
    ** Retorne apenas uma string com o nome da pessoa
    ** Remova apenas a chave "nome" do objeto
    ** Adicione uma chave id para objeto
    */
    const p = [
        {nome: 'Luiz', idade: 62},
        {nome: 'Maria', idade: 23},
        {nome: 'Eduardo', idade: 55},
        {nome: 'Letícia', idade: 19},
        {nome: 'Rosana', idade: 32},
        {nome: 'Wallace', idade: 47}
    ]

    const nomes = p.map(obj => obj.nome)
    console.log(nomes)

    const idades = p.map(obj => ({idade: obj.idade}))
    console.log(idades)

    const ids = p.map((obj, indice) => {
        const novoObj = {...obj}
        novoObj.id = Math.round(Math.random() * 100 / (indice + 1))
        return novoObj
    })
    console.log(ids)
}
pessoas()
