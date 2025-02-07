/* 
* Precedência dos operadores aritméticos
1. ()
2. ** 
3. / * %
4. + -
*/

const num1 = 5
const num2 = 2 
const num3 = 10

console.log (num1 * num3 ** num2) // ** vem antes de *
console.log ((num1 * num3) ** num2) // () vem antes de **
console.log (num1 + num2 * num3)  // * vem antes de +
console.log (num1 - num3 / num2) // / vem antes de de +
