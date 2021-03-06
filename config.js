const path = require('path')
const alias = require('rollup-plugin-alias')
const replace = require('rollup-plugin-replace')
const flow = require('rollup-plugin-flow-no-whitespace')

module.exports = {
  entry: path.resolve(__dirname, 'src/platforms/web/compiler.js'),
  dest: path.resolve(__dirname, 'dist/vue.js'),
  format: 'umd',
  moduleName: 'Vue',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    flow(),
    alias({
      vue: path.resolve(__dirname, 'src/platforms/web/compiler'),
      compiler: path.resolve(__dirname, 'src/compiler'),
      core: path.resolve(__dirname, 'src/core'),
      shared: path.resolve(__dirname, 'src/shared'),
      web: path.resolve(__dirname, 'src/platforms/web')
    })
  ]
}
