// Funções de array
// length (tamanho)
let array = [1, 2, 3, 4, 5]
console.log(array.length)

// push (adicionar)
array.push(6)
array.push("Jessie Ware")
console.log(array)

// pop (remover)
array.pop();
console.log(array)

// unshift (adicionar um elemento no inicio do array)
array.unshift(0);
array.unshift("Soul Control")
console.log(array)

// shift (remover um elemento no inicio do array)
array.shift(1)
console.log(array)

// acessar o último elemento
console.log(array[array.length - 1])

// isArray
console.log(Array.isArray(5))
console.log(Array.isArray(array))