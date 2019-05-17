module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['eslint:recommended', 'prettier', 'react-app'],
  plugins: ['prettier', 'react'],
  parserOptions: {
    ecmaVersion: true,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    //indent: [2, 4],
    'no-console': 1,
    'no-case-declarations': 1,
    //'linebreak-style': [2, 'unix'],
    quotes: [1, 'single'],
    semi: [2, 'always'],
    'prettier/prettier': [2, null, '@prettier']
  },
  overrides: [
    {
      // for Node.js server-side js files
      files: ['server/**/*.js'],
      env: {
        browser: false,
        commonjs: true,
        es6: true
      },
      parserOptions: {
        ecmaVersion: true,
        ecmaFeatures: {
          jsx: true
        },
        sourceType: 'script'
      },
      rules: {
        strict: [2, 'global']
      }
    }
  ]
};
