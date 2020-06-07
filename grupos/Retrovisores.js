const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))
console.log(texto2.match(/(lenta)(mente).*\2/gi))
console.log(texto2.match(/(lenta)(mente).*\2/gi))
console.log(texto2.match(/(lenta)(mente).*\2.*\1./gi))
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))

// replace pode ser usado como se fosse um argumento
console.log(texto2.replace(/(lenta)(mente)/gi, '$1'))
console.log(texto2.replace(/(lenta)(mente)/gi, 'Sub: $1 :'))


const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))
