
const path = require('path');

module.exports = {
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: /test/,
      }
    ],
  },
};
