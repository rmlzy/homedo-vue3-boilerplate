<template>
  <div class="logo">河姆渡</div>
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
  font-size: 16px;
  color: white;
  text-align: center;
}
</style>
