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
    filename: '[name].js',
    chunkFilename: '[id].js',
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

  devServer: {
    contentBase: './src',
  },
  debug: true,
};
