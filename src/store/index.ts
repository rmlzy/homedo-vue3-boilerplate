import { createStore, useStore as baseUseStore, createLogger, Store } from "vuex";
import { App, InjectionKey } from "vue";
import modules from "@/store/modules";
import { IStore } from "./types";

export const key: InjectionKey<Store<IStore>> = Symbol();

const debug = process.env.NODE_ENV !== "production";

const plugins = debug
  ? [
      createLogger({
        filter(mutation, stateBefore, stateAfter) {
          const notNeedDebugs: string[] = ["lockscreen/setLockTime", "lockscreen/setLock"];
          return !notNeedDebugs.includes(mutation.type);
        },
      }),
    ]
  : [];

const store = createStore<IStore>({
  plugins,
  modules,
});

export function useStore() {
  return baseUseStore(key);
}

export function setupStore(app: App) {
  app.use(store, key);
}

export default store;
