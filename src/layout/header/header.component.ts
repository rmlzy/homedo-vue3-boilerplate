import { defineComponent, reactive, toRefs, createVNode } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  message,
  Modal,
  Layout,
  Avatar,
  Menu,
  Dropdown,
  Breadcrumb,
  Tooltip,
} from "ant-design-vue";
import {
  SettingOutlined,
  SearchOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  PoweroffOutlined,
  GithubOutlined,
  LockOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import { useStore } from "@/store";
import { TABS_ROUTES } from "@/store/mutation-types";

export default defineComponent({
  name: "PageHeader",
  components: {
    SettingOutlined,
    Dropdown,
    LockOutlined,
    GithubOutlined,
    SearchOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    PoweroffOutlined,
    BellOutlined,
    UserOutlined,
    [Layout.Header.name]: Layout.Header,
    [Avatar.name]: Avatar,
    [Menu.name]: Menu,
    [Tooltip.name]: Tooltip,
    [Menu.Divider.name]: Menu.Divider,
    [Breadcrumb.name]: Breadcrumb,
    [Breadcrumb.Item.name]: Breadcrumb.Item,
  },
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  setup() {
    const store = useStore();

    const state = reactive({
      username: store.getters["user/userInfo"]?.username,
      fullscreenIcon: "FullscreenOutlined",
    });

    const router = useRouter();
    const route = useRoute();

    const doLogout = () => {
      Modal.confirm({
        title: "您确定要退出登录吗？",
        icon: createVNode(QuestionCircleOutlined),
        onOk: () => {
          console.log(router, "退出登录");
          store.dispatch("user/logout").then((res) => {
            message.success("成功退出登录");
            // 移除标签页
            localStorage.removeItem(TABS_ROUTES);
            router
              .replace({
                name: "login",
                query: {
                  redirect: route.fullPath,
                },
              })
              .finally(() => location.reload());
          });
        },
      });
    };

    const toggleFullscreenIcon = () =>
      (state.fullscreenIcon =
        document.fullscreenElement !== null
          ? "FullscreenExitOutlined"
          : "FullscreenOutlined");

    document.addEventListener("fullscreenchange", toggleFullscreenIcon);

    const toggleFullScreen = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    };

    return {
      ...toRefs(state),
      toggleFullScreen,
      doLogout,
      route,
    };
  },
});
