<template>
  <tabs :default-active-key="1" @change="onTabChange">
    <tab-panel :key="1" title="title1">tab-panel-1</tab-panel>
    <tab-panel :key="2" title="title2">
        <div>-----------</div>
        <div>tab-panel-2</div>
        <div>-----------</div>
    </tab-panel>
    <tab-panel :key="3" title="title3">tab-panel-3</tab-panel>
  </tabs>
</template>

<script>
import Tabs from "./Tabs.vue";
import TabPanel from "./TabPanel.vue";

import { ref } from "vue";
export default {
  components: {
    Tabs,
    TabPanel,
  },
  setup() {
    const defaultActiveKey = ref(1);

    function onTabChange(key) {
      console.log("table change ", key);
      defaultActiveKey.value = key;
    }

    return {
      onTabChange,
      defaultActiveKey,
    };
  },
};
</script>