declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
declare module "*.md" {
  export default string;
}
declare module "punycode";
declare module "hljs" {
  import hljs from 'highlight.js'
  export = hljs
}