export const FollowRouting = [
  {
    path: "/project/follow/list",
    name: "project-follow-list",
    meta: { title: "项目跟踪" },
    component: () =>
      import(
        /* webpackChunkName: "project-follow" */ "@/views/project/follow/list/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/project/follow/create",
    name: "project-follow-create",
    meta: { title: "添加项目跟踪记录" },
    component: () =>
      import(
        /* webpackChunkName: "project-follow" */ "@/views/project/follow/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/project/follow/detail/:id",
    name: "project-follow-detail",
    meta: { title: "项目跟踪详情" },
    component: () =>
      import(
        /* webpackChunkName: "project-follow" */ "@/views/project/follow/detail/index.vue"
      ),
  },
];
