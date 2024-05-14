// new Object = Object.prototype
const objA = {
    chaveA: 'A'
    // _proto_ = Object.prototype
}

const objB = {
    chaveB: 'B'
    // _proto_ = objA
}

const objC = {
    chaveC: 'C'
}

Object.setPrototypeOf(objB, objA)
console.log(objB.chaveA)
Object.setPrototypeOf(objC, objB)
console.log(objC.chaveB, objB.chaveA)
