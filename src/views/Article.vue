<template>
  <ArticleDetail :article="article"></ArticleDetail>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ArticleDetail from "@/components/ArticleDetail.vue";
import { articles } from "@/utils/utils";
import { RouteLocation } from "vue-router";

@Options({
  components: { ArticleDetail }
})
export default class Home extends Vue {
  $route!: RouteLocation;
  get article() {
    return articles(`./${this.$route.params.article}.md`).default;
  }
}
</script>
