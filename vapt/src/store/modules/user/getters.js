export default {
  user(state) {
    state.user = JSON.parse(localStorage.getItem("user"));
    return state.user;
  },
  detail(state) {
    state.detail = JSON.parse(localStorage.getItem("detail"));
    return state.detail;
  },
};
