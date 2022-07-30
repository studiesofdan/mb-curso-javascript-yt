// Utilizando o this
let pessoa = {
    nome: "Sabrina Fernandes",
    idade: "34",
    profissao: "Socióloga",
    falar: function() {
        console.log("'A questão é transformar o mundo'")
    },
    saudacao: function() {
        console.log("Olá! Sou a " + this.nome)
    },
}

pessoa.saudacao();

