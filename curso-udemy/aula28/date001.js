const tresHoras = 60 * 60 * 3 * 1000 // Ajuste ao fuso horário de Brasília
const umDia = 60 * 60 * 24 * 1000

let data = new Date(0 + tresHoras)  // 01/01/1970 -> Timestamp unix ou época unix
console.log(data.toString())

data = new Date(0 + tresHoras + umDia)
console.log(data.toString())

data = new Date(2008, 3, 20, 15, 14, 27, 500) // Ano | Mês | Dia | Hora | Minuto | Segundo | Milissegundo
console.log(data.toString())

data = new Date(2012, 3) // Com exceção de ano e mês, é possível omitir qualquer valor data e hora
console.log(data.toString())

data = new Date(2015, 0) // A contagem dos meses começa por 0
console.log(data.toString())
