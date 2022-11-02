<template>
  <BaseSheet>
    <v-row dense>
      <v-col>
        <BaseTitle>Users</BaseTitle>
        <BaseSubTitle>List of all users</BaseSubTitle>
      </v-col>
    </v-row>
  </BaseSheet>
</template>

<script>
import BaseSheet from "@/components/common/BaseSheet.vue";
import BaseTitle from "@/components/common/BaseTitle.vue";
import BaseSubTitle from "@/components/common/BaseSubTitle.vue";

import { getAllUsers } from "@/api/session";
export default {
  components: { BaseSheet, BaseTitle, BaseSubTitle },
  mounted() {
    getAllUsers();
  },
};
</script>

<style></style>
