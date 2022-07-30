// Funções de array (parte 2)
// splice (adicionar um elemento no meio do array)
let array = [1, 2, 3, 4, 5]
array.splice(2, 0, 737)
console.log(array)

// splice (removendo um elemento no meio do array)
array.splice(4, 1)
console.log(array)

// indexOf
console.log(array.indexOf(5))

// join
let arrayTwo = ["Gomez", "Selena"]
console.log(arrayTwo.join(","))

// reverse
console.log(arrayTwo.reverse())