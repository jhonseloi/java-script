function random(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO')
                return
            }
            
            resolve(`${msg.toUpperCase()} - Passei pela promise`)
        }, tempo)
    })
}

const promessas = [
    esperaAi('Promise 1', random(1, 3)),
    esperaAi('Promise 2', random(1, 3)),
    esperaAi('Promise 3', random(1, 3)),
    esperaAi(555555, random(1, 3)),
]

Promise.race(promessas)
    .then((valor) => {
        console.log(valor)
    })
    .catch((erro) => {
        console.log(erro)
    })
