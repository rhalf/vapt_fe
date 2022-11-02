<template>
  <v-navigation-drawer
    v-model="sidebar"
    app
    dark
    class="primary lighten-1"
    width="300"
  >
    <v-row dense class="mt-5">
      <v-col class="text-center">
        <BaseAvatar alt="EX"></BaseAvatar>
      </v-col>
    </v-row>

    <v-row dense class="mt-3">
      <v-col class="text-center">
        <span class="white--text body-1 font-weight-bold">
          {{ role }}
        </span>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col class="text-center">
        <span class="white--text caption"> {{ user?.email }} </span>
      </v-col>
    </v-row>

    <v-row dense class="mt-3">
      <v-col><v-divider></v-divider> </v-col>
    </v-row>

    <v-list class="mt-1" dark>
      <template v-for="(item, i) in items">
        <span :key="i">
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

import adminItems from "./items-admin";
import policeItems from "./items-police";

import BaseAvatar from "@/components/common/BaseAvatar.vue";
import { mapGetters } from "vuex";

export default {
  name: "LayoutSidebar",
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      items: [],
    };
  },
  mounted() {
    if (this.role === "ADMIN") this.items = adminItems;
    if (this.role === "POLICE") this.items = policeItems;
  },
  computed: {
    ...mapGetters("user", ["user", "detail"]),
    sidebar: {
      get() {
        return this.$store.getters["app/sidebar"];
      },
      set(val) {
        return this.$store.dispatch("app/setSidebar", val);
      },
    },
    role() {
      return this.$store.getters["user/detail"]?.role.value ?? "";
    },
  },
  components: {
    SidebarItemGroup,
    SidebarItem,
    BaseAvatar,
  },
};
</script>
