/*
fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementosNaPagina(json))
*/

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data))

function carregaElementosNaPagina(json) {
    const table = document.createElement('table')
    const tr = document.createElement('tr')
    
    const thNome = document.createElement('th')
    thNome.innerHTML = 'Pessoa'
    thNome.classList.add('alinhadoEsq')
    tr.appendChild(thNome)

    const thIdade = document.createElement('th')
    thIdade.innerHTML = 'Idade'
    thIdade.classList.add('alinhadoEsq')
    tr.appendChild(thIdade)

    const thSalario = document.createElement('th')
    thSalario.innerHTML = 'Salário'
    thSalario.classList.add('alinhadoEsq')
    tr.appendChild(thSalario)
    
    table.appendChild(tr)

    for (let pessoa of json) {
        const trItem = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = pessoa.nome 
        trItem.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.idade
        trItem.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.salario
        trItem.appendChild(td)

        table.appendChild(trItem)
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}
