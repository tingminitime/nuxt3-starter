import tailwindcss from '@tailwindcss/vite'
import { appDescription } from './app/constants/index'

export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
  ],

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  app: {
    head: {
      meta: [
        { name: 'description', content: appDescription },
      ],
    },
  },

  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        subsets: ['latin'],
      },
    ],
  },

  colorMode: {
    classSuffix: '',
  },

  pinia: {
    storesDirs: ['./app/stores/**'],
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2025-07-31',
})
