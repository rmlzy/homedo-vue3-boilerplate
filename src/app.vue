<template>
  <config-provider :locale="zhCN">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { ConfigProvider } from "ant-design-vue";

export default defineComponent({
  name: "App",
  components: { ConfigProvider },
  setup() {
    return { zhCN };
  },
});
</script>

<style lang="less">
@import "assets/styles/global";
</style>
