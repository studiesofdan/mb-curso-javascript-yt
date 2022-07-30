// Eventos mouseover e mouseout
// mouseover
let titulo = document.querySelector("#title")
titulo.addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow"
})

// mouseout
titulo.addEventListener("mouseout", function() {
    this.style.backgroundColor = "white"
})

// afetar outro elemento com mouseover
let subtitulo = document.querySelector(".subtitle")
subtitulo.addEventListener("mouseover", function() {
    let legenda = document.querySelector("#legenda")
    legenda.classList.remove("hide")
})

subtitulo.addEventListener("mouseout", function() {
    let legenda = document.querySelector("#legenda")
    legenda.classList.add("hide")
})