/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  mode: 'development',
  entry: './main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'pack.js',
  },
  plugins: [
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
