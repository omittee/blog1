const path = require('path');
module.exports = {
  webpack: {
    extensions: ['.ts', '.json', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@public': path.resolve(__dirname, 'public')
    },
  },
};