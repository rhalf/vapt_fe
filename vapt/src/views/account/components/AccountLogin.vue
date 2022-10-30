<template>
  <v-row>
    <v-col class="d-flex align-center justify-center">
      <BaseSheet custom-class="ma-8">
        <BaseCard custom-class="rounded">
          <v-row dense>
            <v-col>
              <v-img fill :src="image" :aspect-ratio="2.5 / 3"></v-img>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col class="text-center">
              <div class="pa-10">
                <v-row dense>
                  <v-col> <BaseSubTitle>Welcome to</BaseSubTitle></v-col>
                </v-row>

                <v-row dense class="mt-3">
                  <v-col>
                    <BaseTitle class="font-weight-bold">
                      IoT-Based Real-time
                    </BaseTitle>
                  </v-col>
                </v-row>

                <v-row dense>
                  <v-col>
                    <BaseTitle class="font-weight-bold">
                      Vehicle Accident and Tracking System
                    </BaseTitle>
                  </v-col>
                </v-row>

                <v-row dense class="mt-8">
                  <v-col>
                    <BaseEmailInput
                      v-model="form.email"
                      placeholder="Email Address"
                    ></BaseEmailInput>
                  </v-col>
                </v-row>

                <v-row dense class="mt-3">
                  <v-col>
                    <BasePasswordInput
                      v-model="form.password"
                      placeholder="Password"
                    ></BasePasswordInput>
                  </v-col>
                </v-row>

                <v-row dense class="mt-3">
                  <v-col>
                    <BaseButton class="primary" block @click="loginHandler">
                      Login
                    </BaseButton>
                  </v-col>
                </v-row>

                <v-row dense class="mt-5">
                  <v-col>
                    <v-divider></v-divider>
                  </v-col>
                </v-row>

                <v-row dense class="mt-5">
                  <v-col>
                    <BaseTextButton>Forgot Password?</BaseTextButton>
                  </v-col>
                  <v-col>
                    <BaseTextButton>Create an Account?</BaseTextButton>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </BaseCard>
      </BaseSheet>
    </v-col>
  </v-row>
</template>

<script>
import BaseSheet from "@/components/common/BaseSheet";
import BaseCard from "@/components/common/BaseCard";
import BaseTitle from "@/components/common/BaseTitle";
import BaseSubTitle from "@/components/common/BaseSubTitle";
import BaseButton from "@/components/common/BaseButton";
import BasePasswordInput from "@/components/common/BasePasswordInput";
import BaseEmailInput from "@/components/common/BaseEmailInput";
import BaseTextButton from "@/components/common/BaseTextButton";

import image from "@/assets/frames/vehicles.svg";

// import { getAll, get, update, remove } from "@/api/users";
import { login } from "@/api/session";

export default {
  components: {
    BaseSheet,
    BaseCard,
    BaseTitle,
    BaseSubTitle,
    BaseButton,
    BasePasswordInput,
    BaseEmailInput,
    BaseTextButton,
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
    loginHandler() {
      login(this.form.email, this.form.password)
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
    },
  },
};
</script>

<style></style>
