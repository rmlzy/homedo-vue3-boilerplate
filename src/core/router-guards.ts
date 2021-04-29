import { Router } from "vue-router";

export function createRouterGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    next();
  });

  router.afterEach((to, from, failure) => {
    document.title = (to?.meta?.title as string) || document.title;
  });

  router.onError((error) => {
    console.log(error, "路由错误");
  });
}
