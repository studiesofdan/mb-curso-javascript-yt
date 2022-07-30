// Callback functions
function soma (a, b, callback) {
    let op = a + b
    callback(op)
}

function multiplicacao(a, b, cb) {
    let op = a * b
    cb(op)
}

function exibir(num) {
    console.log("A operação resultou em: " + num)
}

soma(10, 11, exibir)
multiplicacao(9, 9, exibir)