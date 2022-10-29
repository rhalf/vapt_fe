<template>
  <v-sheet :class="customClass">
    <slot></slot>
  </v-sheet>
</template>

<script>
import customClass from "@/mixins/custom-class.js";

export default {
  mixins: [customClass],
  props: {},
};
</script>

<style></style>
