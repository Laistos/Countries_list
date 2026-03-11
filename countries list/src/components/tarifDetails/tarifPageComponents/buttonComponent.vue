<script setup lang="ts">
const clicked = () => {
  alert('clicked')
}
</script>

<template>
  <button @click="clicked"
          class="submit_button">Подключить</button>
</template>

<style scoped>
.submit_button{
  width: 100%;
  background-color: #622681;
  color: #ffffff;
  padding: 14px 20px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  border: none;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s ease, transform 0.1s active;
}

.submit_button:hover {
  background-color: #521f6d;
}

.submit_button:active {
  transform: scale(0.98);
}
</style>