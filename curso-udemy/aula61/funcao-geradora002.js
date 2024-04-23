function* geradora1() {
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
}

const g1 = geradora1()
for (let valor of g1) {
    console.log(valor)
}

function* geradora2() {
    let i = 0

    while(i <= 100) {
        yield i
        i++
    }
}

const g2 = geradora2()
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
