import { RouterView } from "vue-router";

export const ErrorRouting = {
  hidden: true,
  path: "/error",
  name: "error",
  redirect: "/error/404",
  component: RouterView,
  meta: { title: "错误页" },
  children: [
    {
      path: "/error/404",
      name: "error-404",
      meta: { title: "404" },
      component: () => import(/* webpackChunkName: "404" */ "@/views/error/404.vue"),
    },
  ],
};
