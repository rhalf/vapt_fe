import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import "@/scss/vuetify/overrides.scss";
import vapt from "@/themes/vapt";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: vapt,
    },
  },
});
