<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="title">Prijava</h1>
      <p class="subtitle">Prijavite se kako biste nastavili dalje</p>
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="inputMail">E-mail</label>
          <input
            v-model="username"
            type="email"
            id="inputMail"
            placeholder="Unesite e-mail"
          />
        </div>
        <div class="input-group">
          <label for="password">Zaporka</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Unesite zaporku"
          />
        </div>
        <a href="#" class="forgot-password">Zaboravili ste lozinku?</a>
        <button type="submit" class="btn">Prijavi se</button>
      </form>
    </div>
  </div>
</template>

<script>
import { korisnik } from '@/store';
import { trenutniKorisnik } from '@/store';
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('Prijava', this.username);
      const foundKorisnik = user.find(
        (korisnik) => korisnik.email === this.username
      );
      if (foundKorisnik && foundKorisnik.password === this.password) {
        trenutniKorisnik.authenticated = true;
        trenutniKorisnik.email = foundKorisnik.email;
        trenutniKorisnik.id = foundKorisnik.id;
        trenutniKorisnik.brojTelefona = foundKorisnik.brojTelefona;
        trenutniKorisnik.ime = foundKorisnik.ime;
        trenutniKorisnik.prezime = foundKorisnik.prezime;
        console.log(trenutniKorisnik);
        console.log(korisnik);
        this.$router.replace({ name: 'korisnički prikaz' });
      } else {
        console.log('Nevažeće username ili lozinka');
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e1e2f;
}
.login-box {
  background-color: #2b2b3c;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}
.title {
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.subtitle {
  color: #a9a9b3;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}
.input-group {
  margin-bottom: 1rem;
  text-align: left;
}
label {
  display: block;
  font-size: 0.875rem;
  color: #d1d1e0;
  margin-bottom: 0.25rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #383850;
  color: #ffffff;
}
input:focus {
  outline: 2px solid #a72828;
}
.forgot-password {
  display: block;
  margin: 0.5rem 0 1.5rem;
  color: #a72828;
  font-size: 0.875rem;
  text-decoration: none;
}
.forgot-password:hover {
  text-decoration: underline;
}
.btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #a72828;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}
.btn:hover {
  background-color: #882121;
}
</style>
