// clearTimeout e clearInterval
// clearTimeout
let x = 0;

let tempo = setTimeout(function() {
    console.log("x = 0")
}, 500)

x = 21;

if (x > 0) {
    clearTimeout(tempo)
    console.log("O x passou de 0")
}

// clearInterval
let intervalo = setInterval(function() {
    console.log("Imprimindo o interval")
}, 1000)

setTimeout(function(){
    console.log("Não precisamos mais do intervalo")
    clearInterval(intervalo)
}, 2000)
