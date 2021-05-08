<template>
  <a href="javascript:;"><slot></slot></a>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmptyLink",
});
</script>
