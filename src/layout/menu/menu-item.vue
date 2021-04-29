<template>
  <template v-if="!menuInfo.hidden">
    <a-sub-menu
      v-if="menuInfo.children?.length"
      :key="menuInfo.name"
      v-bind="$attrs"
    >
      <template #title>
        <i :class="['anticon', 'hmd-icon', menuInfo.meta.icon]"></i>
        <span>{{ menuInfo.meta?.title }}</span>
      </template>
      <template v-for="item in menuInfo.children" :key="item.name">
        <template v-if="!item.hidden">
          <template v-if="!item.children">
            <a-menu-item :key="item.name">{{ item.meta?.title }}</a-menu-item>
          </template>
          <template v-else>
            <menu-item :key="item.name" :menu-info="item" />
          </template>
        </template>
      </template>
    </a-sub-menu>

    <a-menu-item v-else :key="menuInfo.name">
      <i :class="['anticon', 'hmd-icon', menuInfo.meta.icon]"></i>
      <span>{{ menuInfo.meta?.title }}</span>
    </a-menu-item>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Menu } from "ant-design-vue";

export default defineComponent({
  name: "MenuItem",
  components: {
    "a-sub-menu": Menu.SubMenu,
    "a-menu-item": Menu.Item,
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
