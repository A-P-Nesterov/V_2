<template>
  <div class="wrapper">
    <PageHeader title="Composition header" />
    <section class="content">
      <h2>Composition API</h2>
      <CompositionClickCounter title="Composition counter" />
      <UserBlock
        @decrement-age="user.age--"
        @increment-age="(val) => incrementAge(val)"
        :user="user"
      />
    </section>
    <img
      class="img"
      alt="yandex"
      src="https://avatars.mds.yandex.net/get-yapic/58107/TKl7WKkXP1ybjbpKY7eyvAwGwi4-1/orig"
    />
    <img class="img" src="/public/img/arrow.svg" alt="arrow" />
    <!-- <img class="img" src="\public\img\arrow.svg" alt="arrow" /> -->
    <!-- <img class="img" :src="picture" alt="arrow" /> -->
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import PageFooter from '@/components/PageFooter.vue';
import PageHeader from '@/components/PageHeader.vue';
// import { reactive, ref, watch } from 'vue';
import { ref } from 'vue';
import type { IUser } from './types';
import CompositionClickCounter from '@/components/CompositionClickCounter.vue';
import UserBlock from '@/components/UserBlock.vue';
// import picture from '\public\img\arrow.svg';
const user = ref<IUser>({
  name: 'Sergei',
  age: 30,
});
const incrementAge = (value: string) => {
  console.log(value);
  user.value.age++;
};
// const user: IUser = reactive({
//   name:'Sergei',
//   age: 30,
// })
// user.name = 'Ivan';
</script>

<style scoped>
.img {
  width: 100px;
  height: 100px;
}
</style>
