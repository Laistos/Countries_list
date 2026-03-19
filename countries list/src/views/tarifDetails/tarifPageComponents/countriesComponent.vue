<script setup lang="ts">
let props = defineProps({
  countries: Array
})
</script>

<template>
  <div class="countries_container">
    <ul class="countries_list">
      <li v-for="country in props.countries"
          class="country_element">
        <img :src="country.flag" :alt="country.name"  class="country_flag" />
        <p class="country_name">{{country.name}}</p>
        <p class="country_price">{{country.price}} ₸/мин</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.country_element{
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>