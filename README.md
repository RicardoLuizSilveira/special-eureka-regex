# special-eureka-regex

- [special-eureka-regex](#special-eureka-regex)
    - [Literais](#literais)
    - [Metacaracteres](#metacaracteres)

### Literais
File: [Literais.js](caracteres/Literais.js)


### Metacaracteres 
| Metacaractere       | Nome             | Significado                        |
| ------------------- | ---------------- | ---------------------------------- |
| **Representantes**  |                  |                                    |
| .                   | ponto:           | Um caractere                       |
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

File: [Metacaracrteres.js](caracteres/Metacaracrteres.js)