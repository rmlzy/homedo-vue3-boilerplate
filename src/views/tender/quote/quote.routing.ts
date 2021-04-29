export const QuoteRouting = [
  {
    path: "/tender/quote/list",
    name: "tender-quote-list",
    meta: { title: "投标报价" },
    component: () =>
      import(
        /* webpackChunkName: "tender-quote" */ "@/views/tender/quote/list/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/quote/create",
    name: "tender-quote-create",
    meta: { title: "新增投标报价" },
    component: () =>
      import(
        /* webpackChunkName: "tender-quote" */ "@/views/tender/quote/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/quote/edit/:id",
    name: "tender-quote-edit",
    meta: { title: "编辑投标报价" },
    component: () =>
      import(
        /* webpackChunkName: "tender-quote" */ "@/views/tender/quote/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/quote/detail/:id",
    name: "tender-quote-detail",
    meta: { title: "投标报价详情" },
    component: () =>
      import(
        /* webpackChunkName: "tender-quote" */ "@/views/tender/quote/detail/index.vue"
      ),
  },
];
