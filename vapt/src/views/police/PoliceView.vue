<template>
  <div>
    <router-view></router-view>
    <v-btn @click="logoutHandler">Logout</v-btn>
  </div>
</template>

<script>
import { signOut } from "@/api/session";

export default {
  methods: {
    logoutHandler() {
      signOut();
    },
  },
};
</script>
