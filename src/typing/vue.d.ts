import "vue";
import anime from "animejs";

export {};
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $anime: typeof anime;
  }
}
