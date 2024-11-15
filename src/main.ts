import uviewPlus from 'uview-plus'
import { createPinia } from 'pinia'

import { createSSRApp } from "vue";
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus)
  app.use(createPinia())
  return {
    app,
  };
}
