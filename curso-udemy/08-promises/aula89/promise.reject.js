// Promise.reject --> retorna uma promessa já rejeitada

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
    const emCache = false 
    // const emCache = true 

    if (emCache) {
        return esperaAi('Página em cache', 3000)
    } else {
        return Promise.reject('Baixei a página')
    }
}

baixarPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => {
        console.log('ERRO:', e)
    })
