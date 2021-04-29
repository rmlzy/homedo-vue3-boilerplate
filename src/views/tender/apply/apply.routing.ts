export const ApplyRouting = [
  {
    path: "/tender/apply/list",
    name: "tender-apply-list",
    meta: { title: "投标申请" },
    component: () =>
      import(
        /* webpackChunkName: "tender-apply" */ "@/views/tender/apply/list/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/apply/create",
    name: "tender-apply-create",
    meta: { title: "新增投标申请" },
    component: () =>
      import(
        /* webpackChunkName: "tender-apply" */ "@/views/tender/apply/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/apply/edit/:id",
    name: "tender-apply-edit",
    meta: { title: "编辑投标申请" },
    component: () =>
      import(
        /* webpackChunkName: "tender-apply" */ "@/views/tender/apply/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/apply/detail/:id",
    name: "tender-apply-detail",
    meta: { title: "投标申请详情" },
    component: () =>
      import(
        /* webpackChunkName: "tender-apply" */ "@/views/tender/apply/detail/index.vue"
      ),
  },
];
