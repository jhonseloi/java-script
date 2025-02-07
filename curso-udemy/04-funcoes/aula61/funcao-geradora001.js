function* geradora() {
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
}

const g = geradora()
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
