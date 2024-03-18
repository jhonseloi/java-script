function comprar() {
    let produto = prompt('Que produto você está comprando?')
    let preco = prompt(`Quanto custa ${produto} que você está comprando?`)
    let pr = Number(preco)
    let pagamento = prompt(`Qual foi o valor que você deu para pagar ${produto}?`)
    let pg = Number(pagamento)
    let troco = pg - pr
    alert(`Você comprou ${produto} que custou ${pr.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.
Você deu ${pg.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em dinheiro e vai receber ${troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de troco.
Volte sempre!`)
}