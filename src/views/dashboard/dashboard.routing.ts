import { DashboardOutlined } from "@ant-design/icons-vue";

export const DashboardRouting = {
  path: "/dashboard",
  name: "dashboard",
  component: () =>
    import(
      /* webpackChunkName: "dashboard-welcome" */ "@/views/dashboard/welcome/index.vue"
    ),
  meta: { title: "控制台", icon: DashboardOutlined },
};
