<template>
  <div class="home">
    <ul>
      <li v-for="(article, index) in articleList" :key="index">
        <router-link :to="`${article}.md`">{{ article }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { articles } from "@/utils/utils";

@Options({})
export default class Home extends Vue {
  articleList = articles.keys().map(key => key.replace(/\.\/(.*)\.md$/g, "$1"));
}
</script>
