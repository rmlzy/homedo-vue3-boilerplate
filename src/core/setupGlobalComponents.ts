import { App } from "vue";
import {
  HmdPage,
  HmdFooter,
  HmdTableAction,
  HmdFont,
  HmdAttachmentTable,
  EmptyLink,
} from "../components";

export function setupGlobalComponents(app: App) {
  app.component(HmdPage.name, HmdPage);
  app.component(HmdFooter.name, HmdFooter);
  app.component(HmdTableAction.name, HmdTableAction);
  app.component(HmdFont.name, HmdFont);
  app.component(HmdAttachmentTable.name, HmdAttachmentTable);
  app.component(EmptyLink.name, EmptyLink);
}
