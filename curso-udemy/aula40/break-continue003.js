const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i of numeros) {
    if (i === 2 || i === 5) {
        console.log('Pulei o número')
        continue
    }

    console.log(i)

    if (i === 7) {
        console.log('Número (7) encontrado, saindo...')
        break
    }
}
