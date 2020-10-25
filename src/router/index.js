import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MyBookmarks from "../views/MyBookmarks.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import SuggestBook_Step1 from "../views/SuggestBook_Step1.vue";
import SuggestBook_Step2 from "../views/SuggestBook_Step2.vue";
import Profile from "../views/Profile.vue";
import NotFound from "../views/NotFound.vue";
import AuthorOfTheMonth from "../views/AuthorOfTheMonth.vue";
import TermsOfService from "../views/TermsOfService.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/my-bookmarks",
    name: "MyBookmarks",
    component: MyBookmarks,
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
  {
    path: "/:catchAll(.*)",
    component: NotFound
  },
  {
    path: "/author-of-the-month",
    name: "AuthorOfTheMonth",
    component: AuthorOfTheMonth,
  },
  {
    path: "/terms-of-service",
    name: "TermsOfService",
    component: TermsOfService,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
