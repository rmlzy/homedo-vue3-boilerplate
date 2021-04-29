import {
  defineComponent,
  reactive,
  computed,
  toRefs,
  unref,
  provide,
  watch,
} from "vue";
import {
  DownOutlined,
  ReloadOutlined,
  CloseOutlined,
  VerticalRightOutlined,
  VerticalLeftOutlined,
  ColumnWidthOutlined,
  MinusOutlined,
} from "@ant-design/icons-vue";
import { Dropdown, Tabs, Card } from "ant-design-vue";
import { useRoute, useRouter } from "vue-router";
import { storage } from "@/utils/Storage";
import { TABS_ROUTES } from "@/store/mutation-types";
import { useStore } from "@/store";
import { RouteItem } from "@/store/modules/tabs-view/state";

import { message } from "ant-design-vue";

export default defineComponent({
  name: "Tabs",
  components: {
    [Tabs.name]: Tabs,
    [Tabs.TabPane.name]: Tabs.TabPane,
    [Dropdown.name]: Dropdown,
    [Card.name]: Card,
    MinusOutlined,
    DownOutlined,
    ReloadOutlined,
    CloseOutlined,
    VerticalRightOutlined,
    VerticalLeftOutlined,
    ColumnWidthOutlined,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    // const tabsViewMutations = mapMutations(['addTabs','closeLeftTabs','closeRightTabs','closeOtherTabs','initTabs','closeCurrentTabs','closeAllTabs'])

    // 获取简易的路由对象
    const getSimpleRoute = (route): RouteItem => {
      const { fullPath, hash, meta, name, params, path, query } = route;
      return { fullPath, hash, meta, name, params, path, query };
    };

    let routes: RouteItem[] = [];

    try {
      const routesStr = storage.get(TABS_ROUTES) as string | null | undefined;
      routes = routesStr ? JSON.parse(routesStr) : [getSimpleRoute(route)];
    } catch (e) {
      routes = [getSimpleRoute(route)];
    }

    // 初始化标签页
    store.commit("tabsView/initTabs", routes);
    // tabsViewMutations.initTabs(routes)

    const state = reactive({
      activeKey: route.fullPath,
    });

    // 移除缓存组件名称
    const delKeepAliveCompName = () => {};

    // 标签页列表
    const tabsList = computed(() => store.state.tabsView.tabsList);

    watch(
      () => route.fullPath,
      () => {
        // 不存在的路由
        const notFondRoutes: string[] = [];
        tabsList.value.forEach((item) => {
          if (!router.hasRoute(item.name)) {
            notFondRoutes.push(item.name);
          }
        });
        // 过滤不存在的路由
        if (notFondRoutes.length) {
          store.commit(
            "tabsView/initTabs",
            tabsList.value.filter((item) => !notFondRoutes.includes(item.name))
          );
        }
      }
    );

    const whiteList = ["Redirect", "login"];

    watch(
      () => route.fullPath,
      (to, from) => {
        if (whiteList.includes(route.name as string)) return;
        state.activeKey = to;
        // tabsViewMutations.addTabs(getSimpleRoute(route))
        store.commit("tabsView/addTabs", getSimpleRoute(route));
      },
      { immediate: true }
    );

    // 在页面关闭或刷新之前，保存数据
    window.addEventListener("beforeunload", () => {
      storage.set(TABS_ROUTES, JSON.stringify(tabsList.value));
    });

    // 关闭当前页面
    const removeTab = (route) => {
      if (tabsList.value.length === 1) {
        return message.warning("这已经是最后一页，不能再关闭了！");
      }
      delKeepAliveCompName();
      // tabsViewMutations.closeCurrentTabs(route)
      store.commit("tabsView/closeCurrentTab", route);
      // 如果关闭的是当前页
      if (state.activeKey === route.fullPath) {
        const currentRoute =
          tabsList.value[Math.max(0, tabsList.value.length - 1)];
        state.activeKey = currentRoute.fullPath;
        router.push(currentRoute);
      }
    };
    // tabs 编辑（remove || add）
    const editTabItem = (targetKey, action: string) => {
      if (action == "remove") {
        removeTab(tabsList.value.find((item) => item.fullPath == targetKey));
      }
    };
    // 切换页面
    const changePage = (key) => {
      state.activeKey = key;
      router.push(key);
    };

    // 刷新页面
    const reloadPage = () => {
      delKeepAliveCompName();
      router.push({
        path: "/redirect" + unref(route).fullPath,
      });
    };
    // 注入刷新页面方法
    provide("reloadPage", reloadPage);

    // 关闭左侧
    const closeLeft = (route, index) => {
      // tabsViewMutations.closeLeftTabs(route)
      store.commit("tabsView/closeLeftTabs", route);
      state.activeKey = route.fullPath;
      router.replace(route.fullPath);
    };

    // 关闭右侧
    const closeRight = (route, index) => {
      // tabsViewMutations.closeRightTabs(route)
      store.commit("tabsView/closeRightTabs", route);
      state.activeKey = route.fullPath;
      router.replace(route.fullPath);
    };

    // 关闭其他
    const closeOther = (route) => {
      // tabsViewMutations.closeOtherTabs(route)
      store.commit("tabsView/closeOtherTabs", route);
      state.activeKey = route.fullPath;
      router.replace(route.fullPath);
    };

    // 关闭全部
    const closeAll = () => {
      localStorage.removeItem("routes");
      // tabsViewMutations.closeAllTabs()
      store.commit("tabsView/closeAllTabs");
      router.replace("/");
    };

    return {
      ...toRefs(state),
      route,
      tabsList,
      changePage,
      editTabItem,
      removeTab,
      closeLeft,
      closeRight,
      closeOther,
      closeAll,
      reloadPage,
    };
  },
});
