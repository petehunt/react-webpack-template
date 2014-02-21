module.exports = {
  entry: './index',
  output: {
    filename: 'browser-bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};