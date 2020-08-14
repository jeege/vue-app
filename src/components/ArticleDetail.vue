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
  ::v-deep {
    blockquote,
    dl,
    ol,
    p,
    pre,
    table,
    ul {
      margin: 0;
      margin-bottom: 16px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: 600;
      line-height: 1.25;
    }

    h3 {
      font-size: 1.5em;
    }
    blockquote {
      padding: 0 1em;
      color: #6a737d;
      border-left: 0.25em solid #dfe2e5;
    }
    a {
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
    }
  }
}
</style>
