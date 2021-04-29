import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createRouterGuards } from "@/core/router-guards";
import { AppRouting } from "@/app.routing";

const router = createRouter({
  history: createWebHashHistory(""),
  routes: AppRouting,
});

export function setupRouter(app: App) {
  app.use(router);
  createRouterGuards(router);
}
export default router;
