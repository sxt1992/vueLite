const path = require('path')
const flow = require('rollup-plugin-flow-no-whitespace')
const alias = require('rollup-plugin-alias')
const cleanup = require('rollup-plugin-cleanup')

const removeComments = true;

module.exports = {
  entry: path.resolve(__dirname, 'src/platforms/compiler.js'),
  dest: path.resolve(__dirname, 'dist/vue.js'),
  format: 'umd',
  moduleName: 'Vue',
  plugins: [
    flow(),
    alias({
      compiler: path.resolve(__dirname, 'src/compiler'),
      core: path.resolve(__dirname, 'src/core'),
      shared: path.resolve(__dirname, 'src/shared'),
      web: path.resolve(__dirname, 'src/platforms')
    }),
    removeComments && cleanup()
  ]
}
