const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/\[abc\]/g)) // [ '[abc]' ]
console.log(texto.match(/[abc]/g))
console.log(texto.match(/a-c/g))  // não define um range
console.log(texto.match(/[A-z]/g)) // usa os intervalos da tabela UNICODE/ASCII, esse intervalo traz mais do que letras

// Como visto a ordem crescente deve ser respeitada
// no entando nem sempre essa ordemé clara
// console.log(texto.match(/[a-Z]/g)) // esception
