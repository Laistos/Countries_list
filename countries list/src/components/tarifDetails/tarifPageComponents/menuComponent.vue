<script setup lang="ts">
import {ref} from "vue";

let isVisible = ref(false)

const onToggle = () => {
  isVisible.value = !isVisible.value
}
console.log(isVisible)
</script>

<template>
  <div class="menu_container">
    <button @click="onToggle()" class="button_container">
      <span class="menu_button">Подключение акции</span>
      <img class="arrow-icon"
           :class="{'arrow-up': isVisible}"
           src="/icons/arrow.svg" alt="#">
    </button>
    <div class="menu_text-container" v-if="isVisible">
      <p class="menu_text">Чтобы подключить акцию наберите : *989*1#OK</p>
      <p class="menu_text">На счете должно быть не менее 290 ₸ (для списание абонентской платы).</p>
    </div>
  </div>
</template>

<style scoped>
.button_container{
  display: flex;
  border: none;
  padding: 10px;
  width: 100%;
  justify-content: space-between;
}

.menu_container {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 16px;
  margin: 10px 0;
  font-family: sans-serif;
}

.menu_button{
  border: none;
  background: none;
  color: #333;
  font-weight: 600;
  font-size: 16px;
}

.menu_text{
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.5;
  color: #444;
  padding: 7px;
}

.arrow-icon{
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
  opacity: 0.5;
}

.arrow-up{
  transform: rotate(180deg)
}
</style>