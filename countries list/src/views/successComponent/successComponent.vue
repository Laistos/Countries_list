<script setup lang="ts"></script>

<template>
  <div class="success-container">
    <div class="success-content">
      <div class="status-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 13L9 17L19 7"
            stroke="#00B368"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <h1 class="success-title">Ваш тариф подключается</h1>
      <p class="success-subtitle">SMS придет в ближайшее время</p>
    </div>

    <div class="success-actions">
      <router-link to="/" class="btn-main">На главную</router-link>
    </div>
  </div>
</template>

<style scoped>
.success-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 40px 20px;
  box-sizing: border-box;
  text-align: center;
  font-family: "Inter", sans-serif;
  background-color: #ffffff;
}

.success-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -100px;
}

.status-icon {
  width: 80px;
  height: 80px;
  background-color: #e6f7ef;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}

.status-icon svg {
  width: 40px;
  height: 40px;
}

.success-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a24;
  margin-bottom: 12px;
  line-height: 1.2;
}

.success-subtitle {
  font-size: 16px;
  color: #6d6d7a;
  line-height: 1.5;
}

.success-actions {
  width: 100%;
}

.btn-main {
  display: block;
  width: 100%;
  padding: 16px;
  background-color: #5a2583;
  color: #ffffff;
  text-decoration: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 0.2s;
}

.btn-main:hover {
  background-color: #4a1e6b;
}
</style>
