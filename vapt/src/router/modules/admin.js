const routes = [
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/admin/AdminView.vue"),
    children: [
      {
        path: "dashboard",
        name: "AdminDashboard",
        meta: { authenticated: true, type: "ADMIN" },
        component: () => import("@/views/admin/components/AdminDashboard.vue"),
      },

      {
        path: "users",
        name: "AdminUsers",
        meta: { authenticated: true, type: "ADMIN" },
        component: () => import("@/views/admin/components/AdminUsers.vue"),
      },
    ],
  },
];

export default routes;
