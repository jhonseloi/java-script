// Promise.resolve --> retorna uma promessa já resolvida

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO')
                return
            }
            
            resolve(msg.toUpperCase())
        }, tempo)
    })
}

function baixarPagina() {
    const emCache = true 
    // const emCache = false 

    if (emCache) {
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixarPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => {
        console.log(e)
    })
