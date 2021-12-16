<template>
  <div>
    <div>Child Template</div>
    <slot :msg="msg"></slot>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const msg = ref("Hello, template scopedSlot");
    return {
      msg,
    };
  },
});
</script>