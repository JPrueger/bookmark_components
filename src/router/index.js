import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Post from "../views/Post.vue";
import Mybookmarks from "../views/Mybookmarks.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/post/:postId",
    name: "PostDetail",
    component: Post,
  },
  {
    path: "/my-bookmarks",
    name: "Mybookmarks",
    component: Mybookmarks,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
