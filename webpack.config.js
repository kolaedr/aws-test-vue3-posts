const path = require('path');

module.exports = {
  context: __dirname,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};