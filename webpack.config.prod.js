var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: ['babel-polyfill', './src/index.js', 'webpack-dev-server/client?http://localhost:8080'],
    resume: ['babel-polyfill', './src/resume.js', 'webpack-dev-server/client?http://localhost:8080'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules|original)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'react-hmre'],
        },
      },
      {
        test: /vendor\/.+\.(jsx|js)$/,
        loader: 'imports?jQuery=jquery,$=jquery,this=>window',
      },
      {
        test: /\.css$/,
        includes: [
          path.join(__dirname, 'src', 'css'),
          path.join(__dirname, 'src', 'components', 'resume'),
        ],
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000',
        include: path.join(__dirname, 'images'),
      },
      {
        test: /\.json$/,
        include: /src/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
