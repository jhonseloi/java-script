idades = () => {
    const pessoas = [
        {nome: 'Luiz', idade: 62},
        {nome: 'Maria', idade: 23},
        {nome: 'Eduardo', idade: 55},
        {nome: 'Letícia', idade: 19},
        {nome: 'Rosana', idade: 63},
        {nome: 'Wallace', idade: 47}
    ]

    const maisVelho = pessoas.reduce((acumulador, valor) => {
        if (acumulador.idade > valor.idade) {
            console.log(`acumulador: ${acumulador.idade}`)
            console.log(`idade: ${valor.idade}`)
            return acumulador
        }
        return valor
    })
    console.log(maisVelho)
}
idades()
