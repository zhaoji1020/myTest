module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css',
      {src:'assets/iconfont/iconfont.css'},
      {src:'element-ui/lib/theme-chalk/index.css'},
      {src:'swiper/dist/css/swiper.css',ssr:false}
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push(
        //     {
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // }
        )
      }
    }
  },
    plugins:['~/plugins/element-ui.js'],
    plugins:['~/plugins/awesomeswiper.js'],
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ]
}
