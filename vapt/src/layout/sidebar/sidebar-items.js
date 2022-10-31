export default [
  {
    title: "Dashboard",
    icon: "mdi-view-dashboard",
    to: "/dashboard",
    meta: {
      userType: ["EXTERNAL_USER", "INTERNAL_USER"],
    },
  },
  {
    title: "Internal User",
    icon: "mdi-domain",
    group: "internal",
    meta: {
      userType: ["INTERNAL_USER"],
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
      userType: ["INTERNAL_USER"],
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
