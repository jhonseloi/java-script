let msg = document.querySelector('p#mensagem')
let chutes = []

function loteria() {
    let lot = 6
    let sorteados = []

    while (sorteados.length < lot) {
        let sort = Math.floor(Math.random() * 60 + 1)

        if (!sorteados.includes(sort)) {
            sorteados.push(sort)
        }
    }

    let num = Number(document.querySelector('input#numero').value)
    document.querySelector('input#numero').value = ''

    if (isNaN(num) || num < 1 || num > 60) {
        alert('Número inválido!')
        return
    } else {
        if (chutes.includes(num)) {
            alert('Número já selecionado!')
            return
        }
        chutes.push(num)

        let acertos = 0
        for (let pos = 0; pos < lot; pos++) {
            if (chutes.includes(sorteados[pos])) {
                acertos++
            }
        }

        msg.innerHTML = `<p>Números chutados: ${chutes.join(', ')}</p>`

        if (chutes.length == lot) {
            msg.innerHTML += `<p>Número sorteados: ${sorteados.join(', ')}</p>Você acertou ${acertos} números!`
            chutes = []
        }
    }
}