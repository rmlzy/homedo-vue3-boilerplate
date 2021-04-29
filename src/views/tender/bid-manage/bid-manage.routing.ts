export const BidManageRouting = [
  {
    path: "/tender/bid-manage/list",
    name: "tender-bid-manage-list",
    meta: { title: "开标管理" },
    component: () =>
      import(
        /* webpackChunkName: "tender-bid-manage" */ "@/views/tender/bid-manage/list/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/bid-manage/create",
    name: "tender-bid-manage-create",
    meta: { title: "开标登记" },
    component: () =>
      import(
        /* webpackChunkName: "tender-bid-manage" */ "@/views/tender/bid-manage/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/tender/bid-manage/detail/:id",
    name: "tender-bid-manage-detail",
    meta: { title: "开标详情" },
    component: () =>
      import(
        /* webpackChunkName: "tender-bid-manage" */ "@/views/tender/bid-manage/detail/index.vue"
      ),
  },
];
