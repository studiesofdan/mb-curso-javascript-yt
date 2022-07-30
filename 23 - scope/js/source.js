// scope
// escopo global: o que é iniciado em cada aplicação
var x = 1
var y = 2
console.log(x, y)

// escopo local: o que pode ser utilizado apenas onde foi declarado
function teste(){
    var z = 3
    console.log(z)
}

teste();

// teste de acesso fora do escopo local
// (vai dar errado pois a variável z pode ser acessada somente na função)
console.log(z)