let arrayDeStrings = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
let primeiroNome = arrayDeStrings[0];
let ultimoNome = arrayDeStrings[arrayDeStrings.length - 1];

function concatName(arrayDeStrings) {
  
  return ultimoNome + ',' + primeiroNome;
}


console.log(concatName())