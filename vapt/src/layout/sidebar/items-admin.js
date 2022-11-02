export default [
  {
    title: "Dashboard",
    icon: "mdi-view-dashboard",
    to: "/admin/dashboard",
  },
  {
    title: "Manage Users",
    icon: "mdi-account-group",
    group: "internal",
    children: [
      {
        title: "Users",
        icon: "mdi-account-group",
        to: "/admin/users",
      },
      {
        title: "User Roles",
        icon: "mdi-crown",
        to: "/admin/user-roles",
      },
      {
        title: "User Statuses",
        icon: "mdi-decagram",
        to: "/admin/user-statuses",
      },
    ],
  },
  {
    title: "Manage Stations",
    icon: "mdi-domain",
    group: "internal",
    children: [
      {
        title: "Stations",
        icon: "mdi-domain",
        to: "/admin/users",
      },
      {
        title: "User Roles",
        icon: "mdi-account-cog",
        to: "/admin/user-roles",
      },
    ],
  },

  {
    title: "Car Accidents",
    icon: "mdi-car",
    group: "internal",
    to: "/admin/accidents",
  },
];
