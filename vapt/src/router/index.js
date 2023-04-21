import Vue from "vue";
import VueRouter from "vue-router";

import account from "./modules/account.js";
import admin from "./modules/admin.js";
import police from "./modules/police.js";

Vue.use(VueRouter);

const routes = [
  ...account,
  ...admin,
  ...police,
  {
    path: "/",
    redirect: { name: "AdminDashboard" },
  },
  {
    path: "/page/not-found",
    name: "PageNotFound",
    component: () => import("@/views/page/NotFound.vue"),
  },
  {
    path: "*",
    redirect: "/page/not-found",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
