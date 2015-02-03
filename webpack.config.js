var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache: true,
  entry: './src/index',
  output: {
    filename: './dist/browser-bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader?harmony'}
    ]
  }
};
