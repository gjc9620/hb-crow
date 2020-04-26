const package =  require('./package.json');

const BABEL_ENV = process.env.BABEL_ENV;
console.log(process.env.BABEL_ENV);
const isESM = BABEL_ENV === 'es';

module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        modules: false,
      }
    ]
  ],
  "plugins": [
    '@babel/plugin-proposal-class-properties',
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": false,
        "helpers": false,
        "regenerator": true,
      }
    ]
  ]
};
