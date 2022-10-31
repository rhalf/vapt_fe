<template>
  <v-list-group :no-action="noAction" :sub-group="subGroup" :group="item.group">
    <template v-slot:activator>
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </template>

    <template v-for="(child, i) in item.children">
      <SidebarItemGroup
        v-if="child.children"
        :key="`sub-group-${i}`"
        :item="child"
        no-action
        sub-group
      />

      <SidebarItem v-else :key="`item-${i}`" :item="child" />
    </template>
  </v-list-group>
</template>

<script>
import SidebarItem from "./SidebarItem";

export default {
  name: "SidebarItemGroup",
  props: {
    item: {
      type: Object,
      default: () => ({
        title: null,
        icon: null,
        children: [],
        group: null,
      }),
    },
    noAction: {
      type: Boolean,
      default: false,
    },
    subGroup: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SidebarItem,
  },
};
</script>
