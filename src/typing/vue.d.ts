declare module 'vue/types/vue' {
    import { RouteLocation, Router } from "vue-router";
    interface Vue {
        $route: RouteLocation,
        $router: Router
    }
}