<template>
  <div class="subtitle-1" :class="customClass">
    <slot></slot>
  </div>
</template>

<script>
import customClass from "@/mixins/custom-class.js";

export default {
  mixins: [customClass],
  props: {},
};
</script>

<style></style>
