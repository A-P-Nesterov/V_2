<template>
  <footer class="footer">Сейчас на сайте: {{ currentTheme }}</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isDarkTheme: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentTheme() {
      return this.isDarkTheme ? 'Тёмно' : 'Светло';
    },
  },
});
</script>

<style scoped>
.footer {
  background-color: var(--header-bg);
  color: white;
  padding: 20px;
  text-align: center;
}
</style>
