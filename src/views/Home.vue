<template>
  <a-layout>
    <a-layout-sider>
      <a-menu>
        <a-menu-item v-for="(item, index) in menuList" :key="index">
          <router-link :to="item.link">{{ item.title }}</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content class="main-content">
        <div class="main-wrap">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Router } from "vue-router";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {
  $router!: Router;
  menuList = [
    {
      title: "文章列表",
      link: "/articles"
    }
  ];
}
</script>

<style lang="scss" scoped>
.main-content {
  position: relative;
  margin: 12px;
  padding: 12px;
  background: #fff;
  height: calc(100vh - 24px);
  overflow-y: auto;
  &::-webkit-scrollbar-track-piece {
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    background-clip: padding-box;
    min-height: 28px;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: #d2d2d2;
    }
  }
  .main-wrap {
    width: 100%;
    height: 100%;
  }
}
</style>
