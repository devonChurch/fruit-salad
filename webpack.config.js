const { resolve } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { DefinePlugin } = webpack;
const { NODE_ENV = 'development' } = process.env;
const isDevelopment = NODE_ENV === 'development';

/* eslint-disable no-console */
console.log(`
  - - - - - - - - - - - - - - - - - - - -
  + node environment | "${NODE_ENV}"
  + isDevelopment | ${isDevelopment}
  - - - - - - - - - - - - - - - - - - - -
`);
/* eslint-enable no-console */

module.exports = () => ({
  entry: (() => {
    switch (true) {
      case isDevelopment:
        return ['./src/'];

      default:
        return ['./src/'];
    }
  })(),

  output: {
    filename: './index.js',

    path: resolve(__dirname, 'dist'),

    library: 'fruitSalad',

    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: [resolve(__dirname, 'src')],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              // I toggle this when I an debugging in the terminal
              // and do not want my entire viewport filled up with
              // warnings from the build.
              quiet: false,

              // Again - during development Webpacks "watch" function
              // sometimes finds it hard to recover from an ESLint
              // error - in that it will hang even after the error
              // (like a missing semicolon) has been resolved.
              failOnError: true,
            },
          },
        ],
      },

      {
        test: /\.js$/,
        include: [resolve(__dirname, 'src')],
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },

  plugins: (() => {
    const createDefinePlugin = () =>
      new DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV),
      });

    const createCleanWebpackPlugin = () =>
      new CleanWebpackPlugin(['dist'], {
        root: __dirname,
      });

    switch (true) {
      case isDevelopment:
        return [createDefinePlugin()];

      default:
        return [createCleanWebpackPlugin(), createDefinePlugin()];
    }
  })(),

  devtool: isDevelopment ? 'eval' : 'source-map',

  context: __dirname,

  target: 'web',
});
