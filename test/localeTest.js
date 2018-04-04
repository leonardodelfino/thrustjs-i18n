var i18n = require('../dist/index.js')
var majesty = require('majesty')

i18n.init({
  'path': './locales'
})

function exec(describe, it, beforeEach, afterEach, expect, should, assert) {
  describe('1. Testando internacionalização', function() {
    it('Buscando olá em portugues', function() {
      expect(i18n.get('OLA', 'pt-br')).to.be.equal('Olá')
    })

    it('Buscando olá em ingles', function() {
      expect(i18n.get('OLA', 'en-us', {})).to.be.equal('Hello')
    })

    it('Testando substituição com Mustache em portugues (padrão)', function() {
      expect(i18n.get('NOME', 'pt-br', {
        'nome': 'Leonardo'
      })).to.be.equal('Meu nome é Leonardo')
    })

    it('Testando substituição com Mustache em ingles', function() {
      expect(i18n.get('NOME', 'en-us', {
        'nome': 'Leonardo'
      })).to.be.equal('My name is Leonardo')
    })

    it('Buscando com 2 niveis em portugues', function() {
      expect(i18n.get('NIVEL.NV2', 'pt-br')).to.be.equal('Nivel 2')
    })

    it('Buscando uma lingua que não existe', function() {
      expect(function() {
        i18n.get('NIVEL.NV2', 'en-us2')
      }).to.throw('Error in bitcode i18n. Language not found')
    })

    it('Omitindo parâmetro de locale', function() {
      expect(function() {
        i18n.get('NIVEL.NV2')
      }).to.throw('Error in bitcode i18n. Language parameter is required')
    })

    it('Tentando acessar uma propriedade que não existe em 2 niveis', function() {
      expect(function() {
        i18n.get('NIVEL.QUALQUER', 'pt-br')
      }).to.throw('Error in bitcode i18n. Property does not exist')
    })

    it('Tentando acessar uma propriedade que não existe em 3 niveis', function() {
      expect(function() {
        i18n.get('NIVEL.QUALQUER.OUTRA', 'pt-br')
      }).to.throw('Error in bitcode i18n. Property does not exist')
    })
  })
}

var res = majesty.run(exec)

print('', res.success.length, ' scenarios executed with success and')
print('', res.failure.length, ' scenarios executed with failure.\n')

res.failure.forEach(function (fail) {
  print('[' + fail.scenario + '] =>', fail.execption)
  var i = 0
  if (fail.execption.printStackTrace && i === 0) {
    fail.execption.printStackTrace()
    i++
  }
})
