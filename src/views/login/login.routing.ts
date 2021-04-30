export const LoginRouting = {
  path: "/login",
  name: "login",
  meta: { title: "登录" },
  component: () => import(/* webpackChunkName: "login" */ "@/views/login/index.vue"),
  children: [],
};
