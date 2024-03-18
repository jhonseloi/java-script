const form = document.querySelector('#form')

form.addEventListener('submit', function(envio) {
    envio.preventDefault()

    const pesoInput = document.querySelector('#peso')
    const alturaInput = document.querySelector('#altura')
    const peso = Number(pesoInput.value)
    const altura = Number(alturaInput.value)

    if (!peso && !altura) {
        resultado('Peso e altura inválidos.', false)
        return
    }

    if (!peso) {
        resultado('Peso inválido.', false)
        return
    }

    if (!altura) {
        resultado('Altura inválida.', false)
        return
    }

    const imc = calculoIMC(peso, altura)
    const nivelIMC = resultadoNivelIMC(imc)
    const mensagem = `Seu IMC é ${imc.toFixed(1)} (${nivelIMC}).`
    resultado(mensagem, true)
})

function calculoIMC(peso, altura) {
    return peso / (altura * altura)
}

function resultadoNivelIMC(imc) {
    if (imc >= 40) return 'Obesidade grau 3'
    if (imc >= 35) return 'Obesidade grau 2'
    if (imc >= 30) return 'Obesidade grau 1'
    if (imc >= 25) return 'Sobrepeso';
    if (imc >= 18.5) return 'Peso normal'
    return 'Abaixo do peso'
}

function limparValores() {
    document.querySelector('#peso').value = ''
    document.querySelector('#altura').value = ''
}

function resultado(mensagem, valido) {
    const res = document.querySelector('#resultado')
    res.innerHTML = ''
    const p = document.createElement('p')
    p.innerHTML = mensagem
    limparValores()

    if (valido) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('resultado-invalido')
    }

    res.appendChild(p)
}
