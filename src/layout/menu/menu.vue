<template>
  <a-menu
    v-model:open-keys="openKeys"
    v-model:selected-keys="selectedKeys"
    mode="inline"
    :inline-collapsed="collapsed"
    @click="onClickMenuItem"
  >
    <template v-for="item in menus" :key="item.name">
      <menu-item :menu-info="item" :collapsed="collapsed" />
    </template>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, toRefs } from "vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";
import { Menu } from "ant-design-vue";
import { useRoute, useRouter } from "vue-router";
import { AppRouting } from "@/app.routing";
import MenuItem from "./menu-item.vue";

export default defineComponent({
  name: "Menu",
  components: {
    MenuItem,
    "a-sub-menu": Menu.SubMenu,
    "a-menu-item": Menu.Item,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  setup(props) {
    const currentRoute = useRoute();
    const router = useRouter();
    const getOpenKeys = () => [currentRoute.matched[1]?.name];
    const state = reactive({
      openKeys: getOpenKeys(),
      selectedKeys: [currentRoute.name],
    });
    const menus = AppRouting.find((item) => item.path === "/")!.children;
    watch(
      () => props.collapsed,
      (newVal) => {
        state.openKeys = newVal ? [] : getOpenKeys();
        state.selectedKeys = [currentRoute.name];
      }
    );
    watch(
      () => currentRoute.fullPath,
      () => {
        if (currentRoute.name == "login" || props.collapsed) return;
        state.openKeys = getOpenKeys();
        state.selectedKeys = [currentRoute.name];
      }
    );
    const onClickMenuItem = ({ item, key, keyPath }) => {
      router.push({ name: key });
    };
    return {
      ...toRefs(state),
      menus,
      onClickMenuItem,
    };
  },
});
</script>
