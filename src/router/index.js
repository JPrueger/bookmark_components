import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Mybookmarks from "../views/Mybookmarks.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import SuggestBook_Step1 from "../views/SuggestBook_Step1.vue";
import SuggestBook_Step2 from "../views/SuggestBook_Step2.vue";
import Profile from "../views/Profile.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    component:   Login,
  },
  {
    path: "/suggest-book-step-1",
    name: "SuggestBook_Step1",
    component: SuggestBook_Step1,
  },
  {
    path: "/suggest-book-step-2",
    name: "SuggestBook_Step2",
    component: SuggestBook_Step2,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
