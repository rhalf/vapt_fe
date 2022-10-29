import Vue from "vue";
import VueRouter from "vue-router";

import account from "./modules/account.js";

Vue.use(VueRouter);

const routes = [...account];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
