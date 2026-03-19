<script setup lang="ts">
import { ref } from "vue";

let isVisible = ref(false);

const onToggle = () => {
  isVisible.value = !isVisible.value;
};

const { title = "Spoiler" } = defineProps({ title: String });
</script>

<template>
  <section class="card_container">
    <button @click="onToggle()" class="button_container">
      <span class="card_button">{{ title }}</span>
      <img
        class="arrow-icon"
        :class="{ 'arrow-up': isVisible }"
        src="/icons/arrow.svg"
        alt="#"
      />
    </button>
    <div class="card_text-container" v-if="isVisible">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.button_container {
  display: flex;
  border: none;
  padding: 10px;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
}

.card_container {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 16px;
  margin: 10px 0;
  font-family: sans-serif;
}

.card_button {
  border: none;
  background: none;
  color: #333;
  font-weight: 600;
  font-size: 16px;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
  opacity: 0.5;
}

.arrow-up {
  transform: rotate(180deg);
}
</style>
