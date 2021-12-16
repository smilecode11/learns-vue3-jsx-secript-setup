<template>
  <div>
    <div>ScopedSlotTmeplate</div>
    <ChildVue #default="slotProps">
        scopedSlot template demo - {{slotProps.msg}}
    </ChildVue>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ChildVue from "./Child.vue";
export default defineComponent({
  setup() {
    return {};
  },
  components: {
    ChildVue,
  },
});
</script>