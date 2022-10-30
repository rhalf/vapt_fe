const routes = [
  {
    path: "/account",
    name: "Account",
    component: () => import("@/views/account/AccountView.vue"),
    children: [
      {
        path: "login",
        name: "AccountLogin",
        meta: { authenticated: false },
        component: () => import("@/views/account/components/AccountLogin.vue"),
      },
      {
        path: "verify",
        name: "AccountVerify",
        meta: { authenticated: true },
        component: () => import("@/views/account/components/AccountVerify.vue"),
      },
      {
        path: "register",
        name: "AccountRegister",
        meta: { authenticated: false },
        component: () =>
          import("@/views/account/components/AccountRegister.vue"),
      },
    ],
  },
];

export default routes;
