// Adicionando atributo (setAttribute)
let title = document.querySelector("#title")
title.setAttribute("class", "testando-atributo")
console.log(title)

// bloqueando um elemento
let button = document.querySelector("#button")
button.setAttribute("disabled", "disabled")

// remover atributo
let lista = document.querySelector("#lista")
lista.removeAttribute("id")