let dolar = Number(prompt('Antes de mais nada, quanto está a cotação do dólar agora?'))

function conversor() {
    let real = Number(prompt('Quantos reais você têm na carteira?'))
    let res = document.getElementById('res')
    if (real == 0 || dolar == 0) {
        alert('É preciso que você preencha os dois formulários. Atualize a página para tentar novamente!')
        res.innerHTML = '<p>Clique no botão acima para iniciar.</p>'
    } else {
        res.innerHTML = `<p>O seu dinheiro equivale a ${(real / dolar).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})}.</p>`
    }
}