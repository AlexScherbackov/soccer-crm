module.exports = {
  root: true,
  env: {
    node: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single'],
    'vue/max-attributes-per-line': ['error', { singleline: 6, multiline: 1 }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
