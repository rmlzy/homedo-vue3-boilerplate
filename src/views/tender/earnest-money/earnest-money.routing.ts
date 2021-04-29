export const EarnestMoneyRouting = [
  {
    path: "/tender/earnest-money/list",
    name: "tender-earnest-money-list",
    meta: { title: "保证金申请" },
    component: () =>
      import(
        /* webpackChunkName: "tender-earnest-money" */ "@/views/tender/earnest-money/list/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/earnest-money/create",
    name: "tender-earnest-money-create",
    meta: { title: "新增保证金申请" },
    component: () =>
      import(
        /* webpackChunkName: "tender-earnest-money" */ "@/views/tender/earnest-money/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/earnest-money/edit/:id",
    name: "tender-earnest-money-edit",
    meta: { title: "编辑保证金申请" },
    component: () =>
      import(
        /* webpackChunkName: "tender-earnest-money" */ "@/views/tender/earnest-money/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/earnest-money/detail/:id",
    name: "tender-earnest-money-detail",
    meta: { title: "保证金申请详情" },
    component: () =>
      import(
        /* webpackChunkName: "tender-earnest-money" */ "@/views/tender/earnest-money/detail/index.vue"
      ),
  },
];
