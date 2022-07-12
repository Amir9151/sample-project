<template>
  <v-app >
    <div>
      <apptoolbar />

      

      <router-view></router-view>

      <app-footer />
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import apptoolbar from "./components/apptoolbar.vue";
import appFooter from "./components/app-footer.vue";

export default {
  name: "App",

  data() {
    return {
     
    }
  },
  components: {
    apptoolbar,
    appFooter,
  },
};
</script>



