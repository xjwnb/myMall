module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-multiple-empty-lines": 0,
    "space-before-function-paren": 0,
    "no-trailing-spaces": 0,
    "object-curly-newline": 0,
    "eol-last": 0,
    "new-cap": 0,
    "padded-blocks": 0,
    "comma-dangle": 0,
    "prefer-const": 0,
    "spaced-comment": 0
  }
}
