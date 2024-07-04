function random(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    }) 
}

esperaAi('Frase 1: Conexão com a BD', random(1, 3))
    .then(resposta1 => {
        console.log(resposta1)
        return esperaAi('Frase 2: Buscando dados da BASE', random(1, 3))
    })
    .then(resposta2 => {
        console.log(resposta2)
        return esperaAi('Frase 3: Tratando os dados da BASE', random(1, 3))
    })
    .then(resposta3 => {
        console.log(resposta3)
        return esperaAi('Frase 4: Exibe dados na tela', random(1, 3))
    })
    .then(resposta4 => {
        console.log(resposta4)
    })

console.log('Isso aqui será exibido antes de qualquer promise.')
