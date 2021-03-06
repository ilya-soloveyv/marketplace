module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  server: {
    host: process.env.HOST,
    port: 3001
  },
  loading: { color: '#fff' },
  css: ['~/assets/scss/reset.scss', '~/assets/scss/main.scss'],
  plugins: [],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],
  axios: {
    proxy: true
  },
  build: {
    extend(config, ctx) {}
  }
}
