import { RouteLocationNormalized } from "vue-router";

export type RouteItem = Partial<RouteLocationNormalized> & {
  fullPath: string;
  name: string;
};

export type ITabsViewState = {
  tabsList: RouteItem[]; // 标签页
};

export const state: ITabsViewState = {
  tabsList: [],
};
