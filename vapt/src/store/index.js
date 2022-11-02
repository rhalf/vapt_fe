import Vue from "vue";
import Vuex from "vuex";

import { app, user } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    user,
  },
});
