let primeiroNumero = 20
let segundoNumero = 30
let terceiroNumero = 45

//adição
const adicao = primeiroNumero + segundoNumero

//Subtração
const subtracao = primeiroNumero - segundoNumero

//Multiplicação
const multipicacao = primeiroNumero * segundoNumero

//Divisão
const divisao = primeiroNumero / segundoNumero

//Módulo
const modulo = primeiroNumero % segundoNumero

//retorne o maior de dois números
if (primeiroNumero > segundoNumero) {
  console.log(primeiroNumero)
} else {
  console.log(segundoNumero)
}

//retorne o maior de três números
if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
  console.log(primeiroNumero)
} else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
  console.log(segundoNumero)
} else {
  console.log(terceiroNumero)
}

//retorne um valor positivo, negativo ou zero
let valorDefinido = -2
if (valorDefinido > 0) {
  console.log("Positive")
} else if (valorDefinido < 0) {
  console.log("Negative")
} else {
  console.log("Zero") 
}

//constantes sobre triângulo
const ladoA = 15
const ladoB = 15
const ladoC = 16
if (ladoA === ladoB && ladoB === ladoC) {
  console.log("É um triângulo")
} else if (ladoA != ladoB | ladoB != ladoC) {
  console.log("Não é triângulo")
} else {
  console.log("erro de dado atribuido") 
}
