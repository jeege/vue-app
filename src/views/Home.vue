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
      <a-breadcrumb>
        <a-breadcrumb-item
          v-for="(item, index) in breadcrumbList"
          :key="item.name"
        >
          <template v-if="index === $route.matched.length - 1">
            {{ item.meta.breadcrumbName }}
          </template>
          <a v-else :href="item.path">
            {{ item.meta.breadcrumbName }}
          </a>
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content class="main-content">
        <div class="main-wrap">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Router, RouteLocation } from "vue-router";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {
  $route!: RouteLocation;
  $router!: Router;
  menuList = [
    {
      title: "文章列表",
      link: "/article"
    }
  ];
  get breadcrumbList() {
    const paths: string[] = [];
    return this.$route.matched.filter(item => {
      if (!paths.includes(item.path)) {
        paths.push(item.path);
        return true;
      }
      return false;
    });
  }
  mounted() {
    this.$router.push(this.menuList[0].link);
  }
}
</script>

<style lang="scss" scoped>
.ant-breadcrumb {
  height: 36px;
  line-height: 36px;
  margin-left: 12px;
}
.main-content {
  position: relative;
  margin: 12px;
  margin-top: 0;
  padding: 12px;
  background: #fff;
  height: calc(100vh - 48px);
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
