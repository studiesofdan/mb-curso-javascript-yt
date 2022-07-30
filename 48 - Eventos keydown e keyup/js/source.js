// Eventos keydown e keyup
// keydown
document.addEventListener("keydown", function(event){
    console.log(event.key)

    if(event.key === "Enter"){
        alert("Você apertou enter!")
    }
})

// keyup
document.addEventListener("keyup", function(event){
    console.log(event.key)

    if(event.key === "ArrowUp") {
        alert("Você apertou a tecla para cima")
    }
})