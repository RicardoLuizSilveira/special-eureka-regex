// . ? * + - ^ $ | [] {} () \ :
// para usar o valor literal de um metacaractere usa-se o escape \
const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexPonto = /\./
console.log(texto.split(regexPonto)) // [ '1,2,3,4,5,6,a', 'b c!d?e' ]

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos)) // [ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e' ]
