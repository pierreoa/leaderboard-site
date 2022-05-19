import { config as dotenv } from 'dotenv-safe';
import { defineNuxtConfig } from 'nuxt';

dotenv();

export default defineNuxtConfig({
  // Auth module configuration https://auth.nuxtjs.org/
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            method: 'post',
            url: '/api/v1/login',
          },
          logout: {
            method: 'post',
            url: '/api/v1/logout',
          },
          user: {
            method: 'get',
            url: '/api/v1/me',
          },
        },
        token: {
          global: true,
          property: 'token',
          type: 'Bearer',
        },
        user: {
          property: 'data',
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BACKEND_BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css'],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    link: [{ href: '/favicon.ico', rel: 'icon', type: 'image/x-icon' }],
    meta: [
      { charset: 'utf-8' },
      { content: 'width=device-width, initial-scale=1', name: 'viewport' },
      { content: '', hid: 'description', name: 'description' },
      { content: 'telephone=no', name: 'format-detection' },
    ],
    title: 'leaderboards.gg',
  },

  i18n: {
    defaultLocale: 'en',
    detectBrowserLanguage: {
      alwaysRedirect: false,
      useCookie: true,
    },
    langDir: '@/i18n/',
    lazy: true,
    locales: [
      { code: 'de', file: 'de/index.ts', iso: 'de-DE', name: 'Deutsch' },
      { code: 'en', file: 'en/index.ts', iso: 'en-US', name: 'English' },
      { code: 'es', file: 'es/index.ts', iso: 'es', name: 'Español' },
      { code: 'fr', file: 'fr/index.ts', iso: 'fr', name: 'Français' },
      { code: 'ja', file: 'ja/index.ts', iso: 'ja', name: '日本語' },
    ],
    strategy: 'prefix_and_default',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/i18n',
    '@nuxtjs/svg-sprite',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://tailwindcss.com
    '@nuxtjs/tailwindcss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/api'],

  // https://nuxtjs.org/tutorials/moving-from-nuxtjs-dotenv-to-runtime-config/
  publicRuntimeConfig: {
    backendBaseUrl: process.env.BACKEND_BASE_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  svgSprite: {
    // manipulate module options
  },
});
