<template>
  <v-card
    :class="classes"
    :elevation="elevation"
    :ripple="false"
    :max-width="maxWidth"
    :min-width="minWidth"
    :width="width"
  >
    <slot />
  </v-card>
</template>

<script>
import customClass from "@/mixins/custom-class";

export default {
  props: {
    elevation: {
      type: Number,
      default: undefined,
    },
    maxWidth: {
      type: Number,
      default: 1280,
    },
    minWidth: {
      type: Number,
      default: 240,
    },
  },
  mixins: [customClass],
};
</script>
