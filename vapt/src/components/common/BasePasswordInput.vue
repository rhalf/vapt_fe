<template>
  <v-text-field
    v-model="password"
    :class="classes"
    type="password"
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
    password: {
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
