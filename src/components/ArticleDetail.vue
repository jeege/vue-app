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

<style lang="scss" scoped>
.article {
  font-size: 14px;
  ::v-deep(blockquote),
  ::v-deep(dl),
  ::v-deep(ol),
  ::v-deep(p),
  ::v-deep(pre),
  ::v-deep(table),
  ::v-deep(ul) {
    margin: 0;
    margin-bottom: 16px;
  }
  ::v-deep(h1),
  ::v-deep(h2),
  ::v-deep(h3),
  ::v-deep(h4),
  ::v-deep(h5),
  ::v-deep(h6) {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }
  ::v-deep(h3) {
    font-size: 1.5em;
  }
  ::v-deep(blockquote) {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }
  ::v-deep(a) {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
}
</style>
