const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./file')
const texto = files.read('CodigoFonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i
let codigo = texto.match(codeRegex)[0]

// String 
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178')

// Palavras reservadas
codigo = aplicarCor(codigo, /(\b(package|public|class|static|if|else)\b)/g, 'd857cf')

// Tipos
codigo = aplicarCor(codigo, /(\b(void|int)\b)/g, '1385e2')

// Comentario de multiplas linhas
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

// comentário de uma linha
codigo = aplicarCor(codigo, /(\/\/.*\n)/g, '267703')

// console.log(codigo)
// console.log(codigo.match(/(\/\/.*\n)/g))

const conteudoFinal = texto.replace(codeRegex, codigo)
files.write('CodigoFonteColorido.html', conteudoFinal)