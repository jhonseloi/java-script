let msg = document.querySelector('div#msg')

function iniciar_jogo() {
    msg.textContent = ''

    let principal = document.createElement('div')
    document.querySelector('main').appendChild(principal)

    let numero = document.createElement('input')
    numero.type = 'number'
    numero.id = 'num'
    numero.min = '1'
    numero.max = '10'
    principal.appendChild(numero)

    let botao = document.createElement('button')
    botao.textContent = 'Adivinhar'
    principal.appendChild(botao)

    let resposta = document.createElement('p')
    resposta.id = 'res'
    principal.appendChild(resposta)

    let res = document.querySelector('p#res')
    let n_random = Math.round(Math.random() * 9) + 1
    let tentativas = 1

    botao.addEventListener('click', () => {
        let chute = Number(document.querySelector('input#num').value)

        if (chute == n_random) {
            res.innerHTML = `Parabéns! Depois de ${tentativas} tentativa(s), você acertou que era o número ${n_random}.`
            fim_jogo()
        } else {
            if (chute < 1 || chute > 10) {
                res.innerHTML = `<strong>TENTATIVA ${tentativas}:</strong> Valor inválido. Você precisa escolher um número entre 1 e 10.`
            } else if (n_random < chute) {
                res.innerHTML = `<strong>TENTATIVA ${tentativas}:</strong>  O número escolhido é MENOR do que ${chute}.`
            } else {
                res.innerHTML = `<strong>TENTATIVA ${tentativas}:</strong>  O número escolhido é MAIOR do que ${chute}.`
            }

            tentativas++

            if (tentativas > 3) {
                res.textContent = `Você errou as 3 tentativas. O número era ${n_random}.`
                fim_jogo()
            }
        }

        numero.value = ''

        function fim_jogo() {
            numero.remove()
            botao.remove()
            let recomeco = document.createElement('button')
            recomeco.textContent = 'Recomeçar o jogo'
            recomeco.id = 'recomeco'
            principal.appendChild(recomeco)

            recomeco.addEventListener('click', () => {
                res.remove()
                recomeco.remove()
                n_random = Math.round(Math.random() * 9) + 1
                iniciar_jogo()
            })
        }
    })
}