<template>
  <BaseSheet class="pa-16" style="height: 100vh">
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="6">
        <v-row>
          <v-col class="d-flex align-center justify-center">
            <BaseTitle class="text-h1">404</BaseTitle>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col class="d-flex align-center justify-center">
            <BaseTitle>Page not found</BaseTitle>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col class="d-flex align-center justify-center">
            <BaseTitle>Sorry Page not found try to navigate back!</BaseTitle>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="d-flex align-center justify-center">
            <BaseButton
              custom-class="primary"
              @click="$router.push({ name: 'AdminDashboard' })"
              >Home</BaseButton
            >
          </v-col>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </BaseSheet>
</template>

<script>
import BaseSheet from "@/components/common/BaseSheet.vue";
import BaseTitle from "@/components/common/BaseTitle.vue";
import BaseButton from "@/components/common/BaseButton.vue";

export default {
  components: { BaseSheet, BaseTitle, BaseButton },
  mounted() {
    console.log("not-found");
  },
};
</script>

<style></style>
