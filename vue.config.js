const sassResources = [
  '@import "src/assets/styles/defs/__colors.sass"',
  '@import "src/assets/styles/mixins/__mixins.sass"',
  '@import "src/assets/styles/mixins/__animations.sass"',
];

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/htmlEditor/' : '/',
  css: {
    loaderOptions: {
      sass: {
        data: sassResources.join(';'),
      },
    },
  },
};
