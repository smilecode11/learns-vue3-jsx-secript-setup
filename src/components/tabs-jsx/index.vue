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
import Tabs from "./Tabs.jsx";
import TabPanel from "./TabPanel.vue";

export default {
  components: {
    Tabs,
    TabPanel,
  },
  setup() {
    function onTabChange(key) {
      console.log("table change ", key);
    }

    return {
      onTabChange,
    };
  },
};
</script>