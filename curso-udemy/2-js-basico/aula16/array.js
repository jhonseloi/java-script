// Índice --->     0       1        2
const alunos = ['Luiz', 'Marta', 'João']
alunos[0] = 'Eduardo' // Substitui o elemento no índice indicado
alunos[3] = 'Luiza' // Adiciona um elemento a um índice específico
alunos.push('José') // Adiciona um elemento ao índice final
alunos.unshift('Joana') // Adiciona um elemento aos primeiros índices
alunos.unshift('Fábio')
alunos.pop() // Remove o elemento no último índice (José)
alunos.shift() // Remove o elemento no índice 0 (Fábio)
delete alunos[1] // Deleta o elemento no índice indicado (Eduardo) e deixa a sua posição com valor vazio

console.log(alunos)
console.log(alunos[2]) // Localiza o elemento que está na posição indicada
console.log(alunos.length) // Mostra a quantidade de elementos dentro da array
console.log(alunos[50]) // Localiza um índice não existente (underfined)
console.log(alunos.slice(0, -2)) // Fatiar uma array
console.log(typeof alunos) // Mostrar o type de uma array (object)
console.log(alunos instanceof Array) // Mostra se uma variável é uma array
