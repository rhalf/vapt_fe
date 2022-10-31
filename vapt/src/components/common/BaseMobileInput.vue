<template>
  <v-text-field
    v-model="mobile"
    :class="classes"
    type="number"
    prefix="+63"
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
    mobile: {
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
