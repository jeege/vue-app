import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import anime from "./utils/anime";
import { Layout, Menu, Breadcrumb, List } from "ant-design-vue";

import "@/assets/scss/global.scss";
import "@/assets/scss/markdown.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(anime)
  .use(Layout)
  .use(Menu)
  .use(Breadcrumb)
  .use(List)
  .mount("#app");
