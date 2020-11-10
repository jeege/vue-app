import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RoutePage from "../views/RoutePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      breadcrumbName: "首页"
    },
    children: [
      {
        path: "/article",
        component: RoutePage,
        meta: {
          breadcrumbName: "文章列表"
        },
        children: [
          {
            path: "",
            name: "articleList",
            component: () =>
              import(
                /* webpackChunkName: "articles" */ "../views/ArticleList.vue"
              ),
            meta: {
              breadcrumbName: "文章列表"
            }
          },
          {
            path: ":article",
            name: "article",
            component: () =>
              import(/* webpackChunkName: "article" */ "../views/Article.vue"),
            meta: {
              breadcrumbName: "文章详情"
            }
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name === "Home") {
    next({ name: "Articles" });
  }
  next();
});

export default router;
