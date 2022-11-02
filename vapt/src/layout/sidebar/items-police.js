export default [
  {
    title: "Dashboard",
    icon: "mdi-view-dashboard",
    to: "/dashboard",
    meta: {
      roles: ["ADMIN", "POLICE"],
    },
  },
  {
    title: "Manage Users",
    icon: "mdi-account-group",
    group: "internal",
    meta: {
      roles: ["ADMIN"],
    },
    children: [
      {
        title: "Users",
        icon: "mdi-account-group",
        to: "/internal/users",
      },
      {
        title: "User Roles",
        icon: "mdi-account-cog",
        to: "/internal/user-roles",
      },
    ],
  },
  {
    title: "External User",
    icon: "mdi-web",
    group: "external",
    meta: {
      roles: ["POLICE"],
    },
    children: [
      {
        title: "Users",
        icon: "mdi-account-group",
        to: "/external/users",
      },
      {
        title: "User Roles",
        icon: "mdi-account-cog",
        to: "/external/user-roles",
      },
      {
        title: "User Approvals",
        icon: "mdi-account-check",
        to: "/external/user-approvals",
      },
    ],
  },
];
