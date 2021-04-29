export const MaterialRouting = [
  {
    path: "/tender/material/list",
    name: "tender-material-list",
    meta: { title: "招投标文件购买记录" },
    component: () =>
      import(
        /* webpackChunkName: "tender-material" */ "@/views/tender/material/list/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/material/create",
    name: "tender-material-create",
    meta: { title: "新增招投标文件购买申请" },
    component: () =>
      import(
        /* webpackChunkName: "tender-material" */ "@/views/tender/material/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/material/edit/:id",
    name: "tender-material-edit",
    meta: { title: "编辑招投标文件购买申请" },
    component: () =>
      import(
        /* webpackChunkName: "tender-material" */ "@/views/tender/material/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/material/detail/:id",
    name: "tender-material-detail",
    meta: { title: "招投标文件购买详情" },
    component: () =>
      import(
        /* webpackChunkName: "tender-material" */ "@/views/tender/material/detail/index.vue"
      ),
  },
];
