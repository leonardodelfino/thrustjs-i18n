var mustache = require('leonardodelfino/thrustjs-mustache')

var i18n = {
  getConfig: function() {
    if (__i18nConfig !== null) {
      return __i18nConfig
    } else {
      throw new Error('Error in bitcode i18n. Module not initialized')
    }
  },

  setConfig: function(config) {
    loadToGlobal('__i18nConfig', config)
  },

  init: function(config) {
    i18n.setConfig(config)
  },

  get: function(stringKey, localeName, params) {
    var i18nConfig = i18n.getConfig()
    var locale
    if (localeName) {
      locale = require(i18nConfig.path + '/' + localeName)
      if (!locale) {
        throw new Error('Error in bitcode i18n. Language not found')
      }
    } else {
      throw new Error('Error in bitcode i18n. Language parameter is required')
    }

    var str = stringKey.split('.').reduce(function(obj, i) {
      if (!obj[i]) {
        throw new Error('Error in bitcode i18n. Property does not exist')
      }
      return obj[i]
    }, locale)

    return mustache.render(str, params || {})
  }
}

exports = i18n
