var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080',
  ],
  output: {
    publicPath: '/',
    filename: 'main.js',
  },
  devTool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules|original)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /vendor\/.+\.(jsx|js)$/,
        loader: 'imports?jQuery=jquery,$=jquery,this=>window',
      },
      {
        test: /\.css$/,
        includes: [path.join(__dirname, 'src'), path.join(__dirname, 'src', 'css')],
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000',
        include: path.join(__dirname, 'images'),
      },
    ],
  },

  devServer: {
    contentBase: './src',
  },

  debug: true,
};
