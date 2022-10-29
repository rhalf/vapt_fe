<template>
  <v-btn
    :class="classes"
    :ripple="false"
    :block="block"
    rounded
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
