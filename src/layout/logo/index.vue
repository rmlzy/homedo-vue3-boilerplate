<template>
  <div class="logo">
    <img v-if="!collapsed" src="@/assets/images/logo.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Index",
  props: {
    collapsed: {
      type: Boolean,
    },
  },
};
</script>

<style lang="less" scoped>
.logo {
  padding: 16px 16px 27px;
  height: 84px;

  img {
    width: 220px;
  }
}
</style>
