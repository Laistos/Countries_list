<script setup lang="ts"></script>

<template>
  <div class="tarif-container">
    <div class="header">
      <router-link to="/" class="back"
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
      <h1 class="tarif-title">Акционные тарифы</h1>
    </div>
    <div class="tarif-card">
      <h2 class="tarif-card-title">Ближние дали</h2>
    </div>
    <div class="tarif-main-content">
      <p class="tarif-text">
        Звоните по сниженным тарифам в страны ближнего зарубежья - всего 99 ₸ за
        минуту
      </p>
      <p class="tarif-price">290 ₸/месяц</p>
      <p class="tarif-text">Подключение 0 ₸</p>
    </div>
    <div class="tarif-buttons">
      <router-link to="/about" class="tarif-button btn1"
        >Подключить
      </router-link>
      <button class="tarif-button btn2">Подробнее</button>
    </div>
  </div>
</template>

<style scoped>
.tarif-container {
}
.header {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
.tarif-title {
  text-align: center;
  font-size: 20px;
  flex-grow: 1;
}

.tarif-card {
  height: 100px;
  background: linear-gradient(135deg, #eaddf8 0%, #c5a3eb 100%);
  padding: 24px;
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
}

.tarif-card-title {
  font-size: 22px;
  font-weight: 700;
}

.tarif-text {
  font-size: 14px;
  line-height: 1.5;
  color: #444;
  margin: 8px 0 10px 0;
}

.tarif-price {
  margin: 15px 0 0 0;
  font-size: 32px;
  font-weight: 700;
}

.tarif-buttons {
  display: flex;
  flex-direction: column;
}

.tarif-button {
  text-decoration: none;
  text-align: center;
  padding: 14px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  transition: opacity 0.2s;
  margin-bottom: 10px;
  cursor: pointer;
}

.tarif-button:hover {
  opacity: 0.9;
}

.btn1 {
  background-color: #5a2583;
  color: #ffffff;
}

.btn2 {
  background-color: #ffffff;
  color: #333;
  border: 1px solid #e0e0e0;
}
</style>
