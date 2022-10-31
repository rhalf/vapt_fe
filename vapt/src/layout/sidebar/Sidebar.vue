<template>
  <v-navigation-drawer
    id="main-sidebar"
    app
    clipped
    v-model="sidebar"
    mobile-breakpoint="960"
    mini-variant-width="70"
    width="275"
    :expand-on-hover="expandOnHover"
  >
    <v-list class="mt-1">
      <template v-for="(item, i) in items">
        <span :key="i" v-if="item.meta.userType.includes(userType)">
          <SidebarItemGroup
            v-if="item.children"
            :key="`group-${i}`"
            :item="item"
          />

          <SidebarItem v-else :key="`item-${i}`" :item="item" />
        </span>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SidebarItemGroup from "./components/SidebarItemGroup";
import SidebarItem from "./components/SidebarItem";

import sidebarItems from "./sidebar-items";

export default {
  name: "Sidebar",
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: sidebarItems,
    };
  },
  computed: {
    sidebar: {
      get() {
        return this.$store.getters["app/sidebar"];
      },
      set(val) {
        return this.$store.dispatch("app/SET_SIDEBAR", val);
      },
    },
    userType() {
      return this.$store.getters["user/user"]?.type ?? "";
    },
  },
  components: {
    SidebarItemGroup,
    SidebarItem,
  },
};
</script>
