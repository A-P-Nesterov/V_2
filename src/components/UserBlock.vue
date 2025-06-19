<template>
  <h2>User</h2>
  <p>User name: {{ user.name }}</p>
  <p>User age: {{ user.age }}</p>
  <button class="button" @click="emits('decrement-age')">Increment age++</button>
  <button class="button" @click="emits('increment-age', data)">Decrement age--</button>
</template>

<script setup lang="ts">
// import type { IUser } from '@/views/types';
// import { ref, watch  } from 'vue';
import { watch } from 'vue';
import type { IUserBlockEmits, IUserBlockProps } from './types';

const props = defineProps<IUserBlockProps>();
const emits = defineEmits<IUserBlockEmits>();
const data = 'test data';
// const count = ref<number | string>(0);
// user.value = {
//   name: 'Ivan',
//   age: 35,
// };
// watch(
//   user,
//   (newValue, oldValue) => {
//     console.log('newValue', newValue);
//     console.log('oldValue', oldValue);
//   },
//   { deep: true },
// );
watch(
  () => props.user.age,
  (newValue, oldValue) => {
    console.log('newValue', newValue);
    console.log('oldValue', oldValue);
  },
);
</script>

<style scoped></style>
