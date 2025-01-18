<template>
  <nav>
    <router-link to="/about">O aplikaciji</router-link> |
    <router-link v-if="!isLoggedIn" to="/prijava">Prijava</router-link> |
    <router-link v-if="!isLoggedIn" to="/registracija"
      >Registracija</router-link
    >
    <button v-else @click.prevent="logout">Odjava</button>
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
  justify-content: center;
  gap: 10px;

  a,
  button {
    font-weight: 600;
    color: #333;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;

    &.router-link-exact-active {
      color: #1e90ff;
    }

    &:hover {
      color: #555;
    }
  }
}
</style>
