<!-- <template>
  <aside class="aside">
    <h3>Меню</h3>
    <p>Вы включили: {{ currentTheme }}</p>
    <ul>
      <li>Главная</li>
      <li>Магазин</li>
      <li>Корзина</li>
    </ul>
  </aside>
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
      return this.isDarkTheme ? 'Ночь' : 'День';
    },
  },
});
</script>

<style scoped>
.aside {
  width: 250px;
  padding: 20px;
  color: black;
}
</style> -->
<template>
  <aside class="aside">
    <h3>Навигация</h3>
    <ul>
      <li>Главная страница</li>
      <li>Топ менеджер</li>
      <li>Менеджер</li>
      <li>Рабочий персонал</li>
    </ul>
    <p>Сейчас на сайте : {{ currentTheme }}</p>
  </aside>
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
      return this.isDarkTheme ? 'Темно' : 'Светло';
    },
  },
});
</script>

<style scoped>
.aside {
  width: 250px;
  background-color: var(--content-bg);
  padding: 20px;
  color: var(--text-color);
  border-right: 1px solid var(--text-color);
  font-size: 18px;
}
</style>
