// Continue -> Continua para a próxima iteração
// Break -> Sai do laço 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < numeros.length; i++) {
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
