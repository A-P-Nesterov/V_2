<template>
  <div class="wrapper" :class="{ 'dark-theme': isDarkTheme }">
    <PageHeader @toggle-theme="toggleTheme" :isDarkTheme="isDarkTheme" :title="text" />
    <section class="main-section">
      <PageAside :is-dark-theme="isDarkTheme" />
      <div class="content">
        <h2>Counter</h2>
        <ClickCounter @increment-counter="onIncrement" />
        <div class="main-user">
          <h2>User</h2>
          <div>Name: {{ user.name }}</div>
          <div>Age: {{ user.age }}</div>
          <button @click="increment" class="button">Increment age</button>
          <button @click="decrement" class="button">Decrement age</button>
          <div :style="messageStyle" class="message">
            {{ text }}
          </div>
        </div>
      </div>
    </section>
    <PageFooter :is-dark-theme="isDarkTheme" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import PageAside from './components/PageAside.vue';
import ClickCounter from './components/ClickCounter.vue';

export default defineComponent({
  components: {
    PageHeader,
    PageFooter,
    PageAside,
    ClickCounter,
  },
  data() {
    return {
      isDarkTheme: false,
      user: {
        name: 'Sergei',
        age: 30,
      },
      text: '',
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
    },
    increment() {
      this.user.age++;
    },
    decrement() {
      this.user.age--;
    },
    onIncrement(value: number) {
      console.log('increment - counter', value);
    },
  },
  computed: {
    messageStyle() {
      return { color: this.user.age < 18 || this.user.age >= 60 ? 'red' : 'green' };
    },
  },
  watch: {
    'user.age': {
      handler(val) {
        if (val < 18) {
          this.text = 'Доступ запрещен!';
        } else if (val < 60) {
          this.text = 'Доступ разрешен!';
        } else {
          this.text = 'Вы достигли возрастного максимума!!';
        }
      },
      immediate: true,
    },
  },
});
</script>

<style>
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --header-bg: #4caf50;
  --content-bg: #f5f5f5;
}

.dark-theme {
  --bg-color: #121212;
  --text-color: #ffffff;
  --header-bg: #183a19;
  --content-bg: #1f1f1f;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-size: 30px;
  transition: all 0.3s ease;
  margin: 0;
}

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-section {
  display: flex;
  flex-grow: 1;
}

.content {
  flex-grow: 1;
  padding: 20px;
  background-color: var(--content-bg);
  color: var(--text-color);
}
.button {
  padding: 10px 40px;
  border-radius: 18px;
  border: none;
  background-color: rgb(130, 125, 229);
  margin-right: 10px;
  color: rgb(24, 6, 41);
  font-size: 16px;
  cursor: pointer;
}
.message {
  color: green;
}
</style>
