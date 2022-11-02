<template>
  <v-app-bar app light fluid>
    <v-app-bar-nav-icon @click="setSidebar(!sidebar)" color="primary" />

    <v-toolbar-title class="px-2">
      <v-row>
        <v-col>
          <div :width="400" class="primary--text font-weight-bold">IBRVAPT</div>
        </v-col>
        <!-- <v-col cols="auto">
          <BaseLogo
            @click="gotoHandler('Dashboard')"
            :source="require('@/assets/images/logo.svg')"
            :height="34"
            :width="34"
          />
        </v-col> -->
      </v-row>
    </v-toolbar-title>

    <v-spacer />

    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn fab v-on="on" class="mr-1" text small color="primary">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
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

    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn fab v-on="on" class="mr-1" text small color="primary">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.routeName"
          @click="gotoHandler(link.routeName)"
        >
          <v-list-item-icon>
            <v-icon right>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title left>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
// import BaseLogo from "@/components/common/BaseLogo";

import { mapGetters, mapActions } from "vuex";
import { signOut } from "@/api/session";

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
        // { routeName: "ChangePassword", title: "Change Password" },
        { icon: "mdi-logout-variant", routeName: "SignOut", title: "Sign Out" },
      ],
    };
  },
  computed: {
    ...mapGetters("app", ["sidebar"]),
    ...mapGetters("user", ["user"]),
  },
  methods: {
    ...mapActions("app", ["setSidebar"]),

    signOutHandler() {
      signOut();
    },
    gotoHandler(routeName) {
      if (routeName === "SignOut") {
        this.signOutHandler();
      } else if (this.$route.name !== routeName) {
        this.$router.push({ name: routeName });
      }
    },
  },
  components: {},
};
</script>
