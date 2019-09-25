// Programación funcional


const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento

let doubleArr = arr.map(x => x * 2)
console.log(doubleArr) // [2, 4, 6, 8, 10, 12]

// utilizar el método filter para filtrar los números pares de arr

const evenArr = arr.filter(element => element % 2 === 0)
console.log(evenArr) // [2, 4, 6]

// utilizar el método reduce para sumar todos los elementos

const reducer = (acc, cur) => acc + cur
const sum = arr.reduce(reducer)
console.log(sum) // 21