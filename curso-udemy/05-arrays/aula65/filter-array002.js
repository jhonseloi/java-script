// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com A

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const pessoaComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
console.log(pessoaComNomeGrande)

const pessoasComMais50Anos = pessoas.filter(obj => obj.idade > 50)
console.log(pessoasComMais50Anos)

const nomeTerminaComA = pessoas.filter(obj => {
   return obj.nome.toLowerCase().endsWith('a')
})
console.log(nomeTerminaComA)
