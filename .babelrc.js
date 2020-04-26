
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
        "corejs": 2,
        "helpers": true,
        "regenerator": true,
      }
    ]
  ]
};
