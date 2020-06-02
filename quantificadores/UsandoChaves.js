const texto1 = 'João recebeu 120 milhões apostando 6 9 21 23 45 46'

console.log(texto1.match(/\d{1,2}/g))
console.log(texto1.match(/\d{1,3}/g))
console.log(texto1.match(/\d{2,3}/g))
console.log(texto1.match(/\d{2}/g))
console.log(texto1.match(/\d{1,}/g))

console.log(texto1.match(/\w{7}/g)) //[ 'recebeu', 'apostan' ]
// milhões tem 7 caracteres mas õ não está dentro do shorthand \w [À-ü]

console.log(texto1.match(/[À-ü\w]{7}/g)) //[ 'recebeu', 'milhões', 'apostan' ]
console.log(texto1.match(/[À-ü\w]{7,}/g)) //[ 'recebeu', 'milhões', 'apostan' ]
console.log(texto1.match(/[\wõ]{7,}/g)) //[ 'recebeu', 'milhões', 'apostan' ]