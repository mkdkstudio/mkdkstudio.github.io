// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'MkDk Studio',
  chainWebpack(config) {
    config.module
      .rule('scss')
      .test(/\.scss$/)
      .use('vue-style-loader')
      .loader('vue-style-loader')
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()
      .use('sass-loader')
      .loader('sass-loader')
      .end();
  },
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'G-3P2H8K3321',
        debug: {
          enabled: true, // default value
          trace: true, // default value
          sendHitTask: true // default value
        }
      }
    }
  ],
}
