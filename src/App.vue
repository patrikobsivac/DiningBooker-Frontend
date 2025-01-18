<template>
  <nav>
    <div class="logo">
      <router-link to="/"
        ><img
          alt="Logo"
          class="shrink"
          contain
          src="./assets/plate.png"
          width="40"
      /></router-link>
      <router-link to="#">DiningBooker</router-link>
    </div>
    <div class="nav-links">
      <router-link to="/about">O aplikaciji</router-link>
      <div class="auth-buttons">
        <router-link v-if="!isLoggedIn" to="/prijava">Prijava</router-link>
        <router-link v-if="!isLoggedIn" to="/registracija"
          >Registracija</router-link
        >
        <button v-else @click.prevent="logout">Odjava</button>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { trenutniKorisnik } from '@/store';
export default {
  data() {
    return {
      isLoggedIn: !!trenutniKorisnik.value,
    };
  },
  methods: {
    logout() {
      console.log('Korisnik se odjavio');
      this.isLoggedIn = false;
    },
  },
  watch: {
    '$store.state.trenutniKorisnik': function (newVal) {
      this.isLoggedIn = !!newVal;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #111;
  height: 100vh;
  opacity: 0.85;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #181a1b;

  .logo {
    display: flex;
    align-items: center;

    img {
      height: 40px;
      margin-right: 10px;
    }

    a {
      font-weight: 700;
      color: #ffffff;
      text-decoration: none;
      font-size: 20px;
    }
  }

  .nav-links {
    display: flex;
    align-items: center;

    a {
      font-weight: 600;
      color: #ffffff;
      text-decoration: none;
      margin-right: 20px;

      &.router-link-exact-active {
        color: #1e90ff;
      }

      &:hover {
        color: #555;
      }
    }

    .auth-buttons {
      display: flex;
      gap: 10px;
    }
  }
}
</style>
