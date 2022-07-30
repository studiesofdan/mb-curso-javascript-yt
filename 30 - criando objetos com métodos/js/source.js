// Criando objetos com métodos
let pessoa = {
    nome: "Sabrina Fernandes,",
    idade: "34",
    profissao: "Socióloga",
    falar: function() {
        console.log("'A questão é transformar o mundo'")
    }
}

console.log(pessoa.nome, pessoa.idade, "anos")
console.log(pessoa.profissao)
pessoa.falar()