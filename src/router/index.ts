import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/articles",
        name: "Articles",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "articles" */ "../views/ArticleList.vue")
      },
      {
        path: "/:article",
        name: "Article",
        component: () =>
          import(/* webpackChunkName: "article" */ "../views/Article.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
