import { defineStore } from 'pinia';

export const useFavoriteCountriesStore = defineStore({
  id: 'favoriteCountries',
  state: () => ({
    favorites: [],
  }),
  actions: {
    addFavorite(country) {
      this.favorites.push(country);
    },
    removeFavorite(country) {
      this.favorites = this.favorites.filter((c) => c !== country);
    },
  },
});
