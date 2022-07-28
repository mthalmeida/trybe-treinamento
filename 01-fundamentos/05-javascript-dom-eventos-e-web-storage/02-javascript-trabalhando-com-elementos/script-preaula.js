document.getElementById('elementoOndeVoceEsta');
document.getElementById('elementoOndeVoceEsta').parentElement.color = 'red';
document.getElementById('primeiroFilhoDoFilho').innerText = 'texto dentro do primeiro filho do filho';
document.getElementById('pai').firstElementChild;
document.getElementById('elementoOndeVoceEsta').nextSibling;

/*Acesse o elemento elementoOndeVoceEsta.
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai.
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
Agora acesse o terceiroFilho a partir de pai.*/

function irmaoNovo () {
  let pai = document.getElementById('pai');
  let irmaoNovo = document.createElement('div');
  irmaoNovo.id = 'irmaoNovo';
  pai.appendChild(irmaoNovo)
}
irmaoNovo()

function filhoNovo () {
  let filho = document.getElementById('elementoOndeVoceEsta');
  let filhoNovo = document.createElement('div');
  filhoNovo.id = 'filhoNovo';
  filho.appendChild(filhoNovo)
}
filhoNovo()

function filhoDoFilhoDoFilho () {
  let filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
  let filhoDoFilhoDoFilho = document.createElement('div');
  filhoDoFilhoDoFilho.id = 'filhoDoFilhoDoFilho';
  filhoDoFilho.appendChild(filhoDoFilhoDoFilho);
}
filhoDoFilhoDoFilho()

function acessarTerceiroFilho () {
  let acesso1 = document.getElementById('filhoDoFilhoDoFilho');
  let retornando = document.parentElement.

acessarTerceiroFilho()

/*
Crie um irmão para elementoOndeVoceEsta.
Crie um filho para elementoOndeVoceEsta.
Crie um filho para primeiroFilhoDoFilho.
A partir desse filho criado, acesse terceiroFilho.




parentNode: retorna o nó pai.
parentElement: retorna o elemento pai.
childNodes: retorna um NodeList com todos os nós filhos.
children: retorna um HTMLCollection com todos os elementos filhos.
firstChild: retorna o primeiro nó filho.
firstElementChild: retorna o primeiro elemento filho.
lastChild: retorna o último nó filho.
lastElementChild: retorna o último elemento filho.
nextSibling: retorna o próximo nó.
nextElementSibling: retorna o próximo elemento.
previousSibling: retorna o nó anterior.
previousElementSibling: retorna o elemento anterior.
*/
