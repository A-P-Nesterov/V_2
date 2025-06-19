<template>
  <button @click="toggleTheme">Переключить на тему</button>
</template>

<script setup>
import { inject } from 'vue';

// Предположим, что тема управляется через контекст или пропсы
const theme = inject('theme'); // получаем реактивное состояние темы
const setTheme = inject('setTheme'); // функция для изменения темы

const isDark = computed(() => theme.value === 'dark');

function toggleTheme() {
  setTheme(theme.value === 'dark' ? 'light' : 'dark');
}
</script>
