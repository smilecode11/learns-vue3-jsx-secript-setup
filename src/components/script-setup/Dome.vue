<script>
function add(a, b) {
  return a + b;
}
</script>

<script setup>
console.log(add(2, "50"));

import { ref, reactive, onMounted, toRefs, watchEffect } from "vue";
import Child from "./Child.vue";
import Child2 from "./Child2.vue";
import Child3 from "./Child3.vue";

const iNumber = ref(0);

const addINumber = () => {
  iNumber.value++;
};

const state = reactive({
  name: "Chen xin",
  age: 26,
});

const onChange = (info) => {
  console.log("onchange", info);
};
const onDelete = (info) => {
  console.log("ondelete", info);
};

//  父组件获取子组件暴露的数据
const child3Ref = ref(null);
onMounted(() => {
  let child3INumber = child3Ref.value.iNumber;
  let child3State = child3Ref.value.state;
  if (child3INumber + "" && child3State) {
    console.log("- get child3 data success-", child3INumber, child3State);
  }
});
</script>

<template>
  <div>script setup demo</div>
  <div>{{ state.name }} - {{ state.age }}</div>
  <div>
    <span>{{ iNumber }}</span>
    &nbsp;
    <button @click="addINumber">iNumber ++</button>
  </div>
  <Child />
  <Child2
    :name="state.name"
    :age="state.age"
    @change="onChange"
    @delete="onDelete"
  />
  <Child3 ref="child3Ref" />
</template>