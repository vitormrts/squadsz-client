const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@src': 'src',
    '@components': 'src/components',
    '@styles': 'src/styles',
    '@utils': 'src/utils'
  })(config);

  return config;
};
