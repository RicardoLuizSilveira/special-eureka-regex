const texto = `
ca	r
r	o s!
`
// \t    tab
// \s    espaço em branco
// \n    quebra de linha
// \s também é um shorthand para \t\n\f

// /ca\tr\nr\to s!/    o \s pode ser substituido por um espaço
console.log(texto.match(/ca\tr\nr\to\ss!/))