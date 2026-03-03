<script setup lang="ts">
import {ref} from "vue";

let searchItem = ref()
</script>

<template>
  <div class="search_container">
    <input v-model="searchItem"
           type="text"
           class="search_input"
           placeholder="Введите название страны"
           }>
  </div>
</template>

<style scoped>
.search_container{
}

.search_input{
  width: 100%;
  height: 30px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid gray;
}
.search_input :focus{
  border: none;
}
</style>