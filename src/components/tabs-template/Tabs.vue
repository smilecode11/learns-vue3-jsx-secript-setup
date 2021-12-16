<template>
  <!-- titles -->
  <div>
    <button
      v-for="panelInfo in titles"
      :key="panelInfo.key"
      :style="{ color: activeKey == panelInfo.key ? 'blue' : '#333' }"
      @click="changeActiveKey(panelInfo.key)"
    >
      {{ panelInfo.title }}
    </button>
  </div>

  <!-- panels -->
  <slot></slot>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["defaultActiveKey"],
  emits: ["change"],
  setup(props, context) {
    //   获取 children
    let childrens = context.slots.default();
    //   遍历生成 titles
    let titles = childrens.map((panel) => {
      const { key, title } = panel.props;
      return {
        title,
        key,
      };
    });

    const activeKey = ref(props.defaultActiveKey);
    const changeActiveKey = (key) => {
      if (activeKey.value === key) return;
      activeKey.value = key;
      context.emit("change", key);
    };

    return {
      titles,
      activeKey,
      changeActiveKey,
    };
  },
};
</script>