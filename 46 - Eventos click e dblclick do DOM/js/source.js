// Eventos click e dblclick do DOM
// com botão
let button = document.querySelector("#btn")
console.log(button)

button.addEventListener("click", function() {
    console.log("clicou")
    console.log(this)
    this.style.color = "red"
})

// afetando outros elementos
let title = document.querySelector("#title")

title.addEventListener("click", function(){
    console.log("clicou no título e escondeu o subtítulo!")

    let esconderSubtitulo = document.querySelector(".subtitle")
    esconderSubtitulo.style.display = "none";
})

// double click
let subtitle = document.querySelector(".subtitle")

subtitle.addEventListener("dblclick", function(){
    console.log("duplo clique!!!")
})