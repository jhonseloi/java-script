const inputTarefa = document.querySelector('.nova-tarefa')
const botaoTarefa = document.querySelector('.botao-tarefa')
const lista = document.querySelector('.lista')

function criaLista() {
    const li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', function(evento) { 
    if (evento.keyCode === 13) {
        if (!inputTarefa.value || inputTarefa.value === '') return
        criaTarefa(inputTarefa.value)
    }
})

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaBotaoApagar(li) {
    li.innerHTML += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.textContent = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa?')
    li.appendChild(botaoApagar)
}

function criaTarefa(texto) {
    const li = criaLista()
    li.innerHTML = texto
    lista.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

botaoTarefa.addEventListener('click', function() {
    if (!inputTarefa.value || inputTarefa.value === '') return
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(evento) { 
    const elemento = evento.target

    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas() {
    const liTarefas = lista.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function manterTarefas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
manterTarefas()
