function reajuste() {
    let func = prompt('Qual o nome do funcionário?')
    let res = document.getElementById('res')
    if (func == 0) {
        alert('Digite o nome do funcionário.')
    } else {
        let sal = Number(prompt(`Qual é o salário de ${func}?`))
        if (sal == 0) {
            alert(`Digite o salário atual de ${func}.`)
        } else {
            let reaj = Number(prompt(`O salário de ${func} vai ser reajustado em qual porcentagem?`))
            if (reaj == 0) {
                alert(`Digite a porcentagem do reajuste.`)
                res.innerHTML = '<p>Clique no botão acima para iniciar.</p>'
            } else {
                res.innerHTML = `<h2>${func} recebeu um aumento salarial!</h2>`
                res.innerHTML += `<p>O salário atual era ${sal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
                res.innerHTML += `<p>Com um aumento de ${reaj}%, o salário vai aumentar ${((reaj * sal) / 100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês.</p>`
                res.innerHTML += `<p>E a partir daí, ${func} vai passar a ganhar ${(sal + ((reaj * sal) / 100)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
            }
        }
    }
}