export const SolutionRouting = [
  {
    path: "/project/solution/list",
    name: "project-solution-list",
    meta: { title: "技术方案" },
    component: () =>
      import(
        /* webpackChunkName: "project-solution" */ "@/views/project/solution/list/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/project/solution/create",
    name: "project-solution-create",
    meta: { title: "新增技术方案" },
    component: () =>
      import(
        /* webpackChunkName: "project-solution" */ "@/views/project/solution/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/project/solution/edit/:id",
    name: "project-solution-edit",
    meta: { title: "编辑技术方案" },
    component: () =>
      import(
        /* webpackChunkName: "project-solution" */ "@/views/project/solution/form/index.vue"
      ),
  },
  {
    hidden: true,
    path: "/project/solution/detail/:id",
    name: "project-solution-detail",
    meta: { title: "项目跟踪详情" },
    component: () =>
      import(
        /* webpackChunkName: "project-solution" */ "@/views/project/solution/detail/index.vue"
      ),
  },
];
