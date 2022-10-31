<template>
  <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
    <v-text-field
      :error-messages="errors"
      v-model="email"
      :class="classes"
      type="email"
      rounded
      outlined
      :placeholder="placeholder"
      hide-details="auto"
      dense
    ></v-text-field>
  </ValidationProvider>
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
