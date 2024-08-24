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
    'Primeiro valor',
    esperaAi('Promise 1', 1000),
    esperaAi('Promise 2', 500),
    esperaAi(555555, 2000),
]

Promise.all(promessas)
    .then((valor) => {
        console.log(valor)
    })
    .catch((erro) => {
        console.log(erro)
    })
