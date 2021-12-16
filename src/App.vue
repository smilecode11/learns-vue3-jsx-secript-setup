
<template>
  <HelloWorld msg="Hello Vue 3 + JSX" />
  <!-- <hr /> -->
  <!-- <demo-1></demo-1> -->
  <!-- <hr /> -->
  <!-- <demo-2></demo-2> -->
  <!-- <hr /> -->
  <!-- <TemplateTabsDemo /> -->
  <hr />
  <JsxTabsDemo />
  <hr />
  <ScopedSlotTemplate />
  <hr />
  <ScopedSlotJsx />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import Demo1 from "./components/Demo1.vue";
// import Demo2 from './components/Demo2.jsx'
// import TemplateTabsDemo from './components/tabs-template/index.vue'
import JsxTabsDemo from "./components/tabs-jsx/index.vue";
import ScopedSlotTemplate from "./components/scoped-slot-template/Demo.vue";
import ScopedSlotJsx from "./components/scoped-slot-jsx/Demo";

export default {
  components: {
    HelloWorld,
    // Demo1,
    // Demo2,
    // TemplateTabsDemo,
    JsxTabsDemo,
    ScopedSlotTemplate,
    ScopedSlotJsx,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
