// Localizando os valores de uma data

data = new Date('2019-04-20 20:15:59.100')

console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1) // Mês começa do zero
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minuto', data.getMinutes())
console.log('Segundo', data.getSeconds())
console.log('Milissegundo', data.getMilliseconds())
console.log('Dia da semana', data.getDay()) // 0 -> Domingo, 6 -> Sábado
console.log(data.toString())

console.log(Date.now()) // Data vigente em milissegundos
data = new Date(1708980540926)
console.log(data.toString())
