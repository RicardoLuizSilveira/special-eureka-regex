const texto = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'

// retornar o número de arquivos .mp3
const regExt = /\.mp3/g
console.log(texto.match(regExt))
var list = texto.match(regExt)
console.log('O texto tem ' + list.length + ' arquivos mp3')