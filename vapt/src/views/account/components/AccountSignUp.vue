<template>
  <v-row>
    <v-col class="d-flex align-center justify-center">
      <BaseCard custom-class="rounded mt-16" :width="1024">
        <ValidationObserver v-slot="{ handleSubmit }" ref="form">
          <v-row dense>
            <v-col>
              <BaseImage :src="image"></BaseImage>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col class="text-center">
              <div class="pa-10">
                <v-row dense>
                  <v-col>
                    <BaseSubTitle>
                      IoT-Based Real-time Vehicle Accident and Tracking System
                    </BaseSubTitle>
                  </v-col>
                </v-row>

                <v-row dense class="mt-3">
                  <v-col>
                    <BaseTitle class="font-weight-bold">
                      Register an Account?
                    </BaseTitle>
                  </v-col>
                </v-row>

                <v-row dense class="mt-8">
                  <v-col>
                    <BaseTextInput v-model="form.name" placeholder="Name">
                    </BaseTextInput>
                  </v-col>
                </v-row>

                <v-row dense class="mt-3">
                  <v-col>
                    <BaseEmailInput
                      v-model="form.email"
                      placeholder="Email Address"
                    ></BaseEmailInput>
                  </v-col>
                </v-row>

                <v-row dense class="mt-3">
                  <v-col>
                    <BaseMobileInput
                      v-model="form.mobile"
                      placeholder="Mobile Number"
                    >
                    </BaseMobileInput>
                  </v-col>
                </v-row>

                <v-row dense class="mt-3">
                  <v-col>
                    <BasePasswordInput
                      v-model="form.password1"
                      placeholder="Enter Password"
                    ></BasePasswordInput>
                  </v-col>
                </v-row>

                <v-row dense class="mt-3">
                  <v-col>
                    <BasePasswordInput
                      v-model="form.password2"
                      placeholder="Retype Password"
                    ></BasePasswordInput>
                  </v-col>
                </v-row>

                <v-row dense class="mt-3">
                  <v-col>
                    <BaseButton
                      class="primary"
                      block
                      @click="handleSubmit(registerHandler)"
                    >
                      Register
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
                      @click="$router.push({ name: 'AccountSignIn' })"
                    >
                      Sign In?
                    </BaseTextButton>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </ValidationObserver>
      </BaseCard>
    </v-col>
  </v-row>
</template>

<script>
import BaseCard from "@/components/common/BaseCard";
import BaseTitle from "@/components/common/BaseTitle";
import BaseSubTitle from "@/components/common/BaseSubTitle";
import BaseButton from "@/components/common/BaseButton";
import BasePasswordInput from "@/components/common/BasePasswordInput";
import BaseEmailInput from "@/components/common/BaseEmailInput";
import BaseTextInput from "@/components/common/BaseTextInput";
import BaseMobileInput from "@/components/common/BaseMobileInput";
import BaseTextButton from "@/components/common/BaseTextButton";
import BaseImage from "@/components/common/BaseImage";

import image from "@/assets/frames/vehicles.svg";

import { create } from "@/api/users";

// import { getAll, get, update, remove } from "@/api/users";
import { signUp, updateDetails, emailVerification } from "@/api/session";

export default {
  components: {
    BaseCard,
    BaseTitle,
    BaseSubTitle,
    BaseButton,
    BasePasswordInput,
    BaseEmailInput,
    BaseTextInput,
    BaseMobileInput,
    BaseTextButton,
    BaseImage,
  },
  data() {
    return {
      image,
      form: {
        // name: "rhalf",
        // email: "rhalfcaacbay@gmail.com",
        // mobile: "9176088771",
        // password1: "321321321",
        // password2: "321321321",
        name: null,
        email: null,
        mobile: null,
        password1: null,
        password2: null,
      },
    };
  },
  mounted() {},

  methods: {
    registerHandler() {
      if (this.form.password1 !== this.form.password2) {
        this.$root.snackbar({
          color: "error",
          message: "Passwords didn't matched!",
        });
        return;
      }

      signUp(this.form.email, this.form.password1)
        .then(async (userCredential) => {
          // Signed in
          const { user } = userCredential;

          await create(user.uid, this.form.name);

          await emailVerification();

          updateDetails(this.form.name, this.form.mobile)
            .then(() => {
              this.$root.snackbar({
                color: "success",
                message: `Added a user with email ${user.email} successfully!`,
              });
              this.$router.push({ name: "AccountSignIn" });
            })
            .catch((error) => {
              const { message } = error;
              this.$root.snackbar({
                color: "error",
                message: message,
              });
            });
        })
        .catch((error) => {
          const { message } = error;
          this.$root.snackbar({
            color: "error",
            message: message,
          });
        });
    },
  },
};
</script>

<style></style>
