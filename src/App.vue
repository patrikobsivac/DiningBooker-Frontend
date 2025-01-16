<template>
  <div id="app">
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <span>|</span>
      <router-link to="/about" class="nav-link">O Aplikaciji</router-link>
      <span>|</span>
      <router-link to="/prijava" class="nav-link" v-if="trenutniKorisnik"
        >Prijava</router-link
      >
      <span>|</span>
      <router-link to="/registracija" class="nav-link" v-if="trenutniKorisnik"
        >Registracija</router-link
      >
      <a v-else href="/" @click.prevent="logout()">Odjavi</a>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { trenutniKorisnik } from '@/store';
export default {
  data() {
    return {
      trenutniKorisnik,
    };
  },
  methods: {
    logout() {},
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  color: #333;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f4f4f4;
}

nav {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-link {
    font-weight: 600;
    color: #333;
    text-decoration: none;
    padding: 10px;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: #42b983;
      transform: scale(1.1);
    }
  }

  span {
    margin: 0 10px;
    color: #bbb;
  }
}

.router-link-exact-active {
  color: #42b983 !important;
  font-weight: bold;
}
</style>
