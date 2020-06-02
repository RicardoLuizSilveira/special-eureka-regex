const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? -> zero ou um (opcional)
const regExp = /fogo?/gi

console.log(texto1.match(regExp))
console.log(texto2.match(regExp))