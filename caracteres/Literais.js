const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/
console.log(texto.split(regexVirgula))
console.log(texto.match(regexVirgula))

console.log(texto.match(/,/g))
console.log(texto.match(/A/))
console.log(texto.match(/A/i))
console.log(texto.match(/A/gi))

console.log(texto.match(/2/gi))
console.log(texto.match(/b c!/))