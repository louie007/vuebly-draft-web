// Set environment
process.env.NODE_ENV = 'development'

var opn = require('opn')
var webpack = require('webpack')
var merge = require('webpack-merge')
var WebpackDevServer = require('webpack-dev-server')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

var utils = require('./utils')
var config = require('./config')
var baseWebpackConfig = require('./webpack.base.conf')
var host = require('ip').address()
var uri = 'http://localhost:' + config.dev.port

const webModeConfig = merge(baseWebpackConfig('vue'), {
  entry: {
    app: [
      config.dev.entryWeb,
      'webpack/hot/dev-server',
      `webpack-dev-server/client/?${ uri }`
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin()
  ]
})

const weexModeConfig = merge(baseWebpackConfig('weex'), {
  entry: {
    app: [config.dev.entryWeex]
  }
})
console.log(JSON.stringify(webModeConfig))
console.log(JSON.stringify(weexModeConfig))
console.log('> Starting dev server...')
new WebpackDevServer(webpack([webModeConfig, weexModeConfig]), {
  disableHostCheck: true,
  port: config.dev.port,
  hot: true,
  stats: { colors: true }
}).listen(`${ config.dev.port }`)
console.log(`> Listening at ${ uri }`)

opn(uri)
