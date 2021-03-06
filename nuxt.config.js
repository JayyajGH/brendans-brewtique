import pkg from './package';

export default {
  mode: 'universal',
  head: {
    titleTemplate: '%sBrendan\'s Brewtique - Craft beer shop, bottles & taps - Clifton, Bristol',
    htmlAttrs: {
      lang: 'en-GB',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Sans' }
      //{ rel: 'preload', href: '/images/masthead.jpg', as: 'image', media: '(max-width: 50em)' },
      //{ rel: 'preload', href: '/images/masthead-medium.jpg', as: 'image', media: '(min-width: 50.0625em) and (max-width: 93.6875em)' },
      //{ rel: 'preload', href: '/images/masthead-large.jpg', as: 'image', media: '(min-width: 93.75em)' }
    ]
  },
  loading: { color: '#fff' },
  srcDir: 'src/',
  ignore: ['**/*.test.*', '**/*.spec.*'],
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/global.scss'
  ],
  generate: {
    fallback: "404.html"
  },
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  build: {
    extend(config, ctx) {
    }
  }
};
