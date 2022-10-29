<template>
  <div>{{}}</div>
</template>

<script>
import { getUsers } from "@/api/users";

export default {
  name: "HomeView",

  components: {},

  mounted() {
    console.log(getUsers());
  },
};
</script>
