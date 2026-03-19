<script setup lang="ts">
import { computed, ref } from "vue";
import CountriesList from "@/components/countriesList/countriesList.vue";
import SearchComponent from "@/components/searchComponent/searchComponent.vue";

const search = ref("");

const countries = ref([
  {
    flag: "/flags/azerbaijan.png",
    name: "Азербайджан",
    price: "190",
    pin: 994,
  },
  { flag: "/flags/armenia.png", name: "Армения", price: "190", pin: 374 },
  { flag: "/flags/germany.png", name: "Германия", price: "190", pin: 49 },
  { flag: "/flags/egypt.png", name: "Египет ", price: "190", pin: 20 },
  { flag: "/flags/italy.png", name: "Италия", price: "190", pin: 39 },
  { flag: "/flags/china.png", name: "Китай", price: "190", pin: 86 },
  { flag: "/flags/emirates.png", name: "ОАЭ", price: "190", pin: 971 },
  { flag: "/flags/france.png", name: "Франция", price: "190", pin: 33 },
]);

const filteredCountries = computed(() =>
  countries.value.filter((country) =>
    country.name.toLowerCase().includes(search.value.toLowerCase()),
  ),
);
</script>

<template>
  <div class="wrapper">
    <search-component v-model="search" />
    <countries-list :countries="filteredCountries" />
  </div>
</template>

<style scoped></style>
