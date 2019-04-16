import pkg from './package'

export default {
  mode: 'spa',
  head: {
    title: 'Brendan\'s Brewtique - Beer shop, bottles & taps',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Sans' } //,
      //{ rel: 'preload', href: '/images/masthead.jpg', as: 'image', media: '(max-width: 50em)' },
      //{ rel: 'preload', href: '/images/masthead-medium.jpg', as: 'image', media: '(min-width: 50.0625em) and (max-width: 93.6875em)' },
      //{ rel: 'preload', href: '/images/masthead-large.jpg', as: 'image', media: '(min-width: 93.75em)' }
    ]
  },
  loading: { color: '#fff' },
  srcDir: 'src/',
  css: [
    '@/assets/css/normalize.css'
  ],
  plugins: [
  ],
  modules: [
  ],
  build: {
    extend(config, ctx) {
    }
  }
}
