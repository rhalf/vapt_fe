<template>
  <v-row>
    <v-col cols="3">
      <BaseCard class="primary--text">
        <v-row dense no-gutters>
          <v-col cols="auto">
            <v-sheet :width="5" :height="90" class="primary"></v-sheet>
          </v-col>
          <v-col>
            <v-card-title>Number of Accidents</v-card-title>
            <v-card-subtitle>{{ 0 }}</v-card-subtitle>
          </v-col>
          <v-col cols="3" class="d-flex align-center justify-center">
            <v-btn fab outlined text color="primary">
              <v-icon x-large>mdi-car</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </BaseCard>
    </v-col>
    <v-col cols="3">
      <BaseCard class="green--text">
        <v-row dense no-gutters>
          <v-col cols="auto">
            <v-sheet :width="5" :height="90" class="green"></v-sheet>
          </v-col>
          <v-col>
            <v-card-title>Number of Users</v-card-title>
            <v-card-subtitle>{{ 0 }}</v-card-subtitle>
          </v-col>
          <v-col cols="3" class="d-flex align-center justify-center">
            <v-btn fab outlined text color="green">
              <v-icon x-large>mdi-account-multiple</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </BaseCard>
    </v-col>
  </v-row>
</template>

<script>
import BaseCard from "@/components/common/BaseCard.vue";
export default {
  components: { BaseCard },
};
</script>

<style></style>
