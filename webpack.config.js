const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader",
            options: {
              hmr: true
            } // creates style nodes from JS strings
        }, {
            loader: "css-loader",
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
        }, {
            loader: "less-loader"
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}