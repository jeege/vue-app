<template>
  <div class="about">
    <a-list item-layout="horizontal" :data-source="articleList">
      <template v-slot:renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta>
            <template v-slot:title>
              <router-link :to="`${item}.md`">{{ item }} </router-link>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script lang="ts">
import { articles } from "@/utils/utils";
import { Vue } from "vue-class-component";

export default class List extends Vue {
  articleList = articles.keys().map(key => key.replace(/\.\/(.*)\.md$/g, "$1"));
}
</script>

<style lang="scss" scoped></style>
