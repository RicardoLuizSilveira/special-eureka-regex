const texto = '1,2,3,4,a.b c!d?e[f'

console.log(texto.match(/\D/g))
console.log(texto.match(/[^\d]/g))
console.log(texto.match(/[^0-9]/g))
console.log(texto.match(/[^\d!\?\[\s,\.]/g)) // trazer apenas as letras


const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'
console.log(texto2.match(/[^!-/:-@\s]/g)) // negando dois intervalos e espaços