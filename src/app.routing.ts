import { DashboardRouting } from "@/views/dashboard/dashboard.routing";
import { LoginRouting } from "@/views/login/login.routing";
import { ErrorRouting } from "@/views/error/error.routing";
import { ProjectRouting } from "@/views/project/project.routing";
import { RouterView } from "vue-router";

const NotFoundRouting = {
  path: "/:pathMatch(.*)*",
  name: "not-found",
  redirect: "/error/404",
  component: () =>
    import(/* webpackChunkName: "404" */ "@/views/error/404.vue"),
  children: [],
};

const RedirectRouting = {
  hidden: true,
  path: "/redirect/:path*",
  name: "redirect",
  component: RouterView,
  meta: { title: "重定向" },
  children: [
    {
      hidden: true,
      path: "",
      name: "redirect",
      component: () => import("@/views/redirect/index.vue"),
      meta: { keepAlive: false },
    },
  ],
};

export const AppRouting = [
  {
    path: "/",
    name: "layout",
    redirect: "/dashboard",
    component: () =>
      import(/* webpackChunkName: "layout" */ "@/layout/index.vue"),
    children: [DashboardRouting, ProjectRouting],
  },
  LoginRouting,
  ErrorRouting,
  NotFoundRouting,
  RedirectRouting,
];
