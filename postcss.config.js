module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 192,
      propList: ['*'],
      unitPrecision: 3,
      minPixelValue: 1,
    },
  },
};
