let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//*****************************************************************
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//*****************************************************************
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato')

console.log(menu);

//*****************************************************************
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for ( let index = 0; index < groceryList.length; index += 1) {
console.log(groceryList[index]);
}

//*****************************************************************
let familia = ['matheus', 'leninha', 'eustaquio', 'bruno'];

for (let index = 0; index < familia.length; index += 1) {
  console.log(familia[index]);
}

//*****************************************************************
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let repetir of names) {
repetir += 1;
 console.log(repetir)
}

//*****************************************************************
let counter = 0;

while(counter !== 5) {
  counter += 1;
}

//*****************************************************************
