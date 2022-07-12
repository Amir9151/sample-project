<template>
  <div>
    <v-toolbar  elevation="6" class="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <router-link to="/" class="text-decoration-none primary">
        <v-toolbar-title class="rounded pa-2 white--text">
          home
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
        
        <v-badge
          left
          
          color="red"
          offset-x="9"
          offset-y="19"
          overlap
          content=6
        >
          <v-icon large class="me-2">
          mdi-account-lock-open
        </v-icon>
        
        </v-badge>
        
        
    
      <div class="hidden-sm-and-down">
        <router-link :to="{ name: 'slide' }">
          <v-btn color="primary">about</v-btn>
        </router-link>

        <router-link :to="{ name: 'contact' }">
          <v-btn color="primary">concat</v-btn>
        </router-link>
        
        <router-link :to="{ name: 'login' }" class="text-decoration-none">
          <v-btn color="primary">login</v-btn>
        </router-link>
      </div>

      <div class="hidden-md-and-up">
        <v-navigation-drawer v-model="drawer" absolute temporary height="800px">
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/men/78.jpg"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "apptoolbar",

  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>