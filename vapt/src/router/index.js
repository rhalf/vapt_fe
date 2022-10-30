import Vue from "vue";
import VueRouter from "vue-router";

import account from "./modules/account.js";
import admin from "./modules/admin.js";
import police from "./modules/police.js";

Vue.use(VueRouter);

const routes = [
  // { path: "/", name: "Dasboard", meta: { authenticated: true, type: "ADMIN" } },
  ...account,
  ...admin,
  ...police,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
