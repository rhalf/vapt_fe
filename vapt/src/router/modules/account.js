const routes = [
  {
    path: "/account",
    name: "Account",
    component: () => import("@/views/account/AccountView.vue"),
    children: [
      {
        path: "login",
        name: "AccountSignIn",
        meta: { authenticated: false },
        component: () => import("@/views/account/components/AccountSignIn.vue"),
      },
      {
        path: "reset",
        name: "AccountReset",
        meta: { authenticated: false },
        component: () => import("@/views/account/components/AccountReset.vue"),
      },
      {
        path: "register",
        name: "AccountSignUp",
        meta: { authenticated: false },
        component: () => import("@/views/account/components/AccountSignUp.vue"),
      },
    ],
  },
];

export default routes;
