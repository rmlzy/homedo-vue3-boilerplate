import { createApp } from "vue";
import App from "./app.vue";
import { setupStore } from "@/store";
import {
  router,
  setupRouter,
  setupAntDesign,
  setupGlobalDirectives,
  setupGlobalComponents,
  setupGlobalMethods,
} from "@/core";

const app = createApp(App);

setupAntDesign(app);
setupStore(app);
setupRouter(app);
setupGlobalComponents(app);
setupGlobalDirectives(app);
setupGlobalMethods(app);

router.isReady().then(() => app.mount("#app"));
