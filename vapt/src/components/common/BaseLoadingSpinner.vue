<template>
  <v-overlay :absolute="false" :value="true" :opacity="0.75" v-show="visible">
    <div class="lds-dual-ring"></div>
  </v-overlay>
</template>

<script>
import customClass from "@/mixins/custom-class";

export default {
  name: "BaseLoadingSpinner",
  mixins: [customClass],
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 100px;
  height: 100px;
  margin: 8px;
  border-radius: 50%;
  border: 10px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
  animation: lds-dual-ring 0.8s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
