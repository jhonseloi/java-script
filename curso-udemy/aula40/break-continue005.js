const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let i = 0
do {
    if (i === 2 || i === 5) {
        console.log('Pulei o número')
        i++
        continue
    }

    console.log(numeros[i])
    i++

    if (i === 7) {
        console.log('Número (7) encontrado, saindo...')
        i++
        break
    }
} while (i < numeros.length)
