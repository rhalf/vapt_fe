export default {
  sidebar(state) {
    state.sidebar = JSON.parse(localStorage.getItem("sidebar"));
    return state.sidebar;
  },
  detail(state) {
    state.detail = JSON.parse(localStorage.getItem("detail"));
    return state.detail;
  },
};
