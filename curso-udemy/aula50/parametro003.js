function somaA(a=0, b=0) {
    console.log(a + b)
}
somaA(2)

function somaB(a, b, c=2) {
    console.log(a + b + c)
}
somaB(5, 10) // Atribui valor a A e B e mantém o valor inicial de C
somaB(1, 2, 3) // 3 substitui o valor inicial de C (2)
somaB(1, 2, undefined) // Mantém o valor inicial de C (2)