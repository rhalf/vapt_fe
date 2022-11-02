export default {
  setSidebar(contex, payload) {
    contex.commit("SET_SIDEBAR", payload);
  },
  setDetail(contex, payload) {
    contex.commit("SET_DETAIL", payload);
  },
};
