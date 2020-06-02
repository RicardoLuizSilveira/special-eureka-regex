const texto = '<div>Conteudo 1</div><div>Conteudo 2</div>'

// quantificadores SÂO gulosos por padrão (greedy)
console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{1,100}<\/div>/g))

// quantificadores NÂO gulosos (lazy)
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{1,100}?<\/div>/g))