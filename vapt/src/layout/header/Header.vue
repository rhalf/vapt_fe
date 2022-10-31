<template>
  <v-app-bar app dark clipped-left clipped-right color="primary">
    <v-toolbar-title class="align-center d-flex logo-width">
      <span class="logo-icon">
        <BaseLogo
          @click="gotoHandler('Dashboard')"
          :source="require('@/assets/images/logo.svg')"
          :height="34"
          :width="34"
        />
      </span>
    </v-toolbar-title>

    <v-app-bar-nav-icon
      @click="
        $vuetify.breakpoint.smAndDown
          ? SET_SIDEBAR(!sidebar)
          : $emit('input', !value)
      "
    />

    <v-spacer />

    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on }">
        <a v-on="on" class="mr-1">
          <span class="white--text text-uppercase body-2">My Account</span>
          <v-icon>mdi-menu-down</v-icon>
        </a>
      </template>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.routeName"
          @click="gotoHandler(link.routeName)"
        >
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import BaseLogo from "@/components/common/BaseLogo";

import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      links: [
        { routeName: "ChangePassword", title: "Change Password" },
        { routeName: "Logout", title: "Logout" },
      ],
    };
  },
  computed: {
    ...mapGetters("app", ["sidebar"]),
  },
  methods: {
    ...mapActions("app", ["SET_SIDEBAR"]),

    logoutHandler() {
      this.$store.dispatch("user/logout");

      this.$router.push({ name: "Session" });
    },
    gotoHandler(routeName) {
      if (routeName === "Logout") {
        this.logoutHandler();
      } else if (this.$route.name !== routeName) {
        this.$router.push({ name: routeName });
      }
    },
  },
  components: {
    BaseLogo,
  },
};
</script>
