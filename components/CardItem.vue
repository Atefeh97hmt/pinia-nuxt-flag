<template>
  <div>
   
  </div>
</template>
<script setup>
const props = defineProps({
  country: Object,
});
import { useCountryStore } from "~/stores/countryStore";

const countryStore = useCountryStore();
</script>
