// Set environment
process.env.NODE_ENV = 'development'

var opn = require('opn')
var webpack = require('webpack')
var merge = require('webpack-merge')
var WebpackDevServer = require('webpack-dev-server')
var HtmlWebpackPlugin = require('html-webpack-plugin')
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
    new webpack.DefinePlugin({
      'process.env': {
        HOST_IP: `"${ host }"`,
        LOADER: '"vue"'
      }
    }),
    new webpack.BannerPlugin({
      banner: '// { "framework": "Vue" }\n',
      raw: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'qrcode.html',
      template: 'qrcode.tpl',
      chunks: []
    }),
    new FriendlyErrorsPlugin()
  ]
})

const weexModeConfig = merge(baseWebpackConfig('weex'), {
  entry: {
    app: [config.dev.entryWeex]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        HOST_IP: `"${ host }"`,
        LOADER: '"weex"'
      }
    }),
    new webpack.BannerPlugin({
      banner: '// { "framework": "Vue" }\n',
      raw: true
    })
  ]
})

console.log('> Starting dev server...')
new WebpackDevServer(webpack([webModeConfig, weexModeConfig]), {
  disableHostCheck: true,
  port: config.dev.port,
  hot: true,
  stats: { colors: true }
}).listen(`${ config.dev.port }`)
console.log(`> Listening at ${ uri }`)

opn(uri)
