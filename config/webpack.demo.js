const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: './demo/index.js',
  output: {
    filename: 'dist/index.js',
    path: path.resolve(__dirname, '../demo'),
  },
  devtool: 'eval-cheap-source-map',
});
