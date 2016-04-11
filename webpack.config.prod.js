var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    index: ['babel-polyfill', './src/index.js'],
    resume: ['babel-polyfill', './src/resume.js'],
  },
  output: {
    path: path.join(__dirname),
    publicPath: path.join('src'),
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
          presets: ['es2015', 'react'],
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
        loader: 'url-loader?limit=25000',
      },
      {
        test: /\.json$/,
        include: /src/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],
};
