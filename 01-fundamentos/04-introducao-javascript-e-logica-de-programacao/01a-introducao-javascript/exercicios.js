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

