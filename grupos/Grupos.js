const texto1 = `O João é muito engraçado.... hehehehehehehe`

console.log(texto1.match(/(he)/g))
console.log(texto1.match(/(he)+/g))


const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'

console.log(texto2.match(/(http:\/\/)?(w{3}.)?\w+\.(\w{2,3})?(.\w{2}?)/g))