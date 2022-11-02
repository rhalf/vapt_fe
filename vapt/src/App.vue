<template>
  <v-app>
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
