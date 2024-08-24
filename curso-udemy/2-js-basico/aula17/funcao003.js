function soma(x=0, y=0) {
    const resultado = x + y
    return resultado
}

const res1 = soma() // 0 + 0
console.log(res1)
const res2 = soma(5) // 5 + 0
console.log(res2)
const res3 = soma(2, 1) // 2 + 1
console.log(res3)
