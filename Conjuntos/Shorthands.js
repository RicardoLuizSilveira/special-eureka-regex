const texto = `1,2,3,4,5,6,a.b c!d?e\r\f	-
f_g`

console.log(texto.match(/\d/g)) // tudo que é digito
console.log(texto.match(/\D/g)) // complementar de \d
console.log(texto.match(/\w/g)) // caracteres
console.log(texto.match(/\W/g)) // complementar do \w
console.log(texto.match(/\s/g)) // [ ' ', '\r', '\f', '\t', '\n' ]
console.log(texto.match(/\S/g)) // complementar do \s
