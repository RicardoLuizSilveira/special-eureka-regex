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
  - [Conjuntos](#conjuntos)
    - [Conjuntos](#conjuntos-1)
    - [Intervalos](#intervalos)
    - [Conjuntos e Metacaracteres](#conjuntos-e-metacaracteres)
    - [Cuidados com intervalos](#cuidados-com-intervalos)
    - [Shorthands](#shorthands)
    - [Conjuntos Negados](#conjuntos-negados)
    - [Conjuntos unicode](#conjuntos-unicode)
  - [Quantificadores](#quantificadores)
    - [Zero Um](#zero-um)
    - [Um mais](#um-mais)
    - [Zero ou Mais](#zero-ou-mais)
    - [Usando chaves](#usando-chaves)
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
| ?                   | Opcional         | Zero ou um {0,1}                   |
| \*                  | Asterisco        | Zero ou mais {0,}                  |
| \+                  | Mais             | Um ou mais {1,}                    |
| {n, m}              | Chaves           | De n até m                         |
| {n,}                | Chaves           | n ou mais                          |
| {n}                 | Chaves           | exatamente n                       |
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

## Conjuntos
### Conjuntos
Uma classe (ou conjunto) é definido usando-se []

[aã] nesse exemplo o match ocorrerá para cada **a** ou **ã** dentro do texto. Fica claro que os elementos de um conjunto são avaliados com  condicional **OU**

*File: [Conjunto](Conjuntos/Conjuntos.js)*

### Intervalos
Em um conjunto discreto e ordenado podemos usar intervalos para definir os elementos desejados do conjunto declarando os elementos limitrofes do intervalo desejado.
`[A-F]` ou `[5-6]`

Propriedades:
- A ordem deve ser crescente.
- Limites inclusive
- notação `-`

*File: [Intervalos](Conjuntos/Intervalos.js)*

### Conjuntos e Metacaracteres
como regra geral dentro de conjuntos metacaracteres assumem seu valor literal

*File: [Conjuntos e Metacaracteres](Conjuntos/ConjuntosEMetacaracteres.js)*

### Cuidados com intervalos
*File: [Cuidados com intervalos](Conjuntos/IntervalosCuidados.js)*

### Shorthands
Shorthands são atalhos para determinar alguns grupos de caracteres

| Shorthand | conjunto          | descrição                                              |
| --------- | ----------------- | ------------------------------------------------------ |
| \w        | `/[A-Za-z1-9_]/`  | todos os caracteres                                    |
| \W        | `/[^A-Za-z1-9_]/` | complementar de \w                                     |
| \d        | `[1-9]`           | todos os dígitos                                       |
| \D        | `[^1-9]`          | complementar de \d                                     |
| \s        | `[ ]`             | espaços, tab e nova linha                              |
| \s        | `[ \r\f\t\n]`     | espaços, tab, nova linha, retorno de carro e form feed |
| \S        | `[^ \r\f\t\n]`    | complementar de \s                                     |

*File: [shorthands](Conjuntos/Shorthands.js)*

### Conjuntos Negados
O ^ tem dois sentidos em regex.

Quando usado **dentro** de um conjunto e no **início** nega o regex

*File: [Conjuntos Negados](Conjuntos/ConjuntosNegados.js)*

### Conjuntos unicode
Como no português existem palavras acentuadas e o shorthand **\w** nãoconsidera acentuação, para selecionar esses caracteres pode ser necessário consultar atabela unicode e adicionar ou remover alguns caracteres.

*File: [Conjuntos Unicode](Conjuntos/ConjuntosUnicode.js)*

## Quantificadores
### Zero Um
? é o quantificador zero ou um, o caractere que estiver a esquerda desse simbolo pode estar presente uma vez na expressão ou nenhuma

*File: [Zero Um](quantificadores/ZeroUm.js)*

### Um mais
+ é o quantificador um ou mais, o caractere que estiver a esquerda desse simbolo deve estar presente uma vez  ou mais na expressão

*File: [Zero Um](quantificadores/UmMais.js)*

### Zero ou Mais
* é o quantificador zero ou mais, o caractere que estiver a esquerda desse simbolo pode estar presente várias vezes ou nenhuma

*File: [Zero ou Mais](quantificadores/ZeroMais.js)*

### Usando chaves
* é o quantificador zero ou mais, o caractere que estiver a esquerda desse simbolo pode estar presente várias vezes ou nenhuma

*File: [Usando chaves](quantificadores/UsandoChaves.js)*

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