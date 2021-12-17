<script setup>
import { defineProps, defineEmits } from "vue";

//  属性
const props = defineProps(["name", "age"]);

//  事件
const emit = defineEmits(["change", "delete"]);
const deleteHandler = () => {
  emit("delete", 'aaa');
};
</script>

<template>
  <div>Child2 Demo</div>
  <div>{{ props.name }} - {{ props.age }}</div>
  <button @click="$emit('change', 'bbb')">change bbb</button>&nbsp;
  <button @click="deleteHandler">delete aaa</button>&nbsp;
</template>