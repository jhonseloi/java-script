function conversor() {
    let metros = Number(prompt('Digite uma distância em metros (m)'))
    let res = document.getElementById('res')
    if (metros == 0) {
        alert('Digite um valor dentro do formulário.') 
        res.innerHTML = '<p>Clique no botão acima para iniciar.</p>'
    } else {
        res.innerHTML = `<h2>A distância de ${metros.toLocaleString('pt-BR')} metros, corresponde a...</h2>`
        res.innerHTML += `<p>${(metros / 1000).toLocaleString('pt-BR')} quilômetros (Km)</p>`
        res.innerHTML += `<p>${(metros / 100).toLocaleString('pt-BR')} hectômetros (Hm)</p>`
        res.innerHTML += `<p>${(metros / 10).toLocaleString('pt-BR')} decâmetros (Dam)</p>`
        res.innerHTML += `<p>${(metros * 10).toLocaleString('pt-BR')} decímetros (dm)</p>`
        res.innerHTML += `<p>${(metros * 100).toLocaleString('pt-BR')} centímetros (cm)</p>`
        res.innerHTML += `<p>${(metros * 1000).toLocaleString('pt-BR')} milímetros (mm)</p>`
    }
}