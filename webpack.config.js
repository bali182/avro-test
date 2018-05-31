const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/client.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.avsc', '.avdl'],
  },
  module: {
    rules: [
      {
        test: /\.avdl$/,
        loader: 'raw-loader',
      }
    ],
  },
  plugins: [
    new HtmlPlugin({ template: 'index.html' })
  ],
  node: {
    fs: 'empty',
    path: 'empty',
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
  },
}