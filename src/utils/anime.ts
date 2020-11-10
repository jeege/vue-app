import anime from "animejs";
import { App } from "@vue/runtime-core";

export default {
  install: (app: App) => {
    app.config.globalProperties.$anime = anime;
  }
};
