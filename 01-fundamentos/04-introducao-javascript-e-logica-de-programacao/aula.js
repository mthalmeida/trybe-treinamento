let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Não'

console.log('Bem-vinda, ' + info.personagem)
console.log('Recorrente: ' + info.recorrente)

for (let index in info){
  console.log(index)
}
for (let index in info) {
  console.log(info[index])
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Não',
}

console.log(info.personagem, 'e', info2.personagem)
console.log(info.origem, 'e', info2.origem)
console.log(info.nota, 'e', info2.nota)
if (info.recorrente === info2.recorrente && info.recorrente === 'Sim'){
  console.log('Ambos recorrentes')
} else if (info.recorrente === info2.recorrente && info.recorrente === 'Não') {
  console.log('Ambos não são recorrentes')
} else if (info.recorrente === 'Sim' && info2.recorrente === 'Não') {
  console.log('Somente', info.personagem, 'é recorente')
} else {
  console.log('Somente', info2.personagem, 'é recorente')
}