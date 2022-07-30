// Criando elementos com DOM (createElement)
// inserir elemento no body
let body = document.querySelector("body")
let novoParagrafo = document.createElement("p")
let texto = document.createTextNode("Esse é o conteúdo do parágrafo")

body.appendChild(novoParagrafo)
novoParagrafo.appendChild(texto)

// inserir em um container
let container = document.getElementById("tuts")
let elemento = document.createElement("span")

elemento.appendChild(document.createTextNode("Texto do span"))
container.appendChild(elemento)