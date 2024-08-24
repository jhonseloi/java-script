const numero = 12

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.')
} else if (numero >= 6 && numero <= 10) {
    console.log('O número está entre 6 e 10.')
} else if (1 === 1) { // Verdadeiro
    console.log('LITERAL')
} else if (numero >= 11 && numero <= 15) {
    console.log('O número está entre 11 e 15.') // Verdadeiro
} else {
    console.log('O número NÃO está entre 0 e 15.')
}
// A checagem termina quando a primeira condição verdadeira é encontrada, mesmo que exista mais uma verdadeira. É preciso ter cuidado com a lógica das condições para não quebrar o fluxo do programa.