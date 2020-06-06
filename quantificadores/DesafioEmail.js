const texto = `Os emails dos convidados são:
- g.freeman@blackmesa.com
- dog@gmail.com.br
- xico@gmail.com
- joao@empresa.info.br
- maria.silva@registro.br
rafa.sampaio@yahoo.com
`

console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))