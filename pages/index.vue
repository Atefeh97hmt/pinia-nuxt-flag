
<template>
  <div>
    <h1>Countries</h1>
    <div>
      <div>
            <h1>
                <nuxt-link to="/">Home</nuxt-link>
            </h1>
            <h1>
                <nuxt-link to="/favorites">Favorite</nuxt-link>
            </h1>
        </div>
    </div>
    <div style="display: flex;flex-wrap: wrap;">
      <div
        v-for="country in countries"
        :key="country.name.common"
        style="width: 20%;background-color: #ddd;padding: 5px ;margin: 5px;"
      >
        <img :src="country.flags.svg" :alt="country.name.common" style="width: 150px;height: 100px;"/>
        {{ country.name.common }}
        <button @click="toggleFavorite(country)">
          {{
            countryStore.isFavorite(country)
              ? "Remove from Favorites"
              : "Add to Favorites"
          }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useCountryStore } from "@/stores/countryStore";

const countryStore = useCountryStore();
const countries = computed(() => countryStore.countries);

const toggleFavorite = (country) => {
  if (countryStore.isFavorite(country)) {
    countryStore.removeFromFavorites(country);
  } else {
    countryStore.addToFavorites(country);
    useCountryStore.fetchBorders(country);

  }
};

onMounted(async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  countryStore.setCountries(data);
});
</script>

