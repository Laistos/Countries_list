<script setup lang="ts">
import { computed, ref } from "vue";
import CountriesList from "@/components/countriesList/countriesList.vue";
import SearchComponent from "@/components/searchComponent/searchComponent.vue";
import HelpfulInfo from "@/views/helpfulInfo/helpfulInfo.vue";

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
    <div class="title-container">
      <router-link to="/" class="back"
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12H5M5 12L12 19M5 12L12 5"
            stroke="#1a1a24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
      ></router-link>
      <h1 class="title">Стандартные тарифы</h1>
    </div>
    <search-component v-model="search" />
    <countries-list :countries="filteredCountries" :showCountryCode="true" />
    <div class="main-text">
      <p class="text">Все цены указаны с учётом НДС</p>
      <h3>Международные SMS</h3>
      <p class="text">
        Стандартный тариф за одно SMS на международное направление составляет 20
        тенге с учётом НДС
      </p>
    </div>
    <helpful-info />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  padding: 8px;
}
.title-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.title {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  flex-grow: 1;
}
.main-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 100%;
}
.text {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.5;
  color: #8e8e93;
}
</style>
