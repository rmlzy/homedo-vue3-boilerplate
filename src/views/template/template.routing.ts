import { RouterView } from "vue-router";
import { TableOutlined } from "@ant-design/icons-vue";

export const TemplateRouting = {
  path: "/template",
  name: "template",
  redirect: "/template/list",
  component: RouterView,
  meta: { title: "模板", icon: TableOutlined },
  children: [
    {
      path: "/template/list",
      name: "template-list",
      meta: { title: "列表页" },
      component: () =>
        import(/* webpackChunkName: "template" */ "@/views/template/list/index.vue")
    },
    {
      path: "/template/form",
      name: "template-form",
      meta: { title: "表单页" },
      component: () =>
        import(/* webpackChunkName: "template" */ "@/views/template/form/index.vue"),
    },
    {
      hidden: true,
      path: "/template/detail/:id",
      name: "template-detail",
      meta: { title: "详情页" },
      component: () =>
        import(/* webpackChunkName: "template" */ "@/views/template/detail/index.vue"),
    },
  ]
};
