const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`
console.log(texto.match(/\n/g))
console.log(texto.match(/^l.*l$/gi))
console.log(texto.match(/^l.*l$/gim)) // usando a flag multiline
console.log(texto.match(/^(\w).*\1$/gim)) // aprimorando usando grupos e retrovisores