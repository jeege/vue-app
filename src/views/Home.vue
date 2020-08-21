<template>
  <Container>
    <Header>
      <router-link to="about">关于</router-link>
    </Header>
    <div class="home">
      <ul>
        <li v-for="(article, index) in articleList" :key="index">
          <router-link :to="`${article}.md`">{{ article }}</router-link>
        </li>
      </ul>
    </div>
  </Container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Container from "@/components/Container.vue";
import Header from "@/components/Header.vue";
import { articles } from "@/utils/utils";

@Options({
  components: { Container, Header }
})
export default class Home extends Vue {
  articleList = articles.keys().map(key => key.replace(/\.\/(.*)\.md$/g, "$1"));
  mounted() {
    console.log(1111);
  }
}
</script>
