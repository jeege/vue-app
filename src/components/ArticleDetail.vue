<template>
  <div class="article markdown" v-html="articleDom"></div>
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
