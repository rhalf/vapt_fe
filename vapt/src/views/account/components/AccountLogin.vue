<template>
  <v-row>
    <v-col class="d-flex align-center justify-center">
      <BaseSheet custom-class="ma-8">
        <BaseCard custom-class="rounded">
          <ValidationObserver v-slot="{ handleSubmit }" ref="form">
            <v-row dense>
              <v-col>
                <BaseImage :src="image"></BaseImage>
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
                      <BaseButton
                        class="primary"
                        block
                        @click="handleSubmit(signInHandler)"
                      >
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
                      <BaseTextButton
                        @click="$router.push({ name: 'AccountReset' })"
                      >
                        Forgot Password?
                      </BaseTextButton>
                    </v-col>
                    <v-col>
                      <BaseTextButton
                        @click="$router.push({ name: 'AccountRegister' })"
                      >
                        Create an Account?
                      </BaseTextButton>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </ValidationObserver>
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
import BaseImage from "@/components/common/BaseImage";

import image from "@/assets/frames/vehicles.svg";

// import { getAll, get, update, remove } from "@/api/users";
import { signIn } from "@/api/session";
import { getByUid } from "@/api/users";
import { mapActions } from "vuex";

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
    BaseImage,
  },
  data() {
    return {
      image,
      form: {
        // email: "rhalfcaacbay@gmail.com",
        // password: "321321321",
        email: null,
        password: null,
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
    ...mapActions("user", ["setUser", "setDetail"]),
    signInHandler() {
      this.$root.loading.show();
      signIn(this.form.email, this.form.password)
        .then(async (userCredential) => {
          // Signed in
          const { user } = userCredential;
          this.setUser(user);

          await getByUid(user.uid)
            .then((data) => {
              this.setDetail(data);
              if (data.role.value === "ADMIN")
                this.$router.push({ name: "AdminDashboard" }).catch(() => {});
              if (data.role.value === "POLICE")
                this.$router.push({ name: "PoliceDashboard" }).catch(() => {});
              if (data.role.value === "NONE") {
                this.$root.snackbar({
                  color: "warning",
                  message:
                    "Your account is under process and will require admin's approval.",
                });
              }
            })
            .catch((error) => {
              this.$root.snackbar({
                color: "error",
                message: error.message,
              });
            });
        })
        .catch((error) => {
          this.$root.snackbar({
            color: "error",
            message: error.message,
          });
        })
        .finally(() => {
          this.$root.loading.hide();
        });
    },
  },
};
</script>

<style></style>
