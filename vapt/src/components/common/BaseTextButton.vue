<template>
  <v-btn
    text
    color="primary"
    class="caption"
    :class="classes"
    :block="block"
    rounded
    small
    @click="$emit('click')"
  >
    <slot />
  </v-btn>
</template>

<script>
import customClass from "@/mixins/custom-class";

export default {
  props: {},
  mixins: [customClass],
};
</script>
