// texto apenas com meta caracteres
const texto = '.$+*?-'

// Dentro de conjuntos os metacaracteres assumem o seu valor literal, não todos
console.log(texto.match(/[.$+*?-]/g)) // [ '.', '$', '+', '*', '?', '-' ]
console.log(texto.match(/[.]/g)) // [ '.']
console.log(texto.match(/[.$+*?-]./g)) // [ '.$', '+*', '?-' ]

// intervalos
// o - aqui tem o valor de metacaractere e define um intervalo
console.log(texto.match(/[$-?]/g)) // [ '.', '$', '+', '*', '?', '-' ]

// NÃO é um intervalo
console.log(texto.match(/[$\-?]/g)) //  tem o escape antes do hifen
console.log(texto.match(/[-?]/g)) //  não é intervalo pois não tem o inicio
console.log(texto.match(/[$-]/g)) //  não é intervalo pois não tem o fim

// Elementos que podem precisar de escape dentro de um conjunto: - [ ] ^