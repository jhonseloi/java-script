//                -5         -4       -3        -2         -1    
//                 0          1        2         3          4
const nomes = ['Leandro', 'Silvio', 'Joana', 'Ricardo', 'Amanda']

// variavel.splice(indice, delete, add elem1, add elem2, add elem3)

const deletePositivo = () => {
    const n = [...nomes]
    const removidos = n.splice(2, 2)
    console.log(removidos)
}

const deleteNegativo = () => {
    const n = [...nomes]
    const removidos = n.splice(-5, 2)
    console.log(removidos)
}

const deleteRestoFinal = () => {
    const n = [...nomes]
    const removidos = n.splice(2, Number.MAX_VALUE)
    console.log(removidos)
}

const simularShift = () => {
    const n = [...nomes] 
    n.splice(0, 1)
    console.log(n)
}

const simularPop = () => {
    const n = [...nomes]
    n.splice(-1, 1)
    console.log(n)
}

const simularUnshift = () => {
    const n = [...nomes]
    n.splice(0, 0, 'LEON')
    console.log(n)
}

const simularPush = () => {
    const n = [...nomes]
    n.splice(n.length, 0, 'DIOMEDES')
    console.log(n)
}

const subArray = () => {
    const n = [...nomes]
    n.splice(0, 5, 'Paola', 'Tiago', 'Clara', 'Udson', 'Anitta')
    console.log(n)
}

deletePositivo()
console.log('--------')
deleteNegativo()
console.log('--------')
deleteRestoFinal()
console.log('--------')
simularShift()
console.log('--------')
simularPop()
console.log('--------')
simularUnshift()
console.log('--------')
simularPush()
console.log('--------')
subArray()
