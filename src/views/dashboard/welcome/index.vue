<template>
  <div>Dashboard</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isQQ } from "homedo-utils";

export default defineComponent({
  name: "Dashboard",
  setup() {
    console.log("isQQ:", isQQ('13211112222'));
  }
});
</script>
