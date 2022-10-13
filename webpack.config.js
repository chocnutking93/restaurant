const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    mode: 'development',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};