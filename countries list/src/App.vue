<script setup lang="ts">
import TarifCardComponent from "@/components/tarifCard/tarifCardComponent.vue";
</script>

<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.wrapper {
  width: 400px;
  margin: 0 auto;
  font-family: Arial;
  display: flex;
  flex-direction: column;
}
</style>
