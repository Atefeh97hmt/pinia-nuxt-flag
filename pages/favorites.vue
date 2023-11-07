<template>
  <div>
    <h1>Favorite Countries</h1>
    <div>
      <div class="flex bg-red-200 p-3 mb-2 justify-between">
        <h1 class="bg-red-500 p-2">
          <nuxt-link to="/">Home</nuxt-link>
        </h1>
        <h1 class="bg-red-500 p-2">
          <nuxt-link to="/favorites">Favorite</nuxt-link>
        </h1>
      </div>
    </div>
    <div style=" display: flex;flex-wrap: wrap;margin: 5px;">
      <div
        v-for="country in favorites"
        :key="country.name.common"
        style="width: 150px; display: flex;flex-wrap: wrap;margin: 5px; background-color: black;padding: 5px;"
      >
        <img
          :src="country.flags.svg"
          :alt="country.name.common"
          style="width: 100%"
        />
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
