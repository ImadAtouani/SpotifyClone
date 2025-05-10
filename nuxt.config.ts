export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      // SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
      SPOTIFY_CLIENT_ID: "dfc84157e4164b81b559f0b8e29ec6a5",
      // SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
      SPOTIFY_CLIENT_SECRET: "75462c0bb0bb4e2cbb7df4db5be15b8e",
      BASE_URL: 'https://example.com/callback'
    }
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    preset: 'netlify'
  }
})