<template>
  <div class="article" v-html="articleDom"></div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { md } from "@/utils/utils";

@Options({
  props: {
    article: String
  }
})
export default class Home extends Vue {
  article!: string;
  get articleDom() {
    return md.render(this.article);
  }
}
</script>

<style>
.article {
  font-size: 14px;
}
.article blockquote,
.article dl,
.article ol,
.article p,
.article pre,
.article table,
.article ul {
  margin: 0;
  margin-bottom: 16px;
}
.article h3 {
  font-size: 1.5em;
}
.article h1,
.article h2,
.article h3,
.article h4,
.article h5,
.article h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}
.article blockquote {
  padding: 0 1em;
  color: #6a737d;
  border-left: 0.25em solid #dfe2e5;
}
.article a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
</style>
