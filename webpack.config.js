/* eslint-disable */

const webpack = require('webpack');
const path = require('path');

module.exports = function(env, argv) {
  const NODE_ENV = env.NODE_ENV || 'production';
  const DEVELOPMENT = NODE_ENV === "development";
  const PRODUCTION = !DEVELOPMENT;

  const config = {
    entry: [
      "./src/index",
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "index.js",
      libraryTarget: "umd",
    },
    watch: DEVELOPMENT,
    devtool: DEVELOPMENT ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "eslint-loader",
          include: /src/,
          enforce: "pre",
          options: {
            formatter: require("eslint-friendly-formatter"),
            configFile: path.resolve(__dirname, '.eslintrc.js'),
            cache: false, // <- "cache: true" is error prone
          }
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          include: /src/,
          options: {
            cacheDirectory: DEVELOPMENT
          },
        },
      ]
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
    ],
  };

  const productionPlugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
        unsafe: true,
      }
    }),
  ];

  if (PRODUCTION) {
    config.plugins.push(...productionPlugins);
  }

  return config;
};
