const texto = 'Bom\nDia'
const texto2 = 'Bom\sDia'

console.log(texto.match(/.../gi)) //[ 'Bom', 'Dia' ]
console.log(texto.match(/..../gi)) //null isso ocorre porque o ponto não engloba o \n
console.log(texto2.match(/..../gi)) //[ 'Boms' ] no entanto o ponto vale para todos os outros

// dotall - algumas linguagens tem uma flag para que o ponto englobe todos os caracteres
// /<exp>/s no entanto JS não.