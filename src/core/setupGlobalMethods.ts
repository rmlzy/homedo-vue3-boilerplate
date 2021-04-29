import { App } from "vue";

export function setupGlobalMethods(app: App) {
  app.config.globalProperties.sayHi = function () {
    console.log("hi");
  };
}
