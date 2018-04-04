# i18n - ThrustJS
Bitcode para disponibilização de internacionalização na plataforma thrustjs

### Instalação
```
thrust install leonardodelfino/thrustjs-i18n
```

### Inicialização
Crie seus arquivos de `locale` dentro de um diretório, utilize o nome do arquivo para definir a língua. Então inicialize o bitcode informando qual o diretório em que os locales se encontram.
```javascript
var i18n = require('leonardodelfino/thrustjs-i18n')

i18n.init({
  'path': './locales'
})
```
### Utilização
Para utitilizar basta chamar a função get, passando como primeiro argumento o nome da chave no objeto de locales, e como segundo argumento a língua desejada. Note que é possível acessar o arquivo de locales em níveis. O argumento da lingua desejada espera como nome, o mesmo nome do arquivo das pastas de locales.

**Arquivo de Locale (pt-br.js):**
```javascript
exports = {
  'sistema': 'Sistema Teste',
  'menus': {
    'usuario': 'Usuário'
  }
}

```
**Execução:**
```javascript
var i18n = require('leonardodelfino/thrustjs-i18n')
i18n.get('sistema', 'pt-br')
i18n.get('menus.usuario', 'en-us')
```

### Utilização do Mustache
É possível também utilizar o mustache render para realizar uma substituição na string conforme exemplo abaixo:

**Arquivo de Locale (pt-br.js):**
```javascript
exports = {
  'desc_nome': 'Meu nome é {{nome}}'
}
```
**Execução:**
```javascript
var i18n = require('leonardodelfino/thrustjs-i18n')
i18n.get('desc_nome', 'pt-br', {'nome' : 'Leonardo Delfino'})
```
