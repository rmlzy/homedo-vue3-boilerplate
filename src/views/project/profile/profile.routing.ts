export const ProfileRouting = [
  {
    path: "/project/profile/list",
    name: "project-profile-list",
    meta: { title: "项目信息" },
    component: () =>
      import(
        /* webpackChunkName: "project-profile" */ "@/views/project/profile/list/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/project/profile/create",
    name: "project-profile-create",
    meta: { title: "新建项目" },
    component: () =>
      import(
        /* webpackChunkName: "project-profile" */ "@/views/project/profile/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/project/profile/edit/:id",
    name: "project-profile-edit",
    meta: { title: "编辑项目" },
    component: () =>
      import(
        /* webpackChunkName: "project-profile" */ "@/views/project/profile/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/project/profile/detail/:id",
    name: "project-profile-detail",
    meta: { title: "项目详情" },
    component: () =>
      import(
        /* webpackChunkName: "project-profile" */ "@/views/project/profile/detail/index.vue"
      ),
  },
];
