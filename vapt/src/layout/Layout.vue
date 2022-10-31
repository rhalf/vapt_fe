<template>
  <v-app>
    <Header v-model="expandOnHover" />

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <Sidebar :expand-on-hover.sync="expandOnHover" />
  </v-app>
</template>

<script>
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

export default {
  data() {
    return {
      expandOnHover: false,
    };
  },
  components: {
    Header,
    Sidebar,
  },
};
</script>
