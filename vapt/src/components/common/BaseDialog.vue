<template>
  <v-dialog v-model="dialog" :max-width="maxWidth" :persistent="persistent">
    <div class="header d-flex justify-end pa-3 white mb-n3">
      <v-btn icon small class="blue-grey lighten-5" @click="closeModalHandler">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>

    <slot />
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    maxWidth: {
      type: Number,
      default: 1920,
    },
    persistent: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    closeModalHandler() {
      this.$emit("input", false);
    },
  },
};
</script>

<style scoped>
.header {
  position: relative;
  z-index: 1;
}
</style>
