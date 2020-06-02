const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto2 = 'There is a big fog in NYC'

const regExp = /fogo+/gi
console.log(texto1.match(regExp))
console.log(texto2.match(regExp))

const texto3 = 'Os números: 0123456789.'
console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/[0-9]+/g)) // traz a maior expressão possível ['0123456789']
console.log(texto3.match(/[0-9]+?/g)) // traz cada um dos números separados
console.log(texto3.match(/[\d]+/g)) // shorthand para digitos
console.log(texto3.match(/[\d]+?/g)) // shorthand para digitos
console.log(texto3.match(/\d+/g)) // shorthand sem intervalos
console.log(texto3.match(/\d/g)) // shorthand normal sem quantificadores, traz os elementos separados