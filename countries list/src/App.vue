<script setup lang="ts">
import {ref} from "vue";
import SearchComponent from "@/components/searchComponent.vue";
import CountriesComponent from "@/components/countriesComponent.vue";

const countries = ref([
      {flag: '/flags/azerbaijan.png', name: 'Азербайджан', price: '99',},
      {flag: '/flags/armenia.png', name: 'Армения', price: '99',},
      {flag: '/flags/germany.png', name: 'Германия', price: '99',},
      {flag: '/flags/egypt.png', name: 'Египет ', price: '99',},
      {flag: '/flags/italy.png', name: 'Италия', price: '99',},
      {flag: '/flags/china.png', name: 'Китай', price: '99',},
      {flag: '/flags/emirates.png', name: 'ОАЭ', price: '99',},
      {flag: '/flags/france.png', name: 'Франция', price: '99',},
    ]
)
</script>

<template>
<div class="wrapper">
  <p class="title">Ближние дали</p>
  <search-component />
  <countries-component :countries='countries'/>
</div>
</template>

<style scoped>
.wrapper{
  width: 400px;
  margin: 0 auto;
  font-family: Arial;
  display: flex;
  flex-direction: column;

}

.title{
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}
</style>
