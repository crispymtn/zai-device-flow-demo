const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/assets'),
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/assets/',
    open: true,
    historyApiFallback: true
  },

  plugins: [
    new Dotenv()
  ]
};
