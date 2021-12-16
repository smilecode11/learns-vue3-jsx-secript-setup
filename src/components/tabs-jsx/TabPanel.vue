<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["key", "title"],
  setup(props, context) {},
};
</script>