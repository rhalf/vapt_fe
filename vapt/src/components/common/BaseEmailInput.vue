<template>
  <v-text-field
    v-model="email"
    :class="classes"
    type="email"
    rounded
    outlined
    :placeholder="placeholder"
    hide-details="auto"
    dense
  ></v-text-field>
</template>

<script>
import customClass from "@/mixins/custom-class";

export default {
  mixins: [customClass],
  props: {
    value: String,
  },
  computed: {
    email: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>
