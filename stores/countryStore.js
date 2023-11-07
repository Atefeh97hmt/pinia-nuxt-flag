// // stores/countryStore.js

// import { defineStore } from 'pinia';

// export const useCountryStore = defineStore('countryStore', {
//   state: () => ({
//     countries: [],
//     favorites: [],
//   }),
//   actions: {
//     setCountries(countries) {
//       this.countries = countries;
//     },
//     addToFavorites(country) {
//       this.favorites.push(country);
//     },
//     removeFromFavorites(country) {
//       this.favorites = this.favorites.filter((c) => c !== country);
//     },
//     isFavorite(countryitem) {
//       return this.countries.some((country) => {
//         return country.cca2 === countryitem.cca2;
//       });
//     },
//   },
//   // getters: {
//   //   isFavorite: (country) => (country) => {
//   //     return this.favorites.includes(country);
//   //   },
//   // },
// });


import { defineStore } from 'pinia';

export const useCountryStore = defineStore('countryStore', {
  state: () => ({
    countries: [],
    favorites: [],
  }),
  actions: {
    setCountries(countries) {
      this.countries = countries;
    },
    addToFavorites(country) {
      if (!this.favorites.includes(country)) {
        this.favorites.push(country);
      }
    },
    removeFromFavorites(country) {
      this.favorites = this.favorites.filter((c) => c !== country);
    },
    isFavorite(country) {
      return this.favorites.includes(country)
    }
  },
  getters: {
  },
});
