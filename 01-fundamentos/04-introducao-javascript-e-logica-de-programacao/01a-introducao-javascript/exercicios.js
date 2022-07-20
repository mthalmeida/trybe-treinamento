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

//retorna dados de notas numericas para porcentagem
let notaAtribuida = 78

if (notaAtribuida >= 0 && notaAtribuida <= 49) {
  console.log("F")
} else if (notaAtribuida >= 50 && notaAtribuida <= 59) {
  console.log("E")
} else if (notaAtribuida >= 60 && notaAtribuida <= 69) {
  console.log("D")
} else if (notaAtribuida >= 70 && notaAtribuida <=79) {
  console.log("C")
} else if (notaAtribuida >= 80 &&  notaAtribuida<= 89) {
  console.log("B")
} else if (notaAtribuida >= 90 && notaAtribuida <= 100) {
  console.log("A")
} else {
  console.log("Favor conferir a nota atribuida")
}