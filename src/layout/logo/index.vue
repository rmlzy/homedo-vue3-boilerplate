<template>
  <div class="logo">
    <img src="@/assets/images/logo.png" alt="" />
    <h1 v-if="!collapsed">Vue3 Admin Boilerplate</h1>
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 64px;

  img {
    width: 32px;
  }

  h1 {
    display: inline-block;
    height: 28px;
    margin: 0 0 0 12px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
  }
}
</style>
