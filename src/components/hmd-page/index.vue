<template>
  <div :class="{ 'hmd-page': true, 'has-header': hasHeaderSlot, 'has-footer': hasFooterSlot }">
    <div v-if="hasHeaderSlot" class="hmd-page__hd">
      <slot name="header"></slot>
    </div>

    <div v-if="hasBodySlot">
      <slot name="body"></slot>
    </div>
    <div v-else class="hmd-page__bd">
      <slot></slot>
    </div>

    <div v-if="hasFooterSlot" class="hmd-page__ft">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "HmdPage",
  props: {},
  setup(props, { slots }) {
    const state = reactive({
      hasHeaderSlot: !!slots.header,
      hasBodySlot: !!slots.body,
      hasFooterSlot: !!slots.footer,
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
@import "./index";
</style>
