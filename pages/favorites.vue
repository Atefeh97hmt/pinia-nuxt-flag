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
        v-for="country in favorites"
        :key="country.name.common"
        style="
          width: 150px;
          display: flex;
          flex-wrap: wrap;
          margin: 5px;
          background-color: black;
          padding: 5px;
        "
      >
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
        <div>
          <div v-for="(border, i) in countryStore.fetchBorders" :key="i">
            <CardItem :country="border" />
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
</script>
