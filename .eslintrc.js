module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-extraneous-dependencies': 0,
    'arrow-parens': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'no-plusplus': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
