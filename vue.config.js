module.exports = {
  baseUrl: process.env.NODE_ENV === 'development' ? '/' : './',
  outputDir: process.env.VUE_APP_OUTPUTDIR,
  devServer: {
    host: 'localhost',
    port: '8090',
  },
};
