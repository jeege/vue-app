<template>
  <a-list item-layout="horizontal" :data-source="articleList">
    <template v-slot:renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta>
          <template v-slot:title>
            <router-link :to="`/article/${item}`">{{ item }} </router-link>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts">
import { articles } from "@/utils/utils";
import { Vue } from "vue-class-component";

export default class List extends Vue {
  articleList = articles.keys().map(key => key.replace(/\.\/(.*)\.md$/g, "$1"));
}
</script>

<style lang="scss" scoped></style>
