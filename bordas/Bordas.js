const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'
const texto1 = 'Romário era um excelente jogador, mas hoje é um político questionador'
console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // Inicio de linha/string
console.log(texto.match(/r$/gi)) // Final de linha/string
console.log(texto1.match(/^r.*r$/gi))
console.log(texto.match(/^r.*r$/gi)) // problema do dotall
console.log(texto.match(/^r[\s\S]*r$/gi))
