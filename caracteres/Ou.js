const texto = 'Você precisa responder sim, não ou não sei!'

console.log(texto.match(/sim|não|sei/g)) //[ 'sim', 'não', 'não', 'sei' ]
console.log(texto.match(/sim|não|não sei/g)) // [ 'sim', 'não', 'não' ]
console.log(texto.match(/sim|não sei|não/g)) //['sim', 'não', 'não sei']
