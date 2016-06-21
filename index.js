'use strict';

const merge = require('webpack-merge');
const path = require('path');

function getWebpackConfig(config) {
  return merge({
    devtool: config.production ? 'sourcemaps' : 'eval',
    debug: config.webpack.debug,
    output: Object.assign({
      libraryTarget: config.production ? 'umd' : 'var',
      path: path.resolve(config.distFolder),
    }, config.webpack.output),
    merge(anotherConfig) {
      return merge(this, anotherConfig);
    },
  }, config.webpack);
}

getWebpackConfig.defaults = {
  distFolder: { default: '' },
  production: { default: false },
  webpack: { default: {} },
  'webpack.output.filename': { default: '[name].js' },
  'webpack.output.sourceMapFilename': { default: '[file].map' },
  'webpack.output.chunkFilename': { default: '[file].map' },
  'webpack.output.publicPath': { default: '/' },
  'webpack.debug': { default: false },
};

module.exports = getWebpackConfig;
