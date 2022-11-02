export default {
  SET_SIDEBAR(state, payload) {
    state.sidebar = payload;
    localStorage.setItem("sidebar", JSON.stringify(payload));
  },
  SET_DETAIL(state, payload) {
    state.detail = payload;
    localStorage.setItem("detail", JSON.stringify(payload));
  },
};
