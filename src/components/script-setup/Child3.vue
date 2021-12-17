<script setup>
import { ref, reactive, defineExpose } from "vue";

const iNumber = ref(0);
setTimeout(() => {
  iNumber.value = 250;
}, 1500);

const state = reactive({
  name: "Chen xin",
  age: 26,
});

setTimeout(() => {
  state.name = "chen xin";
  state.age = 18;
}, 2000);

/** 暴露信息给父组件*/
defineExpose({
  iNumber,
  state,
});
</script>

<template>
  <div>Child3 Demo</div>
  <div>{{ iNumber }} - {{ state.name }} - {{ state.age }}</div>
</template>