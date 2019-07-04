const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/oficial': {
        target: 'https://api.cartolafc.globo.com/',
        pathRewrite: { '^/oficial' : '' }
      },
      '/api': {
        target: 'http://cartola-pge-api.herokuapp.com/',
        pathRewrite: { '^/api' : '' }
      }
    }
  }
}