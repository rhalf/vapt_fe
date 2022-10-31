const routes = [
  {
    path: "/police",
    name: "Police",
    component: () => import("@/views/police/PoliceView.vue"),
    children: [
      {
        path: "dashboard",
        name: "PoliceDashboard",
        meta: { authenticated: true, type: "POLICE" },
        component: () =>
          import("@/views/police/components/PoliceDashboard.vue"),
      },
    ],
  },
];

export default routes;
