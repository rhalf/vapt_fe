export default {
  setUser(contex, payload) {
    contex.commit("SET_USER", payload);
  },
  setDetail(contex, payload) {
    contex.commit("SET_DETAIL", payload);
  },
};
