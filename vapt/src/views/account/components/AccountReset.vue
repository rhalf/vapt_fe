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
                      Forgot your password?
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
                    <BaseButton
                      class="primary"
                      block
                      @click="handleSubmit(resetHandler)"
                    >
                      Reset
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
                      @click="$router.push({ name: 'AccountSignIn' })"
                    >
                      Sign In?
                    </BaseTextButton>
                  </v-col>
                  <v-col>
                    <BaseTextButton
                      @click="$router.push({ name: 'AccountSignUp' })"
                    >
                      Sign Up an Account?
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
import BaseEmailInput from "@/components/common/BaseEmailInput";
import BaseTextButton from "@/components/common/BaseTextButton";
import BaseImage from "@/components/common/BaseImage";

import image from "@/assets/frames/vehicles.svg";

// import { getAll, get, update, remove } from "@/api/users";
import { passwordResetEmail } from "@/api/session";

export default {
  components: {
    BaseCard,
    BaseTitle,
    BaseSubTitle,
    BaseButton,
    BaseEmailInput,
    BaseTextButton,
    BaseImage,
  },
  data() {
    return {
      image,
      form: {
        email: "",
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
    resetHandler() {
      this.$root.loading.show();
      passwordResetEmail(this.form.email)
        .then(() => {
          this.$root.snackbar({
            color: "success",
            message: "Reset password link is sent to your email.",
          });
          this.$router.push({ name: "AccountSignIn" });
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
