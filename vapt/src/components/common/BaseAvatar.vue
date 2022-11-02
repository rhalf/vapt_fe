<template>
  <v-avatar @click="$emit('click')" :color="colors[index]" size="64">
    <v-img v-if="src" :src="src" :aspect-ratio="1"></v-img>
    <span :class="`white--text text-h5`">{{ alt }}</span>
  </v-avatar>
</template>

<script>
import customClass from "@/mixins/custom-class";

export default {
  mixins: [customClass],
  props: {
    src: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      index: 0,
      colors: [
        "red",
        "green",
        "lime",
        "grey",
        "black",
        "amber",
        "brown",
        "purple",
        "pink",
        "indigo",
      ],
    };
  },
  mounted() {
    this.index = Math.floor(Math.random() * 10);
  },
};
</script>
