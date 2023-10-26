import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/features/home/Home.vue";
import Shop from "@/features/shop/Shop.vue";
import About from "@/features/about/About.vue";
import Blog from "@/features/blog/Blog.vue";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: "/shop",
        name: "Shop",
        component: Shop
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return {top: 0, left: 0, behavior: 'smooth'}
    }
})

export default router;