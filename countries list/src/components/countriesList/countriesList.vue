<script setup lang="ts">
let props = defineProps({
  countries: Array,
  showCountryCode: Boolean,
});
</script>

<template>
  <div class="countries_container">
    <ul class="countries_list">
      <li v-for="country in props.countries" class="country_element">
        <img :src="country.flag" :alt="country.name" class="country_flag" />
        <div class="country-main">
          <p class="country_name">{{ country.name }}</p>
          <p v-if="props.showCountryCode" class="country-pin">
            Код страны: +{{ country.pin }}
          </p>
        </div>
        <p class="country_price">{{ country.price }} ₸/мин</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.country_element {
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #f2f2f2;
}
.country-main {
  margin-left: 28px;
  text-align: left;
}
.country_name {
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin: 0;
}
.country-pin {
  font-size: 13px;
  color: #8e8e93;
  margin-top: 2px;
}
.country_price {
  margin-left: auto;
  text-align: right;
  padding: 6px 12px;
  background-color: #f5f5f7;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #3a3a3a;
  white-space: nowrap;
}
</style>
