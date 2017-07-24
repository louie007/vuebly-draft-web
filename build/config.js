var path = require('path')

module.exports = {
  build: {
    port: 8080,
    distRoot: path.resolve(__dirname, '../dist'),
    distWeb: path.resolve(__dirname, '../dist/web'),
    distWebIndex: path.resolve(__dirname, '../dist/web/index.html'),
    distWeex: path.resolve(__dirname, '../dist/weex'),
    distWeexIndex: path.resolve(__dirname, '../dist/weex/index.js'),
    entryWeb: path.resolve(__dirname, '../src/app.web.js'),
    assetsPublicPath: '/',
    sourceMap: true
  },
  dev: {
    port: 8080,
    assetsPublicPath: '/',
    autoOpenBrowser: true,
    entryWeb: path.resolve(__dirname, '../src/main.web.js'),
    entryWeex: path.resolve(__dirname, '../src/main.weex.js'),
    proxyTable: {},
    sourceMap: true
  }
}
