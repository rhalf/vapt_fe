<template>
  <v-snackbar
    v-model="snackbar"
    :color="color"
    :multi-line="true"
    :top="true"
    :right="true"
    transition="scroll-x-reverse-transition"
  >
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="snackbar = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      color: "",
      message: "",
    };
  },
  methods: {
    open({ color, message }) {
      this.snackbar = true;
      this.color = color;
      this.message = message;
    },
  },
};
</script>
