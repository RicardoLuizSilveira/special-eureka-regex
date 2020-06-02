const texto = `CPF dos aprovados:
- 658.587.258-69
- 698.874.412-25
- 236.987.258-65`

console.log(texto.match(/\d{3}.\d{3}.\d{3}-\d{2}/g))