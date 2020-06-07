const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'

console.log(texto.match(/[(abc)]/gi)) // não é um grupo
console.log(texto.match(/([abc])/gi))
console.log(texto.match(/(abc)+/gi))

const texto1 = 'abc'
console.log(texto1.match(/[abc]/g))
console.log(texto1.match(/(abc)/g))
