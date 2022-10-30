<template>
  <div>
    <router-view></router-view>
    <v-btn @click="logoutHandler">Logout</v-btn>
  </div>
</template>

<script>
import { logout } from "@/api/session";

export default {
  methods: {
    logoutHandler() {
      logout();
    },
  },
};
</script>
