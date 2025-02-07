/* RETORNE A SOMA DO DOBRO DE TODOS OS PARES
** Filtrar pares (filter)
** Dobrar os valores (map)
** Somar tudo (reduce)
*/

versaoEstendida = () => {
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

    const numerosPares = numeros.filter(function(valor) {
        if(valor % 2 === 0) return valor
    })
    console.log(numerosPares)

    const dobro = numerosPares.map(function(valor) {
        return valor * 2
    })
    console.log(dobro)

    const soma = dobro.reduce(function(acumulador, valor) {
        return acumulador + valor
    })
    console.log(soma)
}
versaoEstendida()

console.log('-----')

versaoCurta = () => {
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
    const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((ac, valor) => ac + valor)
    console.log(numerosPares)
}
versaoCurta()
