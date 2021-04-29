/**
 * 标签页
 */
import { state } from "./state";
import { mutations } from "./mutations";

export type { ITabsViewState } from "./state";

export default {
  namespaced: true,
  state,
  mutations,
};
