// Retorno de uma função que está dentro outra função

function criaMultiplicador(multiplicador) {
    return function multi(n) {
        return n * multiplicador 
    }
}

// Todas as variáveis abaixo são argumentos para o parâmetro multiplicador
const duplicador = criaMultiplicador(2)
const triplicador = criaMultiplicador(3)
const quadruplicador = criaMultiplicador(4)

// Chama a função original (criaMultiplicador), que retorna a função interna (retornando n * multiplicador)
console.log(duplicador(2))
console.log(triplicador(2))
console.log(quadruplicador(2))
