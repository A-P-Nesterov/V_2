<template>
  <div class="counter">Count: {{ count }}</div>
  <div class="counter">Double Count: {{ doubleCount }}</div>
  <button @click="increment" class="button">Increment +</button>
  <button @click="decrement" class="button">Decrement -</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  emits: ['incrementCounter'],
  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },
  methods: {
    increment() {
      this.count++;
      this.$emit('incrementCounter', this.count);
    },
    decrement() {
      if (this.count === 0) {
        alert('Достигнуто минимальное значение!');
        return;
      }
      this.count--;
    },
  },
  watch: {
    count(newValue, oldValue) {
      console.log('newValue', newValue);
      console.log('oldValue', oldValue);
    },
    doubleCount: {
      handler(newValue, oldValue) {
        console.log('newValueDouble', newValue);
        console.log('oldValueDouble', oldValue);
      },
      immediate: true,
    },
  },
});
</script>

<style scoped>
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
</style>
