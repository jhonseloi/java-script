let res = document.querySelector('div#res')
let peso = document.querySelector('input#peso')
let altura = document.querySelector('input#altura')

function imc() {
    p = Number(peso.value)
    a = Number(altura.value)
    let calculoIMC = (p / (a * a)).toFixed(1)
    if (calculoIMC == 0) {
        res.innerHTML = `Peso ou altura inválido. Digite novamente!`
    } else if (calculoIMC < 18.5) {
        res.innerHTML = `Seu IMC é ${calculoIMC} (Abaixo do peso).`
    } else if (calculoIMC < 25) {
        res.innerHTML = `Seu IMC é ${calculoIMC} (Peso ideal).`
    } else if (calculoIMC < 30) {
        res.innerHTML = `Seu IMC é ${calculoIMC} (Levemente acima do peso).`
    } else if (calculoIMC < 35) {
        res.innerHTML = `Seu IMC é ${calculoIMC} (Obesidade grau I).`
    } else if (calculoIMC < 40) {
        res.innerHTML = `Seu IMC é ${calculoIMC} (Obesidade grau II).`
    } else {
        res.innerHTML = `Seu IMC é ${calculoIMC} (Obesidade grau III).`
    }
}