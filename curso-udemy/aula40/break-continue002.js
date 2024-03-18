const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i in numeros) {
    if (numeros[i] === 2 || numeros[i] === 5) {
        console.log('Pulei o número')
        continue
    }

    console.log(numeros[i])

    if (numeros[i] === 7) {
        console.log('Número (7) encontrado, saindo...')
        break
    }
}
