var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    index: ['babel-polyfill', './src/index.js', 'webpack-dev-server/client?http://localhost:8080'],
    resume: ['babel-polyfill', './src/resume.js', 'webpack-dev-server/client?http://localhost:8080'],
    sw: ['./src/sw.js', 'webpack-dev-server/client?http://localhost:8080'],
    "register-sw": ['./src/register-sw.js', 'webpack-dev-server/client?http://localhost:8080']
  },
  output: {
    path: '/',
    publicPath: '/',
    filename: '[name].js',
  },
  devTool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules|original|sw\.js|register-sw\.js)/,
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
        include: path.join(__dirname, 'src', 'css'),
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

  devServer: {
    contentBase: './src',
    inline: true,
    hot: true,
    progress: true,
  },
  debug: true,
};
