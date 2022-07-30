// Inserindo elementos (appendChild e insertBefore)
let elemento = document.querySelector("section")
elemento.classList = "section-criada"
console.log(elemento)

let container = document.querySelector("#container")

// inserindo elemento filho
container.appendChild(elemento)

// insertBefore (insere antes)
let elementoDois = document.createElement("section")
elementoDois.classList = "section-before"

let elementoTres = document.querySelector("#container .section-criada")
console.log(elementoTres)
container.insertBefore(elementoDois, elementoTres)