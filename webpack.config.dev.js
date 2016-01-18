var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
      { 
        test: /\.json$/, 
        loader: 'json-loader',
        include: path.resolve(__dirname, 'test/data')
      },
      { 
        test: /\.less$/, 
        loaders: ['style-loader','css-loader','less-loader'],
        include: path.resolve(__dirname, 'src/style/theme'),
        exclude: /node_modules/
      },
      { 
        test: /\.css$/, 
        loaders: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, 'src/style'),
        exclude: /node_modules/
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000',
        include: path.resolve(__dirname, 'node_modules')
      }    
    ]
  }
};
