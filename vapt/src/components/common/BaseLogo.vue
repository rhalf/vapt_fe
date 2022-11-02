<template>
  <v-img
    :src="source"
    :height="height"
    :width="width"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  props: {
    source: {
      required: true,
    },
    height: {
      type: Number,
      default: 100,
    },
    width: {
      type: Number,
      default: 100,
    },
  },
};
</script>
