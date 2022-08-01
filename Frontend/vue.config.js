const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../Backend/build'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    },
    port: 8081
  }
}