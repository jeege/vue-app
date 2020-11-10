<template>
  <ArticleDetail :article="article"></ArticleDetail>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ArticleDetail from "@/components/ArticleDetail.vue";
import { articles } from "@/utils/utils";

@Options({
  components: { ArticleDetail }
})
export default class Home extends Vue {
  get article() {
    return articles(`./${this.$route.params.article}.md`).default;
  }
}
</script>
