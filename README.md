# special-eureka-regex

- [special-eureka-regex](#special-eureka-regex)
  - [Caracteres](#caracteres)
    - [Literais](#literais)
    - [Metacaracteres](#metacaracteres)
    - [Ponto](#ponto)
    - [Espaços](#espaços)
    - [Ou (Pipe)](#ou-pipe)
    - [Problema do ponto](#problema-do-ponto)
    - [Unicode](#unicode)
  - [Desafios](#desafios)
      - [01 Extrair a extensão .mp3 de arquivos](#01-extrair-a-extensão-mp3-de-arquivos)
      - [02 Encontrar expressão com espaços](#02-encontrar-expressão-com-espaços)
## Caracteres
### Literais
*File: [Literais.js](caracteres/Literais.js)*


### Metacaracteres 
| Metacaractere       | Nome             | Significado                        |
| ------------------- | ---------------- | ---------------------------------- |
| **Representantes**  |                  |                                    |
| .                   | ponto:           | Um caractere necessáriamente       |
| []                  | conjunto:        | Conjunto de caracteres permitidos  |
| [^]                 | conjunto negado: | Conjunto de caracteres proibidos   |
| **Quantificadores** |                  |                                    |
| ?                   | Opcional         | Zero ou um                         |
| \*                  | Asterisco        | Zero ou mais                       |
| \+                  | Mais             | Um ou mais                         |
| {n, m}              | Chaves           | De n até m                         |
| **Âncoras**         |                  |                                    |
| ^                   | Circunflexo      | Inicio da **linha**                |
| $                   | Cifrão           | Fim da **linha**                   |
| \b                  | Borda            | Inicio ou fim da **palavra**       |
| **Outros**          |                  |                                    |
| \\                  | Escape           | Uso de metacaracteres como literal |
| \|                  | Ou               | Operação de OU                     |
| ( )                 | Grupo            | Define um grupo                    |
| \1...\9             | Retrovisor       | Resgata grupos já definidos        |

*File: [Metacaracteres](caracteres/Metacaracrteres.js)*

### Ponto
. é um coringa, válido para uma posição

*File: [Ponto](caracteres/Ponto.js)*

### Espaços
**Espaços, Tabs e quebras de linha**
| Metacaractere | Nome             |
| ------------- | ---------------- |
| \t            | tab              |
| \s            | espaço em branco |
| \n            | quebra de linha  |
`\s` *também é um shorthand para* `\t \n \f`

*File: [Espacos](caracteres/Espacos.js)*

### Ou (Pipe)
*File: [Ou](caracteres/Ou.js)*

### Problema do ponto

O ponto não engloba o \n am algumas linguagens, no entanto em algumas existe uma flag para que o ponto englobe todos os caracteres e isso é conhecido como 'dotall'

dotall - algumas linguagens tem uma flag para que o ponto englobe todos os caracteres

`/exp/s` no entanto JS não.

*File: [Problema do ponto](caracteres/ProblemaPonto.js)*

### Unicode
no início...

Um byte (8 bits) - 256 caracteres
Símbolos, Pontuação, A-Z, a-z, 0-9

Dois bytes (16 bits) - 65500+ caracteres
+Símbolos, +Pontuação, A-Z, a-z, 0-9

Hoje

Unicode com quantidade de Bytes Variável - Expansível. Suporta mais de 1 Milhão caracteres e atualmente tem mais de 100.000 caracteres atribuidos

https://unicode-table.com/pt/

*File: [Unicode](caracteres/Unicode.js)*


## Desafios
#### 01 Extrair a extensão .mp3 de arquivos

extrair .mp3 apenas os arquivos
```js
const texto = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'
console.log(texto.match(/<your regex here>/g))
```
> expected result: [ '.mp3', '.mp3', '.mp3', '.mp3' ]

*[Solution](caracteres/DesafioListaArquivos.js)*

#### 02 Encontrar expressão com espaços

encontrar a expressão 'a___b' *(___ significam 3 espaços)*
```js
const texto = 'a   b'
console.log(texto.match(/<your regex here>/))
```
> expected result: `[ 'a___b' ]`

*[Solution](caracteres/DesafioTresEspacos.js)*