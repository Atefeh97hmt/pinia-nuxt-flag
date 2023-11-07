// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: 'favorites',
  //       path: '/favorites',
  //       component: resolve(__dirname, 'pages/favorites.vue'),
  //     });
  //   },
  // },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  imports: {
    dirs: ["stores"],
  },


})
