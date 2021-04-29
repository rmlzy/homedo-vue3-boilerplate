export const ReconnoiterRouting = [
  {
    path: "/tender/reconnoiter/list",
    name: "tender-reconnoiter-list",
    meta: { title: "勘察记录" },
    component: () =>
      import(
        /* webpackChunkName: "tender-reconnoiter" */ "@/views/tender/reconnoiter/list/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/reconnoiter/create",
    name: "tender-reconnoiter-create",
    meta: { title: "新增勘察记录" },
    component: () =>
      import(
        /* webpackChunkName: "tender-reconnoiter" */ "@/views/tender/reconnoiter/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/reconnoiter/edit/:id",
    name: "tender-reconnoiter-edit",
    meta: { title: "编辑勘察记录" },
    component: () =>
      import(
        /* webpackChunkName: "tender-reconnoiter" */ "@/views/tender/reconnoiter/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/reconnoiter/detail/:id",
    name: "tender-reconnoiter-detail",
    meta: { title: "勘察记录详情" },
    component: () =>
      import(
        /* webpackChunkName: "tender-reconnoiter" */ "@/views/tender/reconnoiter/detail/index.vue"
      ),
  },
];
