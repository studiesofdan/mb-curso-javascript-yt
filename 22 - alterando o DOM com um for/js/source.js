// alterando o DOM com um for
let frutas = ['Pera', 'Uva', 'Maçã', 'Damasco', 'Kiwi']

let listaUl = document.createElement('ul');
let body = document.getElementsByTagName('body')
console.log(body[0])
body[0].appendChild(listaUl);

let listaNoBody = document.getElementsByTagName('ul');
console.log(listaNoBody[0])

for(let i = 0; i < frutas.length; i++){
    let liFor = document.createElement('li');
    let textoLi = document.createTextNode(frutas[i]);
    liFor.appendChild(textoLi);
    listaNoBody[0].appendChild(liFor);
}