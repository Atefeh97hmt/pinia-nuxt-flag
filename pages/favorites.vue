<template>
  <div>
    <h1>Favorite Countries</h1>
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
    <div style="display: flex; flex-wrap: wrap; margin: 5px">
      <div
        v-for="(country, i) in favorites"
        :key="i"
        style="
          width: 150px;
          display: flex;
          flex-wrap: wrap;
          margin: 5px;
          background-color: #ddd;
          padding: 5px;
        "
      >
        {{ country.name.common }}
        <button @click="removeFromFavorites(country)">Remove from Favorites</button>
        <img
          :src="country.flags.svg"
          :alt="country.name.common"
          style="width: 100%"
        />
      </div>
    </div>
    <div>
      <h2>Borders</h2>
      <div>
        <div style="display: flex; flex-wrap: wrap; margin: 5px">
          <div v-for="(item, i) in result" :key="i">
            <div
              style="
                width: 250px;
                display: flex;
                flex-wrap: wrap;
                margin: 5px;
                background-color: #ddd;
                padding: 5px;">
              {{ item.name.common }}

              <img :src="item.flags.svg" style="width: 100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCountryStore } from "~/stores/countryStore";
const countryStore = useCountryStore();
const favorites = computed(() => countryStore.favorites);
const borders = computed(() => countryStore.borderCodes);
console.log("borders=>",countryStore.borders)

  const url = `https://restcountries.com/v3.1/alpha?codes=${countryStore.borderCodes.join(',')}`
        const response = await fetch(url);
        const result = await response.json()



        const removeFromFavorites = (country) => {
  countryStore.removeFromFavorites(country);
};

</script>
