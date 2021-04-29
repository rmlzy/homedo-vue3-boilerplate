<template>
  <div class="table-action">
    <div class="table-action__left">
      <slot name="left"></slot>
    </div>
    <div class="table-action__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableAction",
});
</script>

<style lang="less" scoped>
.table-action {
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
