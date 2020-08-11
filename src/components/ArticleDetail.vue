<template>
  <div class="article" v-html="article"></div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import atricle from "@/articles/article1.md";
import { md } from "@/utils/utils";

export default class Home extends Vue {
  article = md.render(atricle);
}
</script>

<style></style>
