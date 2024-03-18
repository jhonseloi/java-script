function desconto() {
    let produto = prompt('Qual é o produto que você está comprando?')
    let res = document.getElementById('res')

    if (produto == 0) {
        alert('Digite o nome do produto.')
    } else {
        let preco = Number(prompt(`Qual é o preço de ${produto}?`))
        if (preco == 0) {
            alert('Digite o preço do produto para descobrir o valor do desconto.')
            res.innerHTML = '<p>Clique no botão acima para iniciar.</p>'
        } else {
            let desconto = (10 * preco) / 100
            res.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2>`
            res.innerHTML += `<p>O preço original era ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
            res.innerHTML += `<p>Você acaba de ganhar ${desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto (-10%).</p>`
            res.innerHTML += `<p>No fim, você vai pagar ${(preco - desconto).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no produto ${produto}.</p>`            
        }
    }
}