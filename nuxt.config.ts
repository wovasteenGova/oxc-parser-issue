// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Basic configuration
  app: {
    head: {
      title: 'Nuxt Deployment Solution'
    }
  },
  
  // Optimize for Netlify deployment
  nitro: {
    preset: 'netlify'
  },
  
  devtools: { enabled: true }
}) 