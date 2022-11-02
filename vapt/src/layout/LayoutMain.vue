<template>
  <v-app>
    <LayoutHeader />
    <LayoutSidebar />
    <!-- Sizes your content based upon application components -->
    <v-main class="pa-5">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LayoutHeader from "./header/LayoutHeader";
import LayoutSidebar from "./sidebar/LayoutSidebar";

export default {
  data() {
    return {
      // expandOnHover: false,
    };
  },
  components: {
    LayoutHeader,
    LayoutSidebar,
  },
};
</script>
