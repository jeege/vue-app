<template>
  <div class="article">
    <div ref="article" class="markdown" v-html="articleDom"></div>
    <div class="nav" :class="{ hide: !isShowNav }">
      <div class="control-btn" @click="toggleNav">
        {{ isShowNav ? "收起" : "展开" }}
      </div>
      <a
        v-for="(item, index) in nav"
        :key="index"
        class="nav-item"
        :class="item.type"
        @click="scrollTo(item.offsetTop)"
      >
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { md } from "@/utils/utils";

interface Nav {
  title: string;
  offsetTop: number;
  type: string;
}

@Options({
  props: {
    article: String
  }
})
export default class ArticleDetail extends Vue {
  article!: string;
  nav: Nav[] = [];
  isShowNav = true;
  get wrapOffsetTop() {
    return this.$el.parentNode.offsetTop;
  }
  get articleDom() {
    return md.render(this.article);
  }
  setNav() {
    const titleList = (this.$refs.article as HTMLElement).querySelectorAll<
      HTMLElement
    >("h1,h2,h3");
    this.nav = Array.from(titleList).map(item => ({
      title: item.innerText,
      offsetTop: item.offsetTop,
      type: item.tagName.toLowerCase()
    }));
  }
  toggleNav() {
    this.isShowNav = !this.isShowNav;
  }
  scrollTo(top: number) {
    this.$anime({
      targets: ".main-content",
      scrollTop: top - this.wrapOffsetTop + 12,
      duration: 300,
      easing: "linear"
    });
  }
  mounted() {
    this.$nextTick(() => {
      this.setNav();
    });
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  right: 24px;
  top: 48px;
  width: 300px;
  box-shadow: 0 0 10px #ccc inset;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  transition: right 0.3s;
  &.hide {
    right: -300px;
  }
  &-item {
    display: block;
    color: rgba(0, 0, 0, 0.65);
    &.h1 {
      font-size: 16px;
      font-weight: 600;
    }
    &.h2 {
      font-size: 16px;
      padding-left: 20px;
      font-weight: 600;
    }
    &.h3 {
      font-size: 14px;
      padding-left: 40px;
    }
    &:hover {
      color: #40a9ff;
    }
  }
  p {
    margin: 0;
    margin-bottom: 5px;
  }
  .control-btn {
    position: absolute;
    right: 100%;
    top: 20px;
    width: 40px;
    height: 40px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: rgba(0, 21, 41, 0.7);
    cursor: pointer;
    color: #fff;
    font-size: 12px;
    line-height: 40px;
    text-align: center;
    &:hover {
      background: rgba(0, 21, 41, 0.9);
    }
  }
}
</style>
