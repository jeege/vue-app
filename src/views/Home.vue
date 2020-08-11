<template>
  <div class="home">
    <ArticleDetail></ArticleDetail>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ArticleDetail from "@/components/ArticleDetail.vue";

@Options({
  components: { ArticleDetail }
})
export default class Home extends Vue {}
</script>
