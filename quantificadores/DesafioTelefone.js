const texto = `Lista telefônica:
- (11) 98745-6325
-55874-1236`

console.log(texto.match(/[(\d{2})]*\s?\d{5}-\d{4}/g))