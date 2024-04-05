// arguments = sustenta todos os argumentos enviados

function funcao() {
    console.log(arguments)
    console.log(arguments[0])
}

funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function soma() {
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }

    console.log(total)
}
soma(1, 2, 3, 4, 5, 6, 7) 
