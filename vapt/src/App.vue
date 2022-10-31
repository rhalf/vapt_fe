<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-main>
      <router-view />
    </v-main>

    <BaseSnackbar ref="snackbar" />
    <BaseLoadingSpinner ref="loading" />
  </v-app>
</template>

<script>
import BaseLoadingSpinner from "@/components/common/BaseLoadingSpinner";
import BaseSnackbar from "@/components/common/BaseSnackbar";

export default {
  name: "App",
  components: {
    BaseLoadingSpinner,
    BaseSnackbar,
  },
  data: () => ({
    //
  }),
  mounted() {
    this.$root.snackbar = this.$refs.snackbar.open;
    this.$root.loading = {
      show: this.$refs.loading.show,
      hide: this.$refs.loading.hide,
    };
  },
};
</script>
