/*
|| -> true || false / true || true = true (o valor mesmo)

valores que são avaliados como falso em JS (FALSY VALUES):
** false
** 0
** '' "" ``
** null / undefined
** NaN
*/

console.log(NaN || 0 || null || 'Luiz' || true) // Retorna o primeiro valor true (Luiz)
console.log(0 || false || '' || null || undefined || NaN) // Retorna o último valor false (NaN)