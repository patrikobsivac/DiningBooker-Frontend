<template>
  <v-app>
    <v-app-bar app color="#2a272d" dark>
      <div class="d-flex align-center">
        <v-btn href="/" class="mr-2">
          <v-img alt="Logo" class="shrink" contain src="./assets/dish.png" width="40"/>
        </v-btn>
        <v-btn text color="grey lighten-8" class="text-h6">
          Dining Booker
        </v-btn>
      </div>
      <v-spacer />
      <div class="d-flex align-center">
        <v-btn text class="pa-3" color="grey lighten-6" to="/about">
          O aplikaciji
        </v-btn>
        <v-btn text class="pa-3" color="grey lighten-6" to="/login" v-if="!isUserAuthenticated">
          Login
        </v-btn>
        <v-btn text class="pa-3" color="grey lighten-6" to="/register" v-if="!isUserAuthenticated">
          Register
        </v-btn>
        <template v-else>
          <v-btn text class="pa-3" color="grey lighten-6" to="/user">
            {{ currentUser.firstName }} {{ currentUser.lastName }}
          </v-btn>
          <v-btn text class="pa-3" color="red lighten-8" @click="handleLogout">
            Logout
          </v-btn>
        </template>
      </div>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentUser: null,
    };
  },
  computed: {
    isUserAuthenticated() {
      return !!this.currentUser;
    },
  },
  created() {
    const userData = localStorage.getItem("currentUser");
    if (userData) this.currentUser = JSON.parse(userData);
  },
  methods: {
    handleLogout() {
      localStorage.removeItem("currentUser");
      this.currentUser = null;
      window.location.reload();
    },
    updateCurrentUser(user) {
      this.currentUser = user;
      this.$router.go(0); 
    },
  },
};
</script>

<style lang="scss">
#app {
  background-image: url("../src/assets/bg.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>