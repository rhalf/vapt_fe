import router from "@/router";
import store from "@/store";
import { getByUid } from "@/api/users";
import { auth } from "@/plugins/firebase";
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log("SIGNED_IN", user);
    await store.dispatch("user/setUser", user);
    await getByUid(user.uid).then((data) => {
      store.dispatch("user/setDetail", data);
    });
  } else {
    console.log("SIGNED_OUT", user);
    await store.dispatch("user/setUser", null);
    await store.dispatch("user/setDetail", null);
    router.push({ name: "AccountLogin" }).catch(() => {});
  }
});

router.beforeEach(async (to, from, next) => {
  // document.title = getPageTitle(to.meta.title);

  let user = await store.getters["user/user"];
  let detail = await store.getters["user/detail"];

  if (to.matched.authenticated) {
    if (user) {
      if (to.meta.type === detail.role.value) {
        next();
      } else {
        if (detail.role.value === "ADMIN") next({ name: "AdminDashboard" });
        if (detail.role.value === "POLICE") next({ name: "PoliceDashboard" });
      }
    } else next({ name: "AccountLogin" });
  } else {
    console.log("to", to);
    next();
  }
});
