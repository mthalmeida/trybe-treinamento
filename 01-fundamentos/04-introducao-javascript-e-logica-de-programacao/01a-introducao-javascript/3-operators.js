// Expressões e Operadores: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

let num1 = 5;
const num2 = 10;
let num3 = 15; // number
let num4 = '15'; // string

// = é atribuição
// == é comparação, sem comparar o tipo dos valores - Igual
/// === é comparação, que compara também o tipo dos valores - Estritamente igual

let comparacao = num3 == num4;
console.log(comparacao);

let resultado = num3 === num4;
console.log(resultado);

// Soma
num1 = 50;
num1 = num1 + 100;
console.log(num1);
num1 += 100; // num1 = num1 + 100
console.log(num1);


// Subtração
let subt = num1 - num4;
console.log(subt)

// Multiplicação
let mult = num1 * num2;
console.log(mult);

// Divisão
let division = num1 / num2;
console.log(division);


// % - operador de resto

// Para saber se um número é par
let isEven = 8 % 2 == 0;
console.log(isEven);

// Para saber se um número é ímpar
let isOdd = 9 % 2 !== 0
console.log(isOdd); 