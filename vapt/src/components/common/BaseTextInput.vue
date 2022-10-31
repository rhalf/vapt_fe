<template>
  <v-text-field
    v-model="text"
    :class="classes"
    type="text"
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
    text: {
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
