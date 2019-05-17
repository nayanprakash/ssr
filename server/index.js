'use strict';
// polyfills
require('@babel/polyfill');
require('@babel/register')({
  ignore: [/\/(build|node_modules)\//],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      'transform-assets',
      {
        extensions: ['svg', 'css'],
        name: '[name].[ext]?[sha512:hash:base64:7]'
      }
    ]
  ]
});
require('./server');
