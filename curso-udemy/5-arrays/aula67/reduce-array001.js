// Reduce -> Reduz os elementos de uma array a apenas um elemento

soma = () => {
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
    const total = numeros.reduce((acumulador, valor) => {
        acumulador += valor
        return acumulador
    }, 0)
    console.log(total)
}
soma()

somaParImpar = () => {
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

    const totalPar = numeros.reduce((acumulador, valor) => {
        if (valor % 2 === 0) acumulador += valor
        return acumulador
    }, 0)
    console.log(totalPar)

    const totalImpar = numeros.reduce((acumulador, valor) => {
        if (valor % 2 !== 0) acumulador += valor
        return acumulador
    }, 0)
    console.log(totalImpar)
}
somaParImpar()
