function listaDeTarefas() {
    const tarefaTexto = document.querySelector('#tarefa')
    const lista = document.querySelector('.lista')

    document.addEventListener('click', function(evento) {
        const elemento = evento.target

        if (elemento.classList.contains('adicionar')) {
            const novaTarefaTexto = tarefaTexto.value

            const novaTarefa = document.createElement('li')
            novaTarefa.classList.add('tarefa')
            novaTarefa.textContent = `${novaTarefaTexto} `

            const botaoApagar = document.createElement('button')
            botaoApagar.textContent = 'Apagar'

            lista.appendChild(novaTarefa) 
            novaTarefa.appendChild(botaoApagar)
            
            botaoApagar.addEventListener('click', function() {
                lista.removeChild(novaTarefa)
            })

            tarefaTexto.value = ''
        }
    })
}
listaDeTarefas()
