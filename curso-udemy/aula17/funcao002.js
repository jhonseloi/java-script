function soma(x, y) {
    const resultado = x + y
    return resultado
}

const resultado = soma(2, 2) // Dentro e fora da função podem existir duas variáveis (let ou const) com o mesmo nome, pois o corpo da função é um espaço à parte do restante do código
console.log(resultado)
const res1 = soma() // Parâmetro vazio que é chamado por uma operação aritmética resulta em NaN
console.log(res1)
const res2 = soma('Jhons ', 'Eloi') // Parâmetro com soma entre strings realiza concatenação
console.log(res2)
