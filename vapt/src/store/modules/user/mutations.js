export default {
  SET_USER(state, payload) {
    state.user = payload;
    localStorage.setItem("user", JSON.stringify(payload));
  },
  SET_DETAIL(state, payload) {
    state.detail = payload;
    localStorage.setItem("detail", JSON.stringify(payload));
  },
};
