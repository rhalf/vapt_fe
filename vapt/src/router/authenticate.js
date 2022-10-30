import router from "@/router";
import store from "@/store";
import { get } from "@/api/users";
import { auth } from "@/plugins/firebase";
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log("user is logged in", user);
    store.dispatch("user/setUser", user);

    get(user.uid).then((data) => {
      let detail = data;
      console.log(detail);
      if (data.role.value === "ADMIN")
        router.push({ name: "AdminDashboard" }).catch(() => {});
      if (data.role.value === "POLICE")
        router.push({ name: "PoliceDashboard" }).catch(() => {});
    });
  } else {
    console.log("user is logged out");
    store.dispatch("user/setUser", null);
    router.push({ name: "AccountLogin" }).catch(() => {});
  }
});

router.beforeEach(async (to, from, next) => {
  // document.title = getPageTitle(to.meta.title);

  // let user = await getAuth();
  // console.log("user", user.uid);

  // let userDetail = null;
  // await get(user.uid)
  //   .then((data) => {
  //     userDetail = data;
  //     console.log("userDetail", userDetail);
  //   })
  //   .catch((error) => {
  //     console.log("error", error);
  //   });

  // if (to.meta.authenticated && user) {
  //   console.log("userDetail", userDetail);

  //   //if (userDetail.role.value == "ADMIN" && to.meta.type == "ADMIN") {
  //   next();
  //   //}
  // } else {
  //   next({ name: "AccountLogin" });
  // }

  if (to.matched.some((route) => route.meta.authenticated)) {
    let user = store.getters["user/user"];
    if (user) {
      await get(user.uid).then((data) => {
        console.log("role", data.role.value);

        if (to.meta.type === data.role.value) {
          next();
        } else {
          if (data.role.value === "ADMIN")
            router.push({ name: "AdminDashboard" }).catch(() => {});
          if (data.role.value === "POLICE")
            router.push({ name: "PoliceDashboard" }).catch(() => {});
        }
      });
    } else {
      next({ name: "AccountLogin" });
    }
  } else {
    next();
  }
});
