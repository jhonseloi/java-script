function temperatura() {
    let c = Number(prompt('Digite uma temperatura em °C (Celsius)'))
    let res = document.getElementById('res')
    if (c == 0) {
        alert('Insira um valor dentro do formulário.')
        res.innerHTML = '<p>Clique no botão acima para iniciar.</p>'
    } else {
        res.innerHTML = `<h2>A temperatura de ${c.toLocaleString('pt-BR')}°C, corresponde a...</h2>`
        res.innerHTML += `<p>${(c + 273.15).toLocaleString('pt-BR')}°K (Kelvin)</p>`
        res.innerHTML += `<p>${((c * 9 / 5) + 32).toLocaleString('pt-BR')}°F (Fahrenheit)</p>`
    }
}