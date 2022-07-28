//passo 1
//🚀 Adicione a classe title na tag h1 criada;
function adicionaTitulo () {
  function criaTag1 () {let chamaPai = document.getElementsByTagName('body')[0];
  let criaFilho = document.createElement('div');
  chamaPai.appendChild(criaFilho);
  criaFilho.className = 'tituloDoConteudo'
  }
  criaTag1 ()

  function criaTextoTag1 () {
  let chamaPai2 = document.getElementsByClassName('tituloDoConteudo')[0];
  let criaFilho2 = document.createElement('h1');
  chamaPai2.appendChild(criaFilho2);
  document.getElementsByTagName('h1')[0].innerText ='Exercício 5.2 - JavaScript DOM';
  criaFilho2.className = 'title'
  }
  criaTextoTag1()
}
adicionaTitulo()

//passo 2
function adicionaTagMain () {
  let chamaPai = document.getElementsByTagName('body')[0];
  let criaFilho = document.createElement('main');
  chamaPai.appendChild(criaFilho);
  criaFilho.className = 'main-content'
}
adicionaTagMain()

//passo 3
//🚀 Troque a cor de fundo do elemento pai da section para a cor verde;
function adicionaSection () {
  let chamaPai = document.getElementsByTagName('main')[0];
  let criaFilho = document.createElement('section');
  chamaPai.appendChild(criaFilho);
  criaFilho.className = 'center-content'
  let chamaPai2 = document.getElementsByClassName('center-content')[0];
  chamaPai2.style = 'background-color: green'
}
adicionaSection()

//passo 4
function adicionaPDaSection () {
  let chamaPai = document.getElementsByTagName('section')[0];
  let criaFilho = document.createElement('p');
  chamaPai.appendChild(criaFilho);
}
adicionaPDaSection()

//passo 5
function adicionaSection2 () {
  let chamaPai = document.getElementsByTagName('main')[0];
  let criaFilho = document.createElement('section');
  chamaPai.appendChild(criaFilho);
  criaFilho.className = 'left-content'
}
adicionaSection2()

//passo 6
//🚀 Centralize a section.
//Dica: para centralizar, basta configurar o margin-right: auto da section;
function adicionaSection3 () {
  let chamaPai = document.getElementsByTagName('main')[0];
  let criaFilho = document.createElement('section');
  chamaPai.appendChild(criaFilho);
  criaFilho.className = 'right-content'
  let chamaPai2 = document.getElementsByClassName('right-content')[0];
  chamaPai2.style = 'margin-right: auto'
}
adicionaSection3()

//passo 7
function adicionaImagem (url) {
  let img = document.createElement("img");
  img.src='https://picsum.photos/200';
  document.body.appendChild(img);
}
adicionaImagem()

//passo 8
function adicionaLista () {
  let chamaPai = document.getElementsByClassName('right-content')[0];
  let criaFilho = document.createElement('li');
  chamaPai.appendChild(criaFilho);
  criaFilho.className = 'listagem'
  let listagem = document.getElementsByClassName('listagem')[0];
  let listaItens = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
    for (index = 0; index < listaItens.length; index += 1) {
      let itemUnico = listaItens[index]
      let listaItens = document.createElement('li');
      listaItens.innerText = itemUnico;
  }
}
adicionaLista ()

//passo 9
//🚀 Adicione a classe description nas 3 tags h3 criadas;
function adiciona3Tags () {
  for (index = 1; index <= 3; index +=1) {
    let chamaPai = document.getElementsByTagName('main')[0];
    let criaFilho = document.createElement('h3');
    chamaPai.appendChild(criaFilho);
    criaFilho.className = 'description'
  }
}
adiciona3Tags()

//🚀 Remova a section criado no passo 5. Utilize a função .removeChild();
function removeSection () {
  let chamaPai = document.getElementsByTagName('main')[0];
  let chamaFilho = document.getElementsByClassName('left-content')[0];
  chamaPai.removeChild(chamaFilho);
}
removeSection()