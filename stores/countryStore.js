import { defineStore } from "pinia";

export const useCountryStore = defineStore("countryStore", {
  state: () => ({
    countries: [],
    favorites: [],
  }),
  actions: {
    setCountries(countries) {
      this.countries = countries;
    },
    addToFavorites(country) {
      if (!this.favorites.some((c) => c.cca2 === country.cca2)) {
        this.favorites.push(country);
      }
    },
    removeFromFavorites(country) {
      const index = this.favorites.findIndex((c) => c.cca2 === country.cca2);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      }
    },
    isFavorite(country) {
      return this.favorites.some((c) => c.cca2 === country.cca2);
    },
  },

  getters: {},
});
