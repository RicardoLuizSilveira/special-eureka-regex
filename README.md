# special-eureka-regex

- [special-eureka-regex](#special-eureka-regex)
  - [Literais](#literais)
  - [Metacaracteres](#metacaracteres)
  - [Ponto](#ponto)
  - [Espaços](#espaços)
  - [Desafios](#desafios)

## Literais
*File: [Literais.js](caracteres/Literais.js)*


## Metacaracteres 
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

## Ponto
. é um coringa, válido para uma posição

*File: [Ponto](caracteres/Ponto.js)*

## Espaços
**Espaços, Tabs e quebras de linha**
| Metacaractere | Nome             |
| ------------- | ---------------- |
| \t            | tab              |
| \s            | espaço em branco |
| \n            | quebra de linha  |
`\s` *também é um shorthand para* `\t \n \f`

*File: [Espacos](caracteres/Espacos.js)*

## Desafios
01 [Extrair extensão de arquivo](caracteres/DesafioListaArquivos.js)