const routes = [
  {
    path: "/account",
    name: "Account",
    component: () => import("@/views/account/AccountView.vue"),
    children: [
      {
        path: "login",
        name: "AccountLogin",
        component: () => import("@/views/account/components/LoginView.vue"),
      },
      {
        path: "register",
        name: "AccountRegister",
        component: () => import("@/views/account/components/RegisterView.vue"),
      },
    ],
  },
];

export default routes;
