<template>
  <v-row>
    <v-col class="d-flex align-center justify-center">
      <BaseSheet custom-class="ma-8">
        <BaseCard custom-class="rounded"> Verify your email first! </BaseCard>
      </BaseSheet>
    </v-col>
  </v-row>
</template>

<script>
import BaseSheet from "@/components/common/BaseSheet";
import BaseCard from "@/components/common/BaseCard";
// import BaseTitle from "@/components/common/BaseTitle";
// import BaseSubTitle from "@/components/common/BaseSubTitle";
// import BaseButton from "@/components/common/BaseButton";
// import BasePasswordInput from "@/components/common/BasePasswordInput";
// import BaseEmailInput from "@/components/common/BaseEmailInput";
// import BaseTextButton from "@/components/common/BaseTextButton";

import image from "@/assets/frames/vehicles.svg";

import { auth } from "@/plugins/firebase";
import {
  setPersistence,
  signInWithEmailAndPassword,
  browserLocalPersistence,
} from "firebase/auth";

// import { getAll, get, update, remove } from "@/api/users";

export default {
  components: {
    BaseSheet,
    BaseCard,
  },
  data() {
    return {
      image,
      form: {
        email: "rhalfcaacbay@gmail.com",
        password: "321321321",
      },
    };
  },
  mounted() {
    // console.log(getAll());
    // console.log(get("MOO8R9k7TE8cXDfktBxF"));
    // console.log(
    //   create({ name: "maricel", type: "ADMIN", status: "FOR_APPROVAL" })
    // );
    // console.log(
    //   update({
    //     id: "MOO8R9k7TE8cXDfktBxF",
    //     name: "pre",
    //     type: "ADMIN",
    //     status: "FOR_APPROVAL",
    //   })
    // );
    // console.log(
    //   remove({
    //     id: "RwIwpbahLQ9QVEDf4XOS",
    //     name: "pre",
    //     type: "ADMIN",
    //     status: "FOR_APPROVAL",
    //   })
    // );
  },

  methods: {
    login() {
      setPersistence(auth, browserLocalPersistence)
        .then(() => {
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          // return signInWithEmailAndPassword(auth, email, password);

          return signInWithEmailAndPassword(
            auth,
            this.form.email,
            this.form.password
          )
            .then((userCredential) => {
              // Signed in
              const { user } = userCredential;
              console.log("login", user);
            })
            .catch((error) => {
              const { code, message } = error;
              console.log(code, message);

              this.$root.snackbar({
                color: "error",
                message: `${code} - ${message}`,
              });
            });
        })
        .catch((error) => {
          const { id, message } = error;
          console.log(id, message);
        });
    },
  },
};
</script>

<style></style>
