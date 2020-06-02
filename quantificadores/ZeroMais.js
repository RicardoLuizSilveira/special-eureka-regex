const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto2 = 'There is a big fog in NYC'

const regexExpGuloso = /fogo*/gi
console.log(texto1.match(regexExpGuloso))
console.log(texto2.match(regexExpGuloso))

const regexExpContido = /fogo*?/gi
console.log(texto1.match(regexExpContido))
console.log(texto2.match(regexExpContido))