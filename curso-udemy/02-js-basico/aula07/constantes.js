const primeiroNumero = '5'
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2

let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5

console.log(resultado)
console.log(resultadoDuplicado)
console.log(resultadoTriplicado)
console.log(typeof (primeiroNumero + segundoNumero)) // String + Number = string
console.log(typeof (resultado + resultadoDuplicado)) // Number + Number = number

/* REGRAS
* Não pode criar constantes com palavras reservadas (var, let, if, function, etc.)
* Constantes precisam ter nomes com significado (semântica)
* Não pode começar o identificador da constante com número
* Não pode conter espaço ou traço
* Constante composta utiliza-se camelCase (ex: const umNumero)
* Letra maiúscula ou minúscula faz diferença no identificador da constante (Case-sensitive)
* Não pode modificar o valor da constante 
* Sempre utilizar const ao invés de var 
*/
