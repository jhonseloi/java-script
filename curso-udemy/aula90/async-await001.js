function random(min=1, max=3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(msg.toUpperCase())
        }, tempo)
    })
}

async function executa() {
    const fase1 = await esperaAi('Fase 1', random())
    console.log(fase1)

    const fase2 = await esperaAi('Fase 2', random())
    console.log(fase2)

    const fase3 = await esperaAi('Fase 3', random())
    console.log(fase3)

    console.log('Terminanos na fase:', fase3)
}
executa()
