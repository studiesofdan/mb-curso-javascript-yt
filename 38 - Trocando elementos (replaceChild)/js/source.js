// Trocando elementos (replaceChild)
let elemento = document.createElement("h3")
elemento.classList = "joe-joe"

let texto = document.createTextNode("Este é um texto")
elemento.appendChild(texto)
console.log(elemento)

// selecionar o elemento que quero trocar
let titulo = document.querySelector("#title")
console.log(title)

// selecionar o pai do elemento
let pai = titulo.parentNode

// trocar os elementos
pai.replaceChild(elemento, titulo)