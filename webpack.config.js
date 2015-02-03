module.exports = {
  cache: true,
  entry: './index',
  output: {
    filename: 'browser-bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'},
      { test: /\.js$/, exclude: /node_modules/, loader: "6to5-loader"}
    ]
  }
};
