function* geradora1() {
    yield 1
    yield 2
    yield 3
}

function* geradora2() {
    yield* geradora1()
    yield 4
    yield 5
    yield 6
}

const g2 = geradora2()
for (let valor of g2) {
    console.log(valor)
}

function* geradora3() {
    yield function() {
        console.log('Vim do y1')
    }

    yield function() {
        console.log('Vim do y2')
    }
}

const g3 = geradora3()
const func1 = g3.next().value
const func2 = g3.next().value
func1()
func2()
