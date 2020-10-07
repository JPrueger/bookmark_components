import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Post from "../views/Post.vue";
import Mybookmarks from "../views/Mybookmarks.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";


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
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
