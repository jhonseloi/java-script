const min = 1
const max = 20

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

let rand = 10
while (rand !== 10) { // Checa a condição e depois executa o teste lógico
    rand = random(min, max)
    console.log(rand)
}

console.log('#####')

do { // Executa o teste lógico e depois checa a condição
    console.log(rand)
} while(rand !== 10)
