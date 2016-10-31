'use strict';

const path = require('path');


module.exports = {
  context : path.resolve(__dirname, 'autocomplite'),
  entry : './index.ts',
  output : {
    path : path.resolve(__dirname, 'public'),
    //publicPath: '/',
    filename : 'autocomplite.js'
  },
  resolve : {
    extensions : ['', '.ts', '.js']
  },
  devtool : 'source-map',
  module : {
    loaders : [
      {test : /\.ts/, loader : 'ts-loader'},
      {test : /\.css/, loader : 'style!css',},
      {test : /\.(jpg|png|svg|ttf|woff|woff2|eot)/, loader: 'file-loader?name=files/[path]/[name].[ext]?[hash]'},
      {test : /\.html/, loader : 'html-loader'},
    ]
  },
  devServer : {
    port : 8080,
    host : 'localhost',
    contentBase : path.resolve(__dirname, 'public'),//откуда брать файлы если их нет в сборке
  }
}