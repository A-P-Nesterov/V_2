<template>
  <h2>{{ props.title }}</h2>
  <p>Count: {{ count }}</p>
  <p>Double count: {{ doubleCount }}</p>
  <button class="button" @click="increment">Increment+</button>
  <button class="button" @click="dicrement">Decrement-</button>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { ICompositionCounterProps } from './types';

const count = ref<number>(0);

// const props = defineProps<ICompositionCounterProps>();
const props = withDefaults(defineProps<ICompositionCounterProps>(), {
  title: 'Counter',
});

const increment = () => {
  // if (typeof count.value === 'number') count.value++;
  count.value++;
};
const dicrement = () => {
  // if (typeof count.value === 'number') count.value--;
  if (count.value === 0) {
    alert('Достигнуто минимальное значение!');
    return;
  }
  count.value--;
};

const doubleCount = computed(() => {
  return count.value * 2;
});
watch(
  count,
  (newValue, oldValue) => {
    console.log('newValue', newValue);
    console.log('oldValue', oldValue);
  },
  { immediate: true },
);
</script>

<style scoped></style>
