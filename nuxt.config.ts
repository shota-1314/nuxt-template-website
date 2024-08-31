// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  routeRules: {
    '/api/**': {
      cors: true,
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth',
    'dayjs-nuxt',
    'nuxt-lodash',
  ],
  auth: {
    globalAppMiddleware: true,
    provider: {
      type: 'authjs',
      defaultProvider: 'google',
    },
  },
  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  alias: {
    '~types': '/types',
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  site: {
    name: 'Nuxt-Template',
  },
  tailwindcss: {
    cssPath: ['~/assets/css/main.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: false,
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
})
