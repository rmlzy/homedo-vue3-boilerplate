export const DocRouting = [
  {
    path: "/tender/doc/list",
    name: "tender-doc-list",
    meta: { title: "投标文档管理" },
    component: () =>
      import(
        /* webpackChunkName: "tender-doc" */ "@/views/tender/doc/list/index.vue"
      ),
  },
];
