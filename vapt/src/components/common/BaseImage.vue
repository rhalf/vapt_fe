<template>
  <v-img
    :class="classes"
    :elevation="elevation"
    :ripple="false"
    :aspect-ratio="aspectRatio"
    :fill="fill"
    :src="src"
  >
  </v-img>
</template>

<script>
import customClass from "@/mixins/custom-class";

export default {
  props: {
    elevation: {
      type: Number,
      default: undefined,
    },
    aspectRatio: {
      type: Number,
      default: 2.5 / 3,
    },
    fill: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
    },
  },
  mixins: [customClass],
};
</script>
