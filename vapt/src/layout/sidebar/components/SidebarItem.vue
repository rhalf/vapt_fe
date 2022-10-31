<template>
  <v-list-item link :to="item.to">
    <v-list-item-icon>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-icon>

    <v-list-item-title>{{ item.title }}</v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      default: () => ({
        title: null,
        icon: null,
        to: null,
      }),
    },
  },
};
</script>
