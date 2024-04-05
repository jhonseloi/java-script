// Atribuição via desestruturação com parâmetros
function pessoa({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}
pessoa({
    nome: 'Estevão',
    sobrenome: 'Ferreira',
    idade: '20 anos'
}) 

function array([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}
array([1, 2, 3])

function conta(operador, acumulador, ...numeros) {
    for (let n of numeros) {
        if (operador === '+') acumulador += n
        if (operador === '-') acumulador -= n
        if (operador === '/') acumulador /= n
        if (operador === '*') acumulador *= n
    }

    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50)

function conta2(...args) {
    console.log(args)
}
conta2('+', 0, 20, 30, 40, 50)
