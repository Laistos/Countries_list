<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <router-link to="/standard"
      ><button class="button">Стандартные тарифы</button></router-link
    >
    <router-link to="/promotional"
      ><button class="button">Акицонные тарифы</button></router-link
    >
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.button {
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
  text-decoration: none;
  margin-top: 40px;
  transition:
    background-color 0.2s ease,
    transform 0.1s,
    active;
}

.button:hover {
  background-color: #521f6d;
}

.button:active {
  transform: scale(0.98);
}
</style>
