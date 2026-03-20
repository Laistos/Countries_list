<script setup lang="ts">
import ButtonComponent from "@/components/buttonComponent/buttonComponent.vue";
import SearchComponent from "@/components/searchComponent/searchComponent.vue";
import { computed, ref } from "vue";
import CardInfo from "@/components/cardInfo/cardInfo.vue";
import CountriesList from "@/components/countriesList/countriesList.vue";

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
  <header class="header">
    <router-link to="/promotional" class="back"
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
    <p class="title">Ближние дали</p>
  </header>
  <search-component v-model="search" />
  <countries-list :countries="filteredCountries" />
  <card-info title="Подключенные акции">
    <p class="card_text">Чтобы подключить акцию наберите : *989*1#OK</p>
    <p class="card_text">
      На счете должно быть не менее 290 ₸ (для списание абонентской платы).
    </p>
  </card-info>
  <router-link to="/success"><button-component /></router-link>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
}
.title {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  flex-grow: 1;
}
.card_text {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.5;
  color: #444;
  padding: 7px;
}
</style>
