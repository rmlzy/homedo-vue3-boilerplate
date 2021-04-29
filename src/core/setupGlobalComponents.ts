import { App } from "vue";
import { HmdFooter, TableAction } from "../components";

export function setupGlobalComponents(app: App) {
  app.component(HmdFooter.name, HmdFooter);
  app.component(TableAction.name, TableAction);
}
