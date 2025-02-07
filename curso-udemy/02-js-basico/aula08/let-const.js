const nome = 'Jhons Eloi'
const sobrenome = 'Feitosa'
const idade = 25
const peso = 103
const alturaEmM = 1.74
let imc
imc = peso / (alturaEmM * alturaEmM)
let anoNascimento
const data = new Date()
const anoAtual = data.getFullYear()
anoNascimento = anoAtual - idade

console.log(`${nome + ' ' + sobrenome} nasceu em ${anoNascimento}, tem ${idade} anos, pesa ${peso} kg, possui ${alturaEmM} de altura e seu IMC é de ${imc}.`)
