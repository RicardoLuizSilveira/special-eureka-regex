const texto = '1,2,3,4,5,6,a.b c!d?e'

// letras
console.log(texto.match(/[a-z]/g)) //[ 'a', 'b', 'c', 'd', 'e' ]
console.log(texto.match(/[b-d]/g)) // [ 'b', 'c', 'd' ]

// numeros
console.log(texto.match(/[1-9]/g)) // [ '1', '2', '3', '4', '5', '6' ]
console.log(texto.match(/[3-5]/g)) // [ '3', '4', '5' ]

// mistos
console.log(texto.match(/[A-Z1-9]/gi)) // [ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e' ]
console.log(texto.match(/[a-z3-5]/g)) // [ '3', '4', '5', 'a', 'b', 'c', 'd', 'e' ]
console.log(texto.match(/[a-c3-5]/g)) // [ '3', '4', '5', 'a', 'b', 'c' ]

// inversos
//console.log(texto.match(/[5-3]/g)) // exception
// console.log(texto.match(/[F-A]/g)) // exception