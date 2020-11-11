<template>
  <a-list item-layout="horizontal" :data-source="articleList">
    <template v-slot:renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta>
          <template v-slot:title>
            <router-link :to="`/article/${item.title}`"
              >{{ item.title }}
            </router-link>
          </template>
        </a-list-item-meta>
        <div class="update-time">
          更新时间：{{ formatTime(item.updateTime) }}
        </div>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { formatTime } from "@/utils/utils";
export default class List extends Vue {
  articleList = process.env.ARTICLE_LIST;
  formatTime(time: number) {
    return formatTime(time);
  }
}
</script>

<style lang="scss" scoped>
.update-time {
  color: #ccc;
}
</style>
