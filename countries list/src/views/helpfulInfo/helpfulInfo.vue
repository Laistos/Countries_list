<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <h3 class="title">Ещё</h3>
    <button class="container">
      <svg
        class="info-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9" stroke="#8E8E93" stroke-width="2" />
        <path
          d="M12 11V16"
          stroke="#8E8E93"
          stroke-width="2"
          stroke-linecap="round"
        />
        <circle cx="12" cy="8" r="1" fill="#8E8E93" />
      </svg>
      <p class="text">Полезная информация</p>
      <svg
        class="arrow-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="#C7C7CC"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.wrapper {
  margin-top: 10px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}
.container:hover {
  background-color: #e0e0e0;
  transition: background-color 0.2s linear;
}
</style>
