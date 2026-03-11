<script setup lang="ts">
import CountriesComponent from "@/components/tarifDetails/tarifPageComponents/countriesComponent.vue";
import ButtonComponent from "@/components/tarifDetails/tarifPageComponents/buttonComponent.vue";
import MenuComponent from "@/components/tarifDetails/tarifPageComponents/menuComponent.vue";
import SearchComponent from "@/components/tarifDetails/tarifPageComponents/searchComponent.vue";
import { computed, ref } from "vue";

const search = ref("");

const filteredCountries = computed(() =>
  countries.value.filter((country) =>
    country.name.toLowerCase().includes(search.value.toLowerCase()),
  ),
);

const countries = ref([
  { flag: "/flags/azerbaijan.png", name: "Азербайджан", price: "99" },
  { flag: "/flags/armenia.png", name: "Армения", price: "99" },
  { flag: "/flags/germany.png", name: "Германия", price: "99" },
  { flag: "/flags/egypt.png", name: "Египет ", price: "99" },
  { flag: "/flags/italy.png", name: "Италия", price: "99" },
  { flag: "/flags/china.png", name: "Китай", price: "99" },
  { flag: "/flags/emirates.png", name: "ОАЭ", price: "99" },
  { flag: "/flags/france.png", name: "Франция", price: "99" },
]);
</script>

<template>
  <p class="title">Ближние дали</p>
  <search-component v-model="search" />
  <countries-component :countries="filteredCountries" />
  <menu-component />
  <button-component />
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}
</style>
