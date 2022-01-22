import { resolve } from 'path'
const vueCompositionAPIFullpath = resolve("./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'molkky-counter',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {
    //   src: '~/vue-plugins/index.js', ssr: false
    // },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // vue compo and nuxt only worked with this https://github.com/vueuse/vueuse/issues/897
  alias: {
    '@vue/composition-api$': '@vue/composition-api/dist/vue-composition-api.mjs',
    '@vue/composition-api/dist/vue-composition-api.mjs': vueCompositionAPIFullpath,
  },
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      });
    }
  },

  buildModules: [
    '@nuxtjs/composition-api/module'
  ]

}
