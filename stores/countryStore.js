import { defineStore } from "pinia";

export const useCountryStore = defineStore("countryStore", {
  state: () => ({
    countries: [],
    favorites: [],
    bordersCountry: [],
    borderCodes: [],
  }),
  actions: {
    setCountries(countries) {
      this.countries = countries;
    },
    addToFavorites(country) {
      if (!this.favorites.some((c) => c.cca2 === country.cca2)) {
        this.favorites.push(country);
        this.borderCodes.push(country.borders);
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

  getters: {
    fetchBorders(state) {
      if (!!state.borderCodes) {
        const borderCodes = state.borderCodes.flat().join(",");
        const { data: response } = useFetch(
          `https://restcountries.com/v3.1/alpha?codes=${borderCodes}`
        );
        this.bordersCountry = response;
      }
      return this.bordersCountry;
    },
  },
});
