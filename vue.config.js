const path = require('path')

module.exports = {
  chainWebpack: config => {
    const apiClient = process.env.VUE_APP_API_CLIENT // mock or server
    config.resolve.alias.set(
      'api-client',
      path.resolve(__dirname, `src/api/${apiClient}`)
    )
  },
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