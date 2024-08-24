function formulario() {
    const form = document.querySelector('#form')
    const res = document.querySelector('#resposta')

    function calculoIMC(envio) {
        envio.preventDefault()

        let peso = document.querySelector('#peso').value
        peso = Number(peso)
        let altura = document.querySelector('#altura').value
        altura = Number(altura)
        let imc = peso / (altura * altura)
        imc = imc.toFixed(1)

        document.querySelector('#peso').value = ''
        document.querySelector('#altura').value = ''

        if (isNaN(imc) || peso == 0 || altura == 0) {
            res.innerHTML = 'Resultado inválido! Insira valores numéricos e acima de 0 em peso e altura.'
            res.style.background = '#e72929'
            return
        } else {
            res.style.background = '#06bd06'

            if (imc <= 18.5) {
                res.innerHTML = `O seu IMC é ${imc} (Abaixo do peso)`
            } else if (imc <= 24.9) {
                res.innerHTML = `O seu IMC é ${imc} (Peso normal)`
            } else if (imc <= 29.9) {
                res.innerHTML = `O seu IMC é ${imc} (Sobrepeso)`
            } else if (imc <= 34.9) {
                res.innerHTML = `O seu IMC é ${imc} (Obesidade grau 1)`
            } else if (imc <= 39.9) {
                res.innerHTML = `O seu IMC é ${imc} (Obesidade grau 2)`
            } else {
                res.innerHTML = `O seu IMC é ${imc} (Obesidade grau 3)`
            }
        }
    }

    form.addEventListener('submit', calculoIMC)
}
formulario()
