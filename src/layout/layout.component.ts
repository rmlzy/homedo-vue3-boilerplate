import { defineComponent, computed } from "vue";
import { Layout } from "ant-design-vue";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import { useStorage } from "@vueuse/core";
import Logo from "./logo/index.vue";
import TabsView from "./tabs/index.vue";
import AsideMenu from "./menu/menu.vue";
import PageHeader from "./header/index.vue";

export default defineComponent({
  name: "Layout",
  components: {
    TabsView,
    PageHeader,
    AsideMenu,
    Logo,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    [Layout.name]: Layout,
    [Layout.Content.name]: Layout.Content,
    [Layout.Sider.name]: Layout.Sider,
  },
  setup() {
    const collapsed = useStorage("COLLAPSED", false);
    const asiderWidth = computed(() => (collapsed.value ? "80px" : "256px"));
    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };
    return {
      collapsed,
      toggleCollapsed,
      asiderWidth,
    };
  },
});
