<template>
  <v-container>
    <v-alert type="warning"  dismissible :value="alert"> please fill Email and password</v-alert>
    <v-form @submit.prevent="submit">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="family name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-btn type="submit" elevation="2" class="d-block mx-auto my-8">
        submit
      </v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
  name: "login",
  data: () => ({
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    alert:false
  }),

  methods: {
    submit() {
      if(!this.email && !this.firstname && !this.lastname)
      {this.alert=true}
      console.log(
        `Email is:${this.email} and name is: ${this.firstname}${this.lastname}`
      );
    },
  },
};
</script>

<style>
</style>